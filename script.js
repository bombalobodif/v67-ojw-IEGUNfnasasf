// ─────────────────────────────────────────────────────────────────────────────
//  index.js  –  Entry point
// ─────────────────────────────────────────────────────────────────────────────

import { base, OFFSETS }            from "./core/offsets.js";
import { fns }                      from "./core/natives.js";
import { maybeRefreshWallCache }    from "./core/wallCache.js";
import { joinBattle, exitBattle, getHomePage } from "./core/gameHelpers.js";
import { worldState, handleObjects } from "./world/worldState.js";
import { isTileInPoison } from "./world/poisonZone.js";
import { aiStart, aiStop, attack, setThrowerMode }          from "./ai/autofarm.js";
import { stopWalk }                 from "./ai/walker.js";
import { getClassLoader, getMainActivity } from "./ui/androidHelpers.js";
import { Menu }                     from "./ui/menu.js";

// ─────────────────────────────────────────────────────────────────────────────
//  Feature toggles
// ─────────────────────────────────────────────────────────────────────────────

const state = {
    autojoin:   false,
    autofarm:   false,
};

let gameOver = true;
let menu     = null;

const log = (msg) => menu?.log(msg);

// ─────────────────────────────────────────────────────────────────────────────
//  Game event hooks
// ─────────────────────────────────────────────────────────────────────────────

function hookGameEvents() {
    Interceptor.attach(base.add(OFFSETS.normalGameStart), {
        onEnter() {
            gameOver = false;
            log("new game");
        }
    });

    Interceptor.attach(base.add(OFFSETS.setGameOverResult), {
        onEnter() {
            gameOver = true;
            log("game over");
            aiStop(log);
            if (!state.autojoin) return;
            setTimeout(() => { log("exiting");   exitBattle(); },  6_000);
            setTimeout(() => { log("rejoining"); joinBattle();  }, 20_000);
        }
    });

    // Main game tick – collect object positions
    Interceptor.attach(base.add(OFFSETS.LogicBattleModeClient_update), {
        onEnter(args) {
            const battleMode   = args[0];
            const ownCharacter = fns().LogicBattleModeClient_getOwnCharacter(battleMode);
            const id = data.add(0x18).readU8() | 0;
            worldState.myId = id;
            if (!ownCharacter || ownCharacter.isNull()) return;

            const ownTeamId = fns().LogicBattleModeClient_getOwnPlayerTeam(battleMode);
            const objMgr    = battleMode.add(40).readPointer();
            if (!objMgr || objMgr.isNull()) return;

            const objects = objMgr.readPointer();
            const count   = objMgr.add(12).readU32();
            if (!objects || objects.isNull() || count === 0 || count > 1000) return;

            handleObjects(objects, count, ownTeamId);
            maybeRefreshWallCache(battleMode);
        }
    });
}

// ─────────────────────────────────────────────────────────────────────────────
//  Menu setup
// ─────────────────────────────────────────────────────────────────────────────

function buildMenu(cl, activity) {
    menu = new Menu(cl, activity);
    menu.setColors("#82da48", "#406e36");

    // ── Auto Rejoin ──────────────────────────────────────────────────────────
    menu.addButton("auto_rejoin", "Auto Rejoin", {
        on:  () => { state.autojoin = true;  },
        off: () => { state.autojoin = false; },
    });

    // ── Replace ──────────────────────────────────────────────────────────────
    menu.addButton("replace", "Replace", {
        on: () => {
            try {
                const homePage       = getHomePage();
                const characterCount = homePage.add(0x40c).readS32();
                const characters     = homePage.add(0x400).readPointer();
                const ownCharacter   = characters.readPointer();
                const eventdata      = homePage.add(0x3f0).readPointer();
                const teammateCount  = characterCount - 1;

                let teamArray = ptr(0);
                if (teammateCount > 0) {
                    const dataBuf = Memory.alloc(0x8 * teammateCount);
                    for (let i = 0; i < teammateCount; i++)
                        dataBuf.add(i * 0x8).writePointer(characters.add((i + 1) * 0x8).readPointer());
                    const header = Memory.alloc(0x10);
                    header.writePointer(dataBuf);
                    header.add(0x08).writeS32(teammateCount);
                    header.add(0x0c).writeS32(teammateCount);
                    teamArray = header;
                }

                fns().homePage_startGame(
                    homePage, eventdata, ptr(0), 1,
                    ownCharacter, teamArray, 0, ptr(0), 1
                );
            } catch (e) { log("replace error: " + e); }
        }
    });

    // ── Test join ────────────────────────────────────────────────────────────
    menu.addButton("test", "Test join", {
        on: () => {
            try{
                var bm = fns().BattleMode_getInstance();
                maybeRefreshWallCache(bm);

                isTileInPoison(0,0);
            }catch (e) { log("test error: " + e); }
        }
    });

    // ── AutoFarm ─────────────────────────────────────────────────────────────
    menu.addButton("autofarm", "AutoFarm", {
        on:  () => { state.autofarm = true;  aiStart(log); },
        off: () => { state.autofarm = false; aiStop(log);  },
    });

    menu.addButton("thrower", "thrower", {
        on:  () => { setThrowerMode(true); },
        off: () => { setThrowerMode(false);  },
    });

    menu.addButton("attack", "attack test", {
        on:  () => {
            try{
                attack(0,0);
            }catch (e) { log("test error: " + e); }
        }
    });

    menu.addLogButton();
    menu.start();
}

// ─────────────────────────────────────────────────────────────────────────────
//  Bootstrap
// ─────────────────────────────────────────────────────────────────────────────

function main() {
    hookGameEvents();

    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
            const cl       = getClassLoader();
            const activity = getMainActivity(cl);
            buildMenu(cl, activity);
        });
    });
}

setTimeout(main, 5_000);
