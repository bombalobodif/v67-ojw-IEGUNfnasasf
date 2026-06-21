// ─────────────────────────────────────────────────────────────────────────────
//  OFFSETS
// ─────────────────────────────────────────────────────────────────────────────

const base = Module.findBaseAddress("libg.so");

const OFFSETS = Object.freeze({
    BattleMode_getInstance:                        0x954EE0,
    BattleMode_objectManagerPtr:                   0x28,
    BattleMode_clientInputManager:                 0x58,
    BattleMode__enter:                             0x956664,
    setGameOverResult:                             0x9559E0,
    normalGameStart:                               0x907A24,

    GameScreen__getLogicBattle:                    0x818BCC,
    BattleScreen_getInstance:                      0x80F4C8,
    BattleScreen__update:                          0x56FA80,
    BattleScreen__updateMovement:                  0x809348,
    BattleScreen__updateAutoshoot:                 0x8076A0,
    BattleScreen__stopWithStick:                   0x8015DC,
    BattleScreen__handleTouchReleased:             0x80184C,
    BattleScreen__tryToActivateSkill:              0x80D758,
    BattleScreen_activateSkill:                    0x80274C,
    BattleScreen_getClosestTargetForAutoshoot:     0x8151E0,
    BattleScreen__calculateProjectilePath:         0x811C5C,
    BattleScreen__joystickToWorld:                 0x815E84,
    BattleScreen_manualFireX:                      0xF04,
    BattleScreen_manualFireY:                      0xF08,
    BattleScreen_autoFireX:                        0xE6C,
    BattleScreen_autoFireY:                        0xE70,
    BattleScreen_autoshootPredOff:                 0x66C,
    BattleScreen_fireWrapperFn:                    0x802960,
    BattleScreen_screenWidth:                      0x884,
    BattleScreen_screenHeight:                     0x888,
    BattleScreen_viewMatrix:                       0x7E8,
    BattleScreen_spectateWidget:                   0x3C8,
    BattleScreen_spectateTextField:                0x3D8,

    LogicBattleModeClient_update:                  0xB8EEE0,
    LogicBattleModeClient_getOwnCharacter:         0xB90A28,
    LogicBattleModeClient_getOwnPlayerTeam:        0xB90680,
    LogicBattleModeClient_getOwnPlayerIndex:       0xB90678,
    LogicBattleModeClient_setClientPredictionMoveTo: 0xB90B8C,
    LogicBattleModeClient_getTileMap:              0xB909A8,
    LogicBattleModeClient__LogicBattleModeClient:  0xB8E67C,
    LogicBattleModeClient__setRandomSeed:          0xB8E878,
    LogicBattleModeClient__setPlayerAvatar:        0xB8EDF0,

    LogicGameObjectClient_getGlobalID:             0xAE49C8,
    LogicGameObjectClient_getX:                    0xAE4A1C,
    LogicGameObjectClient_getY:                    0xAE4A24,
    LogicGameObjectClient_getData:                 0xAE46FC,
    LogicGameObjectManagerClient__getGameObjects:  0xAE514C,
    LogicGameObjectManagerClient__findGameObject:  0xAE802C,
    ObjectManager_objectsArray:                    0x0,
    ObjectManager_count:                           0xC,
    ObjectManager_ptrStride:                       0x8,
    GameObj_team:                                  0x40,
    GameObj_deadFlag:                              0xD0,

    LogicCharacterClient__getWeaponSkill:          0xAB4418,
    LogicCharacterClient__getCarryableData:        0xAB35D4,
    LogicCharacterClient__getLinkedCarryable:      0xAB4728,
    LogicCharacterClient__getCurrentActiveOrCastingSkill: 0xAB5028,
    LogicCharacterData_getCollisionRadius:         0xA3B52C,
    CharData_speed:                                0x1C4,
    CharData_brawlerId:                            0x18,

    LogicProjectileData_getRadius:                 0xA8164C,
    LogicProjectileData_getSpeed:                  0xA815CC,
    LogicProjectileData__isBeam:                   0xA81770,
    LogicProjectileData__getNumEarlyTicks:         0xA81A44,
    Projectile_ctor:                               0x514F88,
    Projectile__update:                            0x5158F8,
    Projectile_spawnAngle:                         0xB8,
    VTABLE_PROJECTILE_DATA:                        0x11501B0,
    VTABLE_CHARACTER_DATA:                         0x44BF6F8,
    getProjData:                                   0xB1D358,

    TileMap_Width:                                 0xC4,
    TileMap_Height:                                0xC8,
    TileMap_TilesArray:                            0x20,
    TileTypeData_BlocksMovement:                   0x56,
    TileTypeData_BlocksProjectiles:                0x57,
    LogicTileMap__isPlayerLineOfSightClear:        0x9DF84C,
    LogicTile__setData:                            0x9DA7E0,

    ClientInput_constructor_int:                   0xB53A68,
    ClientInputManager_addInput:                   0x79BF3C,
    ClientInput_x:                                 0xC,
    ClientInput_y:                                 0x10,
    ClientInputMessage_sendMovement:               0x7C13DC,

    Gui_getInstance:                               0x591644,
    Gui_showFloaterTextAtDefaultPos:               0x818CDC,
    GUI__showFloaterTextAt:                        0x591F28,
    GUI__showPopup:                                0x592C24,
    GUI__getDefaultFloaterPos:                     0x591DA0,

    StringCtor:                                    0xDCF8F0,
    TextField_setText:                             0xC4A978,
    TextField_setText_ui:                          0x598298,
    String__format:                                0xDD244C,
    nativeCopyToClipboard:                         0xDD91F8,

    HomeMode__getInstance:                         0x95F488,
    getHomeScreen:                                 0x9605E4,
    getHomePage:                                   0x81E528,
    homePage_startGame:                            0x8FF70C,
    mapEditorScreen_sendGoHomeMessage:             0x82F928,
    GameStateManager__getInstance:                 0x95DAE4,
    GameStateManager__isState:                     0x95E7C0,

    MovieClip__gotoAndStopFrameIndex:              0xC1C90C,
    MovieClip__getTextFieldByName:                 0xC1D550,
    MovieClip__setChildVisible:                    0xC1DD48,
    DisplayObject__setXY:                          0xC16B4C,
    DisplayObject__removeFromParent:               0xC16EA8,
    Sprite__addChild:                              0xC2D8C4,
    Sprite__addChildAt:                            0xC2D8CC,
    Sprite__removeChild:                           0xC2DB9C,
    Stage_addChild:                                0xC336A0,
    StageInstanceGlobalPtr:                        0x12393E0,

    LogicSkillData__getActiveTime:                 0xA940DC,
    LogicSkillData__getRechargeTime:               0xA943C0,
    LogicSkillData__getMaxCharge:                  0xA943D0,
    LogicSkillData__getMsBetweenAttacks:           0xA943F8,

    HeroData_namePtr:                              0x48,
    Joy_currentX:                                  0x94,
    Joy_currentY:                                  0x98,
    Joy_centerX:                                   0x9C,
    Joy_centerY:                                   0xA0,
    Joy_isDragging:                                0x10,
    Message_port:                                  0x90,
    Message_ipPtr:                                 0x98,
    ScString_length:                               0x4,
    ScString_data:                                 0x8,
    ScrollArea__scrollTo:                          0xBE15E8,
    ScrollArea__updateBounds:                      0xC4FA78,
    ScrollArea__addContent:                        0xC4FC78,
    ScrollArea__removeAllContent:                  0xC4FCC8,
    GameButtonCtor:                                0x597C48,
    GameButton_setText:                            0x598298,
    CustomButton_onButtonPressed:                  0xC4DFCC,
    ResourceManager__getCSV:                       0xBEEA48,
    ResourceListener__addFile:                     0xC9A180,
    FramerateManager__setSegment:                  0xDDBDE0,
    Screen__getHeight:                             0xDE21F4,
    Screen__getDpiClass:                           0xDE2200,
});

// ─────────────────────────────────────────────────────────────────────────────
//  NATIVES
// ─────────────────────────────────────────────────────────────────────────────

const malloc = new NativeFunction(Module.getExportByName("libc.so", "malloc"), "pointer", ["uint"]);

let _n = null;
function fns() {
    if (_n) return _n;
    _n = {
        BattleMode_getInstance:
            new NativeFunction(base.add(OFFSETS.BattleMode_getInstance),                         "pointer", []),
        LogicGameObjectClient_getX:
            new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getX),                     "int32",   ["pointer"]),
        LogicGameObjectClient_getY:
            new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getY),                     "int32",   ["pointer"]),
        LogicBattleModeClient_getOwnCharacter:
            new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getOwnCharacter),          "pointer", ["pointer"]),
        LogicBattleModeClient_getOwnPlayerTeam:
            new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getOwnPlayerTeam),         "int32",   ["pointer"]),
        LogicBattleModeClient_setClientPredictionMoveTo:
            new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_setClientPredictionMoveTo),"void",    ["pointer","int","int","int"]),
        LogicBattleModeClient_getTileMap:
            new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getTileMap),               "pointer", ["pointer"]),
        LogicGameObjectClient_getGlobalID:
            new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getGlobalID),              "uint32",  ["pointer"]),
        LogicGameObjectClient_getData:
            new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getData),                  "pointer", ["pointer"]),
        LogicProjectileData_getSpeed:
            new NativeFunction(base.add(OFFSETS.LogicProjectileData_getSpeed),                   "uint32",  ["pointer"]),
        LogicProjectileData_getRadius:
            new NativeFunction(base.add(OFFSETS.LogicProjectileData_getRadius),                  "uint32",  ["pointer"]),
        LogicCharacterData_getCollisionRadius:
            new NativeFunction(base.add(OFFSETS.LogicCharacterData_getCollisionRadius),          "uint32",  ["pointer"]),
        BattleScreen_getLogicBattle:
            new NativeFunction(base.add(OFFSETS.GameScreen__getLogicBattle),                     "pointer", ["pointer"]),
        BattleScreen_getInstance:
            new NativeFunction(base.add(OFFSETS.BattleScreen_getInstance),                       "pointer", []),
        ClientInput_ctor:
            new NativeFunction(base.add(OFFSETS.ClientInput_constructor_int),                    "pointer", ["pointer","int"]),
        ClientInputManager_add:
            new NativeFunction(base.add(OFFSETS.ClientInputManager_addInput),                    "void",    ["pointer","pointer"]),
        Gui_getInstance:
            new NativeFunction(base.add(OFFSETS.Gui_getInstance),                               "pointer", []),
        Gui_showFloaterTextAtDefaultPos:
            new NativeFunction(base.add(OFFSETS.Gui_showFloaterTextAtDefaultPos),               "void",    ["pointer","pointer","int","int"]),
        StringCtor:
            new NativeFunction(base.add(OFFSETS.StringCtor),                                    "pointer", ["pointer","pointer"]),
        normalGameStart:
            new NativeFunction(base.add(OFFSETS.normalGameStart),                               "void",    ["pointer"]),
        getHomeScreen:
            new NativeFunction(base.add(OFFSETS.getHomeScreen),                                 "pointer", ["pointer"]),
        homeModeGetInstance:
            new NativeFunction(base.add(OFFSETS.HomeMode__getInstance),                         "pointer", []),
        getHomePage:
            new NativeFunction(base.add(OFFSETS.getHomePage),                                   "pointer", ["pointer"]),
        homePage_startGame:
            new NativeFunction(base.add(OFFSETS.homePage_startGame),                            "void",    ["pointer","pointer","pointer","int","pointer","pointer","uint8","pointer","uint8"]),
        guiCloseAllPopups:
            new NativeFunction(base.add(OFFSETS.GUI__showPopup),                                "void",    ["pointer"]),
        mapEditorScreen_sendGoHomeMessage:
            new NativeFunction(base.add(OFFSETS.mapEditorScreen_sendGoHomeMessage),             "void",    ["pointer"]),
    };
    Object.freeze(_n);
    return _n;
}

// ─────────────────────────────────────────────────────────────────────────────
//  WALL CACHE
// ─────────────────────────────────────────────────────────────────────────────

const FAST_RESCAN_MS  = 500;
const FULL_REBUILD_MS = 15000;
const TILE_SIZE       = 300;
const BIT_MOVE        = 0x80;
const BIT_PROJ        = 0x40;

const wallCache = {
    wall: null, w: 0, h: 0,
    tilesPtr: null, destructibles: null,
    gen: 0, lastFullBuild: 0, lastFastScan: 0,
};

function _readPacked(tilesArr, idx) {
    const tile = tilesArr.add(idx * Process.pointerSize).readPointer();
    if (tile.isNull()) return 0;
    const ttype = tile.readPointer();
    if (ttype.isNull()) return 0;
    const flags = ttype.add(OFFSETS.TileTypeData_BlocksMovement).readU16();
    return ((flags & 0xff) ? BIT_MOVE : 0) | ((flags >> 8 & 0xff) ? BIT_PROJ : 0);
}

function _fullRebuild(tm) {
    if (!tm || tm.isNull()) return false;
    const w = tm.add(OFFSETS.TileMap_Width).readS32();
    const h = tm.add(OFFSETS.TileMap_Height).readS32();
    if (w <= 0 || w > 120 || h <= 0 || h > 120) return false;
    const tilesArr = tm.add(OFFSETS.TileMap_TilesArray).readPointer();
    if (tilesArr.isNull()) return false;
    const total = w * h;
    if (total <= 0 || total > 14400) return false;

    const wall = new Uint8Array(total);
    const dest = [];
    for (let i = 0; i < total; i++) {
        const packed = _readPacked(tilesArr, i);
        wall[i] = packed;
        if (packed) dest.push(i);
    }

    const now = Date.now();
    Object.assign(wallCache, { wall, w, h, tilesPtr: tilesArr, destructibles: dest,
        gen: wallCache.gen + 1, lastFullBuild: now, lastFastScan: now });
    return true;
}

function _fastRescan() {
    const { wall, tilesPtr, destructibles } = wallCache;
    if (!wall || !destructibles || !tilesPtr || tilesPtr.isNull()) return;
    let changed = false, writeIdx = 0;
    for (const i of destructibles) {
        let packed = 0;
        try { packed = _readPacked(tilesPtr, i); } catch (_) {}
        if (wall[i] !== packed) { wall[i] = packed; changed = true; }
        if (packed) destructibles[writeIdx++] = i;
    }
    if (writeIdx !== destructibles.length) { destructibles.length = writeIdx; changed = true; }
    if (changed) wallCache.gen++;
    wallCache.lastFastScan = Date.now();
}

function maybeRefreshWallCache(logic, now = Date.now()) {
    if (!logic || logic.isNull()) return;
    const rebuild = () => {
        const tm = fns().LogicBattleModeClient_getTileMap(logic);
        if (tm && !tm.isNull()) _fullRebuild(tm);
    };
    if (!wallCache.wall)                                   { rebuild(); return; }
    if (now - wallCache.lastFullBuild >= FULL_REBUILD_MS)  { rebuild(); return; }
    if (now - wallCache.lastFastScan  >= FAST_RESCAN_MS)   _fastRescan();
}

function losCheck(wx0, wy0, wx1, wy1, checkBit) {
    const { wall, w, h } = wallCache;
    if (!wall) return true;
    let cx = (wx0 / TILE_SIZE) | 0, cy = (wy0 / TILE_SIZE) | 0;
    const tx = (wx1 / TILE_SIZE) | 0, ty = (wy1 / TILE_SIZE) | 0;
    if (cx === tx && cy === ty) return true;
    const dx = Math.abs(tx - cx), dy = -Math.abs(ty - cy);
    const sx = cx < tx ? 1 : -1, sy = cy < ty ? 1 : -1;
    let err = dx + dy;
    for (let n = 0, max = dx - dy + 2; n < max; n++) {
        const e2 = 2 * err;
        if (e2 >= dy) { err += dy; cx += sx; }
        if (e2 <= dx) { err += dx; cy += sy; }
        if (cx === tx && cy === ty) return true;
        if (cx >= 0 && cx < w && cy >= 0 && cy < h && wall[cy * w + cx] & checkBit) return false;
    }
    return true;
}

function traceWallHit(wx, wy, dirX, dirY, maxDist, checkBit) {
    const { wall, w, h } = wallCache;
    if (!wall || maxDist <= 0 || w <= 0 || h <= 0) return maxDist;
    const INV_T = 1 / TILE_SIZE;
    for (let dist = 40; dist <= maxDist; dist = Math.min(dist + 40, maxDist)) {
        const tx = ((wx + dirX * dist) * INV_T) | 0;
        const ty = ((wy + dirY * dist) * INV_T) | 0;
        if (tx < 0 || tx >= w || ty < 0 || ty >= h || wall[ty * w + tx] & checkBit)
            return Math.max(0, dist - 75);
        if (dist === maxDist) break;
    }
    return maxDist;
}

// ─────────────────────────────────────────────────────────────────────────────
//  POISON ZONE (shrinking map)
// ─────────────────────────────────────────────────────────────────────────────
// Každých POISON_TICK_MS se border zmenší o 1 tile ze všech stran.
// poisonBorder = kolik tilů je z každé strany už "otravných".

const POISON_TICK_MS = 5000;

const poisonZone = {
    enabled: false,
    border: 0,          // aktuální šířka poison borderu v tilech
    lastTick: 0,
    _iv: null,
};

function poisonStart() {
    poisonZone.border   = 0;
    poisonZone.lastTick = Date.now();
    poisonZone._iv = setInterval(() => {
        poisonZone.border++;
        log(`Poison border: ${poisonZone.border} tiles`);
    }, POISON_TICK_MS);
    log("Poison zone started");
}

function poisonStop() {
    if (poisonZone._iv) { clearInterval(poisonZone._iv); poisonZone._iv = null; }
    poisonZone.border = 0;
    log("Poison zone stopped");
}

// Vrátí true pokud je tile (tx, ty) v poisonu
function isTileInPoison(tx, ty) {
    if (!poisonZone.enabled || poisonZone.border <= 0) return false;
    const { w, h } = wallCache;
    if (w === 0 || h === 0) return false;
    const b = poisonZone.border;
    return tx < b || ty < b || tx >= (w - b) || ty >= (h - b);
}

// Vrátí true pokud je world pozice v poisonu
function isPosInPoison(wx, wy) {
    return isTileInPoison((wx / TILE_SIZE) | 0, (wy / TILE_SIZE) | 0);
}

// Bezpečný střed mapy (nejbezpečnější oblast)
function getSafeCenter() {
    const { w, h } = wallCache;
    return {
        x: (w / 2 | 0) * TILE_SIZE + TILE_SIZE / 2,
        y: (h / 2 | 0) * TILE_SIZE + TILE_SIZE / 2,
    };
}

// ─────────────────────────────────────────────────────────────────────────────
//  WORLD STATE  (hráči, střely)
// ─────────────────────────────────────────────────────────────────────────────

const worldState = {
    enemies:     [],   // [{ x, y, teamId }]  – type=1 nepřátelé
    projectiles: [],   // [{ x, y }]           – type=2 střely
    myTeamId:    -1,
    myX: 0, myY: 0,
};

// Kolik world-jednotek od nepřítele/střely se snažíme udržet
const ENEMY_AVOID_RADIUS  = TILE_SIZE * 4;   // 4 tile
const BULLET_AVOID_RADIUS = TILE_SIZE * 3;   // 3 tile

// ─────────────────────────────────────────────────────────────────────────────
//  MOVEMENT
// ─────────────────────────────────────────────────────────────────────────────

function getBattleContext() {
    try {
        const screen = fns().BattleScreen_getInstance();
        if (!screen || screen.isNull()) return null;
        const logic  = fns().BattleScreen_getLogicBattle(screen);
        if (!logic  || logic.isNull())  return null;
        const battle = fns().BattleMode_getInstance();
        if (!battle || battle.isNull()) return null;
        return { logic, battle };
    } catch (_) { return null; }
}

function getMyPosition(logic) {
    try {
        const own = fns().LogicBattleModeClient_getOwnCharacter(logic);
        if (!own || own.isNull()) return null;
        return { x: fns().LogicGameObjectClient_getX(own), y: fns().LogicGameObjectClient_getY(own) };
    } catch (_) { return null; }
}

function sendMove(logic, battle, wx, wy) {
    wx = wx | 0; wy = wy | 0;
    if (!isFinite(wx) || !isFinite(wy) || Math.abs(wx) > 200000 || Math.abs(wy) > 200000) return;
    try {
        fns().LogicBattleModeClient_setClientPredictionMoveTo(logic, wx, wy, 1);
        if (!battle || battle.isNull()) return;
        const manager = battle.add(OFFSETS.BattleMode_clientInputManager).readPointer();
        if (!manager || manager.isNull()) return;
        const ci = malloc(64);
        fns().ClientInput_ctor(ci, 2);
        ci.add(OFFSETS.ClientInput_x).writeS32(wx);
        ci.add(OFFSETS.ClientInput_y).writeS32(wy);
        fns().ClientInputManager_add(manager, ci);
    } catch (_) {}
}

// ─────────────────────────────────────────────────────────────────────────────
//  PATHFINDING  (A* s podporou poison-zóny a danger-cost)
// ─────────────────────────────────────────────────────────────────────────────

// Vrací přidaný cost pro tile (tx,ty) — poison + blízkost nepřátel/střel
function tileDangerCost(tx, ty) {
    let cost = 0;

    // Poison zone — silná penalizace
    if (isTileInPoison(tx, ty)) cost += 10000;

    const wx = tx * TILE_SIZE + TILE_SIZE / 2;
    const wy = ty * TILE_SIZE + TILE_SIZE / 2;

    // Nepřátelé
    for (const e of worldState.enemies) {
        const dx = wx - e.x, dy = wy - e.y;
        const d2 = dx * dx + dy * dy;
        const r2 = ENEMY_AVOID_RADIUS * ENEMY_AVOID_RADIUS;
        if (d2 < r2) {
            // čím blíže, tím vyšší cost (max ~500 při dotyku)
            cost += Math.round(500 * (1 - d2 / r2));
        }
    }

    // Střely
    for (const p of worldState.projectiles) {
        const dx = wx - p.x, dy = wy - p.y;
        const d2 = dx * dx + dy * dy;
        const r2 = BULLET_AVOID_RADIUS * BULLET_AVOID_RADIUS;
        if (d2 < r2) {
            cost += Math.round(800 * (1 - d2 / r2));
        }
    }

    return cost;
}

function pathfind(startWX, startWY, goalWX, goalWY) {
    const { wall, w, h } = wallCache;
    if (!wall || w === 0 || h === 0) return null;

    const clamp = (v, max) => v < 0 ? 0 : v > max ? max : v;
    const sx = clamp((startWX / TILE_SIZE) | 0, w - 1);
    const sy = clamp((startWY / TILE_SIZE) | 0, h - 1);
    const gx = clamp((goalWX  / TILE_SIZE) | 0, w - 1);
    const gy = clamp((goalWY  / TILE_SIZE) | 0, h - 1);

    if (sx === gx && sy === gy) return [{ x: goalWX, y: goalWY }];
    if (wall[gy * w + gx] & BIT_MOVE) return null;

    const idx  = (x, y) => y * w + x;
    const heur = (x, y) => (Math.abs(x - gx) + Math.abs(y - gy)) * 10;

    const INF   = 0x7fffffff;
    const gCost = new Int32Array(w * h).fill(INF);
    const prev  = new Int32Array(w * h).fill(-1);

    // Min-heap pomocí sorted insert (pro tento rozsah map je to dost rychlé)
    const open = [];
    const push = (f, x, y) => {
        let lo = 0, hi = open.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; open[mid].f <= f ? lo = mid + 1 : hi = mid; }
        open.splice(lo, 0, { f, x, y });
    };

    gCost[idx(sx, sy)] = 0;
    push(heur(sx, sy), sx, sy);

    const DIRS = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
    const COST = [10,  10,   10,   10,   14,   14,   14,    14  ];

    while (open.length) {
        const { x, y } = open.shift();
        const ci = idx(x, y);
        if (x === gx && y === gy) break;
        for (let d = 0; d < 8; d++) {
            const nx = x + DIRS[d][0], ny = y + DIRS[d][1];
            if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
            if (wall[idx(nx, ny)] & BIT_MOVE) continue;
            if (d >= 4 && ((wall[idx(x, ny)] & BIT_MOVE) || (wall[idx(nx, y)] & BIT_MOVE))) continue;
            const ng = gCost[ci] + COST[d] + tileDangerCost(nx, ny);
            const ni = idx(nx, ny);
            if (ng >= gCost[ni]) continue;
            gCost[ni] = ng;
            prev[ni]  = ci;
            push(ng + heur(nx, ny), nx, ny);
        }
    }

    if (gCost[idx(gx, gy)] === INF) return null;

    const path = [];
    let ci = idx(gx, gy);
    while (ci !== -1) {
        path.push({ x: (ci % w) * TILE_SIZE + TILE_SIZE / 2, y: ((ci / w) | 0) * TILE_SIZE + TILE_SIZE / 2 });
        ci = prev[ci];
    }
    path.reverse();
    path[path.length - 1] = { x: goalWX, y: goalWY };
    return path;
}

// ─────────────────────────────────────────────────────────────────────────────
//  WALKER
// ─────────────────────────────────────────────────────────────────────────────

const walker = { active: false, path: null, stepIdx: 0, onDone: null, _iv: null };

function startWalk(goalWX, goalWY, onDone = null) {
    stopWalk();

    const ctx = getBattleContext();
    if (!ctx) { onDone?.(false); return false; }

    maybeRefreshWallCache(ctx.logic);

    const pos = getMyPosition(ctx.logic);
    if (!pos) { onDone?.(false); return false; }

    const path = pathfind(pos.x, pos.y, goalWX, goalWY);
    if (!path) { onDone?.(false); return false; }

    walker.active  = true;
    walker.path    = path;
    walker.stepIdx = 0;
    walker.onDone  = onDone;

    walker._iv = setInterval(() => {
        if (!walker.active) { clearInterval(walker._iv); return; }
        const c = getBattleContext();
        if (!c) { stopWalk(); walker.onDone?.(false); return; }

        const wp = walker.path[walker.stepIdx];
        sendMove(c.logic, c.battle, wp.x, wp.y);

        const p = getMyPosition(c.logic);
        if (!p) return;
        const dx = p.x - wp.x, dy = p.y - wp.y;
        if (dx * dx + dy * dy < TILE_SIZE * TILE_SIZE) {
            if (++walker.stepIdx >= walker.path.length) {
                stopWalk();
                walker.onDone?.(true);
            }
        }
    }, 100);

    return true;
}

function stopWalk() {
    walker.active = false;
    if (walker._iv) { clearInterval(walker._iv); walker._iv = null; }
    walker.path = null; walker.stepIdx = 0; walker.onDone = null;
}

// ─────────────────────────────────────────────────────────────────────────────
//  AUTOFARM AI
// ─────────────────────────────────────────────────────────────────────────────
//
//  Logika:
//  1. Každých AI_TICK_MS přepočítáme situaci.
//  2. Pokud jsme v poisonu → jdeme ke středu mapy (priorita 1).
//  3. Pokud je poblíž střela (BULLET_AVOID_RADIUS) → utečeme od ní (priorita 2).
//  4. Pokud je poblíž nepřítel (ENEMY_AVOID_RADIUS) → vybereme bezpečný roaming bod (priorita 3).
//  5. Jinak → zvolíme náhodný roaming bod po bezpečné části mapy (priorita 4).
//
//  Cíl se přepočítává pouze když:
//    - dorazíme na předchozí cíl, nebo
//    - situace se výrazně změní (nový nebezpečný podnět)

const AI_TICK_MS      = 600;   // jak často přehodnocujeme situaci
const ROAM_CANDIDATES = 12;    // kolik náhodných bodů generujeme při roamingu

const aiState = {
    _iv: null,
    currentGoalX: 0,
    currentGoalY: 0,
    mode: "idle",   // "idle" | "escape_poison" | "dodge_bullet" | "avoid_enemy" | "roam"
    stuckCounter: 0,
    lastX: 0, lastY: 0,
};

function aiStart() {
    aiStop();
    aiState.mode = "idle";
    aiState.stuckCounter = 0;
    aiState._iv = setInterval(aiTick, AI_TICK_MS);
    log("AutoFarm AI started");
}

function aiStop() {
    if (aiState._iv) { clearInterval(aiState._iv); aiState._iv = null; }
    stopWalk();
    aiState.mode = "idle";
    log("AutoFarm AI stopped");
}

function aiTick() {
    const ctx = getBattleContext();
    if (!ctx) return;

    const pos = getMyPosition(ctx.logic);
    if (!pos) return;

    // Detekce zaseknutí
    const ddx = pos.x - aiState.lastX, ddy = pos.y - aiState.lastY;
    if (ddx * ddx + ddy * ddy < 50 * 50 && aiState.mode !== "idle") {
        aiState.stuckCounter++;
        if (aiState.stuckCounter >= 4) {
            aiState.stuckCounter = 0;
            stopWalk();
            // Vygeneruj záchranný bod daleko od aktuální pozice
            const escape = pickRoamPoint(pos.x, pos.y, true);
            if (escape) startWalk(escape.x, escape.y);
            return;
        }
    } else {
        aiState.stuckCounter = 0;
    }
    aiState.lastX = pos.x; aiState.lastY = pos.y;

    // ── Priorita 1: Poison ──────────────────────────────────────────────────
    if (poisonZone.enabled && isPosInPoison(pos.x, pos.y)) {
        if (aiState.mode !== "escape_poison") {
            aiState.mode = "escape_poison";
            stopWalk();
            const safe = pickSafePoint(pos.x, pos.y);
            log(`AI: poison! → (${safe.x|0}, ${safe.y|0})`);
            startWalk(safe.x, safe.y);
        }
        return;
    }

    // ── Priorita 2: Střela blízko ────────────────────────────────────────────
    const closeBullet = closestThreat(pos.x, pos.y, worldState.projectiles, BULLET_AVOID_RADIUS);
    if (closeBullet) {
        if (aiState.mode !== "dodge_bullet") {
            aiState.mode = "dodge_bullet";
            stopWalk();
            const dodge = fleePoint(pos.x, pos.y, closeBullet.x, closeBullet.y, TILE_SIZE * 5);
            if (dodge) {
                log(`AI: dodge bullet`);
                startWalk(dodge.x, dodge.y);
            }
        }
        return;
    }

    // ── Priorita 3: Nepřítel blízko ──────────────────────────────────────────
    const closeEnemy = closestThreat(pos.x, pos.y, worldState.enemies, ENEMY_AVOID_RADIUS);
    if (closeEnemy) {
        if (aiState.mode !== "avoid_enemy") {
            aiState.mode = "avoid_enemy";
            stopWalk();
            const flee = fleePoint(pos.x, pos.y, closeEnemy.x, closeEnemy.y, TILE_SIZE * 6);
            if (flee) {
                log(`AI: avoid enemy`);
                startWalk(flee.x, flee.y);
            }
        }
        return;
    }

    // ── Priorita 4: Roaming ──────────────────────────────────────────────────
    if (!walker.active || aiState.mode !== "roam") {
        aiState.mode = "roam";
        const pt = pickRoamPoint(pos.x, pos.y, false);
        if (pt) {
            log(`AI: roam → (${pt.x|0}, ${pt.y|0})`);
            startWalk(pt.x, pt.y, () => { aiState.mode = "idle"; });
        }
    }
}

// Nejbližší hrozba do daného rádiusu, nebo null
function closestThreat(myX, myY, list, radius) {
    let best = null, bestD2 = radius * radius;
    for (const t of list) {
        const dx = myX - t.x, dy = myY - t.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < bestD2) { bestD2 = d2; best = t; }
    }
    return best;
}

// Bod v opačném směru od hrozby, snap na grid a bezpečnostní kontroly
function fleePoint(myX, myY, threatX, threatY, dist) {
    const dx = myX - threatX, dy = myY - threatY;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = dx / len, ny = dy / len;

    // Zkus několik vzdáleností (nejdál → nejblíž)
    for (const d of [dist, dist * 0.7, dist * 0.4]) {
        const tx = (myX + nx * d) | 0;
        const ty = (myY + ny * d) | 0;
        if (isPosInPoison(tx, ty)) continue;
        const tileX = (tx / TILE_SIZE) | 0, tileY = (ty / TILE_SIZE) | 0;
        if (tileX < 0 || tileX >= wallCache.w || tileY < 0 || tileY >= wallCache.h) continue;
        if (wallCache.wall && wallCache.wall[tileY * wallCache.w + tileX] & BIT_MOVE) continue;
        return { x: tx, y: ty };
    }
    // Záloha: střed bezpečné zóny
    return pickSafePoint(myX, myY);
}

// Vrátí bezpečný bod blízko středu (mimo poison)
function pickSafePoint(myX, myY) {
    const { w, h } = wallCache;
    if (w === 0 || h === 0) return getSafeCenter();
    const b = (poisonZone.enabled ? poisonZone.border : 0) + 2; // +2 tile buffer
    const safeW = Math.max(1, w - b * 2);
    const safeH = Math.max(1, h - b * 2);

    // Nejprve zkus přesný střed
    const cx = (w / 2 | 0) * TILE_SIZE + TILE_SIZE / 2;
    const cy = (h / 2 | 0) * TILE_SIZE + TILE_SIZE / 2;
    if (!isPosInPoison(cx, cy)) return { x: cx, y: cy };

    // Zkus náhodné body ve safe zóně
    for (let i = 0; i < 20; i++) {
        const rx = (b + Math.random() * safeW | 0) * TILE_SIZE + TILE_SIZE / 2;
        const ry = (b + Math.random() * safeH | 0) * TILE_SIZE + TILE_SIZE / 2;
        const tileX = (rx / TILE_SIZE) | 0, tileY = (ry / TILE_SIZE) | 0;
        if (wallCache.wall && wallCache.wall[tileY * wallCache.w + tileX] & BIT_MOVE) continue;
        if (!isPosInPoison(rx, ry)) return { x: rx, y: ry };
    }
    return { x: cx, y: cy };
}

// Roaming bod: náhodný bezpečný tile, min. 3 tile od aktuální pozice
function pickRoamPoint(myX, myY, forceDistant) {
    const { wall, w, h } = wallCache;
    if (!wall || w === 0 || h === 0) return null;

    const b       = (poisonZone.enabled ? poisonZone.border : 0) + 1;
    const minDist = forceDistant ? TILE_SIZE * 8 : TILE_SIZE * 3;
    const minD2   = minDist * minDist;

    let best = null, bestScore = -1;

    for (let i = 0; i < ROAM_CANDIDATES; i++) {
        const tx = b + (Math.random() * (w - b * 2) | 0);
        const ty = b + (Math.random() * (h - b * 2) | 0);
        if (tx < 0 || tx >= w || ty < 0 || ty >= h) continue;
        if (wall[ty * w + tx] & BIT_MOVE) continue;

        const wx = tx * TILE_SIZE + TILE_SIZE / 2;
        const wy = ty * TILE_SIZE + TILE_SIZE / 2;
        if (isPosInPoison(wx, wy)) continue;

        const dx = wx - myX, dy = wy - myY;
        const d2 = dx * dx + dy * dy;
        if (d2 < minD2) continue;

        // Score: upřednostnění bodů daleko od nepřátel + blízko středu safe zóny
        const dangerCost = tileDangerCost(tx, ty);
        const score = d2 / (TILE_SIZE * TILE_SIZE) - dangerCost / 100;
        if (score > bestScore) { bestScore = score; best = { x: wx, y: wy }; }
    }

    return best;
}

// ─────────────────────────────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function getStrPtr(str)    { return Memory.allocUtf8String(str); }
function getScPtr(str)     { const p = malloc(40); fns().StringCtor(p, getStrPtr(str)); return p; }
function showFloater(text) { fns().Gui_showFloaterTextAtDefaultPos(fns().Gui_getInstance(), getScPtr(text), 0, -1); }

function getHomePage() {
    return fns().getHomePage(fns().getHomeScreen(fns().homeModeGetInstance()));
}

function joinBattle() {
    try { fns().normalGameStart(getHomePage()); }
    catch (e) { log("joinBattle error: " + e); }
}

function exitBattle() {
    const fake = Memory.alloc(0x901);
    fake.writeByteArray(new Array(0x901).fill(0));
    fns().mapEditorScreen_sendGoHomeMessage(fake);
}

// ─────────────────────────────────────────────────────────────────────────────
//  ANDROID UI
// ─────────────────────────────────────────────────────────────────────────────

function getClassLoader() {
    return {
        Gravity:                             Java.use("android.view.Gravity"),
        TextView:                            Java.use("android.widget.TextView"),
        LinearLayout:                        Java.use("android.widget.LinearLayout"),
        LinearLayout_LayoutParams:           Java.use("android.widget.LinearLayout$LayoutParams"),
        FrameLayout:                         Java.use("android.widget.FrameLayout"),
        FrameLayout_LayoutParams:            Java.use("android.widget.FrameLayout$LayoutParams"),
        Color:                               Java.use("android.graphics.Color"),
        ActivityThread:                      Java.use("android.app.ActivityThread"),
        ActivityThread_ActivityClientRecord: Java.use("android.app.ActivityThread$ActivityClientRecord"),
        View_OnTouchListener:                Java.use("android.view.View$OnTouchListener"),
        View_OnClickListener:                Java.use("android.view.View$OnClickListener"),
        MotionEvent:                         Java.use("android.view.MotionEvent"),
        String:                              Java.use("java.lang.String"),
        ScrollView:                          Java.use("android.widget.ScrollView"),
        Button:                              Java.use("android.widget.Button"),
        GradientDrawable:                    Java.use("android.graphics.drawable.GradientDrawable"),
    };
}

function dp(ctx, v) { return parseInt(v * ctx.getResources().getDisplayMetrics().density.value); }

function getMainActivity(cl) {
    const thread = cl.ActivityThread.sCurrentActivityThread.value;
    const record = Java.cast(thread.mActivities.value.valueAt(0), cl.ActivityThread_ActivityClientRecord);
    return record.activity.value;
}

function makeRoundedDrawable(cl, color, radius, activity) {
    const d = cl.GradientDrawable.$new();
    d.setShape(cl.GradientDrawable.RECTANGLE.value);
    d.setColor(cl.Color.parseColor(color));
    d.setCornerRadius(dp(activity, radius));
    return d;
}

// ─────────────────────────────────────────────────────────────────────────────
//  MENU
// ─────────────────────────────────────────────────────────────────────────────

let logMessages = [];
let globalMenu  = null;
function log(msg) { if (globalMenu) globalMenu.log(msg); }

class Menu {
    #cl; #activity; #MATCH; #WRAP;
    #contentView; #mainLayout; #menuLayout; #scrollLayout;
    #openBtn; #logOverlay; #logTextView; #logScrollView;
    #isOpen = false; #colorOn; #colorOff;

    constructor(cl, activity) {
        this.#cl       = cl;
        this.#activity = activity;
        this.#MATCH    = cl.LinearLayout_LayoutParams.MATCH_PARENT.value;
        this.#WRAP     = cl.LinearLayout_LayoutParams.WRAP_CONTENT.value;
        this.#build();
    }

    #ctx() { return { cl: this.#cl, activity: this.#activity }; }

    #build() {
        const { cl, activity } = this.#ctx();

        this.#contentView = cl.FrameLayout.$new(activity);
        this.#contentView.setLayoutParams(cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH));
        this.#contentView.setBackgroundColor(cl.Color.TRANSPARENT.value);

        this.#mainLayout = cl.LinearLayout.$new(activity);
        this.#mainLayout.setOrientation(this.#mainLayout.VERTICAL.value);
        const mainFrame = cl.FrameLayout_LayoutParams.$new(this.#WRAP, this.#WRAP);
        mainFrame.gravity = cl.Gravity.TOP.value | cl.Gravity.START.value;
        mainFrame.setMargins(dp(activity, 16), dp(activity, 60), 0, 0);
        this.#mainLayout.setLayoutParams(mainFrame);

        this.#openBtn = cl.Button.$new(activity);
        this.#openBtn.setLayoutParams(cl.LinearLayout_LayoutParams.$new(dp(activity, 56), dp(activity, 56)));
        this.#openBtn.setText(cl.String.$new("☰"));
        this.#openBtn.setTextColor(cl.Color.parseColor("#FFFFFF"));
        this.#openBtn.setBackground(makeRoundedDrawable(cl, "#635985", 16, activity));

        this.#menuLayout = cl.LinearLayout.$new(activity);
        const mlp = cl.LinearLayout_LayoutParams.$new(dp(activity, 220), this.#WRAP);
        mlp.setMargins(0, dp(activity, 8), 0, 0);
        this.#menuLayout.setLayoutParams(mlp);
        this.#menuLayout.setOrientation(this.#menuLayout.VERTICAL.value);
        this.#menuLayout.setBackground(makeRoundedDrawable(cl, "#18122B", 20, activity));
        const pad = dp(activity, 12);
        this.#menuLayout.setPadding(pad, pad, pad, pad);
        this.#menuLayout.setVisibility(0x8);

        const scroll = cl.ScrollView.$new(activity);
        scroll.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
        this.#scrollLayout = cl.LinearLayout.$new(activity);
        this.#scrollLayout.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
        this.#scrollLayout.setOrientation(this.#scrollLayout.VERTICAL.value);
        scroll.addView(this.#scrollLayout);
        this.#menuLayout.addView(scroll);

        const that = this;
        const ToggleListener = Java.registerClass({
            name: "com.example.MenuToggle",
            implements: [cl.View_OnClickListener],
            methods: {
                onClick(v) {
                    that.#isOpen = !that.#isOpen;
                    that.#menuLayout.setVisibility(that.#isOpen ? 0x0 : 0x8);
                }
            }
        });
        this.#openBtn.setOnClickListener(ToggleListener.$new());
        this.#addDrag();
        this.#buildLogOverlay();
    }

    #buildLogOverlay() {
        const { cl, activity } = this.#ctx();

        this.#logOverlay = cl.FrameLayout.$new(activity);
        this.#logOverlay.setLayoutParams(cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH));
        this.#logOverlay.setBackgroundColor(cl.Color.parseColor("#AA000000"));
        this.#logOverlay.setVisibility(0x8);

        const card = cl.LinearLayout.$new(activity);
        const clp  = cl.FrameLayout_LayoutParams.$new(dp(activity, 320), dp(activity, 420));
        clp.gravity = cl.Gravity.CENTER.value;
        card.setLayoutParams(clp);
        card.setOrientation(card.VERTICAL.value);
        card.setBackground(makeRoundedDrawable(cl, "#18122B", 24, activity));
        const cp = dp(activity, 16);
        card.setPadding(cp, cp, cp, cp);

        const title   = cl.TextView.$new(activity);
        const titleLp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        titleLp.setMargins(0, 0, 0, dp(activity, 12));
        title.setLayoutParams(titleLp);
        title.setText(cl.String.$new("📋  Log"));
        title.setTextColor(cl.Color.parseColor("#FFC107"));
        title.setTextSize(18);
        title.setGravity(cl.Gravity.CENTER.value);

        this.#logScrollView = cl.ScrollView.$new(activity);
        this.#logScrollView.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, dp(activity, 260)));
        this.#logScrollView.setBackground(makeRoundedDrawable(cl, "#0D0A1A", 16, activity));
        const sp = dp(activity, 10);
        this.#logScrollView.setPadding(sp, sp, sp, sp);

        this.#logTextView = cl.TextView.$new(activity);
        this.#logTextView.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#MATCH));
        this.#logTextView.setMinHeight(dp(activity, 200));
        this.#logTextView.setTextColor(cl.Color.parseColor("#AAFFAA"));
        this.#logTextView.setTextSize(13);
        this.#logScrollView.addView(this.#logTextView);

        const closeBtn = cl.Button.$new(activity);
        const cbp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        cbp.setMargins(0, dp(activity, 12), 0, 0);
        closeBtn.setLayoutParams(cbp);
        closeBtn.setText(cl.String.$new("✕  Zavřít"));
        closeBtn.setTextColor(cl.Color.parseColor("#FFFFFF"));
        closeBtn.setBackground(makeRoundedDrawable(cl, "#635985", 14, activity));

        const that = this;
        const CloseListener = Java.registerClass({
            name: "com.example.LogClose",
            implements: [cl.View_OnClickListener],
            methods: { onClick(v) { that.#logOverlay.setVisibility(0x8); } }
        });
        closeBtn.setOnClickListener(CloseListener.$new());

        card.addView(title);
        card.addView(this.#logScrollView);
        card.addView(closeBtn);
        this.#logOverlay.addView(card);
    }

    #addDrag() {
        const cl = this.#cl;
        let ix = 0, iy = 0, t0 = 0;
        const DragListener = Java.registerClass({
            name: "com.example.MenuDrag",
            implements: [cl.View_OnTouchListener],
            methods: {
                onTouch(view, event) {
                    switch (event.getAction()) {
                        case cl.MotionEvent.ACTION_DOWN.value:
                            ix = view.getX() - event.getRawX();
                            iy = view.getY() - event.getRawY();
                            t0 = Date.now();
                            break;
                        case cl.MotionEvent.ACTION_MOVE.value:
                            if (Date.now() - t0 > 150) {
                                view.setX(event.getRawX() + ix);
                                view.setY(event.getRawY() + iy);
                            }
                            break;
                    }
                    return false;
                }
            }
        });
        this.#mainLayout.setOnTouchListener(DragListener.$new());
    }

    setColors(colorOn, colorOff) { this.#colorOn = colorOn; this.#colorOff = colorOff; }

    addButton(id, label, callbacks, defaultOn = false) {
        const { cl, activity } = this.#ctx();
        const btn = cl.Button.$new(activity);
        const lp  = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        lp.setMargins(0, 0, 0, dp(activity, 8));
        btn.setLayoutParams(lp);
        btn.setText(cl.String.$new(label));
        btn.setTextColor(cl.Color.parseColor("#FFFFFF"));

        let state = defaultOn;
        const colorOn  = this.#colorOn;
        const colorOff = this.#colorOff;
        btn.setBackground(makeRoundedDrawable(cl, state ? colorOn : colorOff, 12, activity));
        if (defaultOn) callbacks.on?.();

        const ClickListener = Java.registerClass({
            name: "com.example.BtnClick" + id,
            implements: [cl.View_OnClickListener],
            methods: {
                onClick(v) {
                    state = !state;
                    v.setBackground(makeRoundedDrawable(cl, state ? colorOn : colorOff, 12, activity));
                    state ? callbacks.on?.() : callbacks.off?.();
                }
            }
        });
        btn.setOnClickListener(ClickListener.$new());
        this.#scrollLayout.addView(btn);
    }

    addLogButton() {
        const { cl, activity } = this.#ctx();
        const btn = cl.Button.$new(activity);
        const lp  = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        lp.setMargins(0, 0, 0, dp(activity, 8));
        btn.setLayoutParams(lp);
        btn.setText(cl.String.$new("📋  Log"));
        btn.setTextColor(cl.Color.parseColor("#FFFFFF"));
        btn.setBackground(makeRoundedDrawable(cl, "#2E2A4A", 12, activity));

        const that = this;
        const OpenLog = Java.registerClass({
            name: "com.example.OpenLog",
            implements: [cl.View_OnClickListener],
            methods: {
                onClick(v) {
                    that.#logOverlay.setVisibility(0x0);
                    that.updateLogView();
                }
            }
        });
        btn.setOnClickListener(OpenLog.$new());
        this.#scrollLayout.addView(btn);
    }

    log(message) {
        logMessages.push(`[${new Date().toLocaleTimeString()}] ${message}`);
        if (logMessages.length > 30) logMessages.splice(0, logMessages.length - 30);
        const tv = this.#logTextView, sv = this.#logScrollView;
        if (!tv) return;
        const cl = this.#cl;
        Java.scheduleOnMainThread(() => {
            try { tv.setText(cl.String.$new(logMessages.join('\n'))); sv?.fullScroll(0x82); } catch (_) {}
        });
    }

    updateLogView() {
        if (!this.#logTextView) return;
        const cl = this.#cl;
        this.#logTextView.setText(cl.String.$new(logMessages.length ? logMessages.join('\n') : "(žádné logy)"));
        this.#logScrollView?.fullScroll(0x82);
    }

    start() {
        this.#activity.addContentView(this.#contentView, this.#contentView.getLayoutParams());
        this.#contentView.addView(this.#mainLayout);
        this.#contentView.addView(this.#logOverlay);
        this.#mainLayout.addView(this.#openBtn);
        this.#mainLayout.addView(this.#menuLayout);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  GAME LOGIC
// ─────────────────────────────────────────────────────────────────────────────

const CharacterType = {
    0:    "Hero",
    1:    "Npc_Boss",
    2:    "Minion_FollowOwner",
    3:    "Minion_FindEnemies",
    4:    "LootBox",
    6:    "Pvp_Base",
    7:    "Minion_Building_charges_ulti",
    8:    "Minion_Dog",
    0xC:  "RoboWars",
    0xD:  "Train",
    0xF:  "Minion_Mirage",
    0x10: "Npc_Boss_TownCrush",
    0x11: "Carryable",
    0x12: "Minion_Duplicate",
    0x13: "Payload",
    0x14: "Minion_Invasion",
    0x15: "Minion_LastStand",
    0x16: "Minion_Percenter",
    0x17: "Minion_Twin",
    0x18: "Minion_Critter",
    0x19: "Minion_Orbiting",
    0x1A: "Hero2",
    0x1E: "Mega_Boss",
    0x1F: "Minion_Shadow_Clone",
};

// globalId / 1_000_000 dává "typ objektu":
//   1 = Character (hráči, bossové...)
//   2 = Projectile (střely)
const OBJ_TYPE_CHARACTER  = 1;
const OBJ_TYPE_PROJECTILE = 2;

const state = {
    autojoin:    false,
    autofarm:    false,
    poisonZone:  false,   // ← zapíná postupné zmenšování mapy
};
let gameOver = true;

function handleObjects(objects, count, ownTeamId, battleMode) {
    const newEnemies     = [];
    const newProjectiles = [];

    for (let i = 0; i < count; i++) {
        const objPtr = objects.add(i * 8).readPointer();
        if (!objPtr || objPtr.isNull()) continue;

        const globalId = fns().LogicGameObjectClient_getGlobalID(objPtr);
        const objType  = Math.floor(globalId / 1000000);

        // Mrtvé objekty přeskočíme
        try { if (objPtr.add(OFFSETS.GameObj_deadFlag).readU8() !== 0) continue; } catch (_) { continue; }

        const x = fns().LogicGameObjectClient_getX(objPtr);
        const y = fns().LogicGameObjectClient_getY(objPtr);

        if (objType === OBJ_TYPE_CHARACTER) {
            // type=1: hráč / postava
            const teamId = objPtr.add(OFFSETS.GameObj_team).readS32();
            // Nepřátelé = jiný tým než my
            if (teamId !== ownTeamId) {
                newEnemies.push({ x, y, teamId });
            }
        } else if (objType === OBJ_TYPE_PROJECTILE) {
            // type=2: střela
            newProjectiles.push({ x, y });
        }
    }

    worldState.enemies     = newEnemies;
    worldState.projectiles = newProjectiles;
    worldState.myTeamId    = ownTeamId;
}

function hookGameEvents() {
    Interceptor.attach(base.add(OFFSETS.normalGameStart), {
        onEnter() {
            log("new game");
            gameOver = false;
            // Reset poison border na začátku hry
            if (state.poisonZone) {
                poisonZone.border = 0;
                poisonZone.lastTick = Date.now();
            }
        }
    });

    Interceptor.attach(base.add(OFFSETS.setGameOverResult), {
        onEnter() {
            gameOver = true;
            log("game over");
            aiStop();
            if (!state.autojoin) return;
            setTimeout(() => { log("exiting");   exitBattle(); },  6000);
            setTimeout(() => { log("rejoining"); joinBattle();  }, 20000);
        }
    });

    // Hlavní tick hry – sběr objektů
    Interceptor.attach(base.add(OFFSETS.LogicBattleModeClient_update), {
        onEnter(args) {
            const battleMode   = args[0];
            const ownCharacter = fns().LogicBattleModeClient_getOwnCharacter(battleMode);
            if (!ownCharacter || ownCharacter.isNull()) return;

            const ownTeamId = fns().LogicBattleModeClient_getOwnPlayerTeam(battleMode);
            const objMgr    = battleMode.add(40).readPointer();
            if (!objMgr || objMgr.isNull()) return;

            const objects = objMgr.readPointer();
            const count   = objMgr.add(12).readU32();
            if (!objects || objects.isNull() || count === 0 || count > 1000) return;

            // Aktualizuj world state (nepřátelé, střely)
            handleObjects(objects, count, ownTeamId, battleMode);

            // Obnov wall cache
            maybeRefreshWallCache(battleMode);
        }
    });
}

// ─────────────────────────────────────────────────────────────────────────────
//  ENTRY POINT
// ─────────────────────────────────────────────────────────────────────────────

function main() {
    hookGameEvents();

    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
            const cl       = getClassLoader();
            const activity = getMainActivity(cl);
            const menu     = new Menu(cl, activity);
            globalMenu     = menu;

            menu.setColors("#82da48", "#406e36");

            menu.addButton("auto_rejoin", "Auto Rejoin", {
                on:  () => { state.autojoin = true;  },
                off: () => { state.autojoin = false; },
            });

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
                        fns().homePage_startGame(homePage, eventdata, ptr(0), 1, ownCharacter, teamArray, 0, ptr(0), 1);
                    } catch (e) { log("replace error: " + e); }
                }
            });

            menu.addButton("test", "Test join", {
                on: () => { joinBattle(); log("joined"); }
            });

            // AutoFarm – AI pohyb + vyhýbání nepřátelům/střelám
            menu.addButton("autofarm", "AutoFarm", {
                on:  () => { state.autofarm = true;  aiStart(); },
                off: () => { state.autofarm = false; aiStop();  },
            });

            // Poison Zone – postupné zmenšování safe zóny každých 5s
            menu.addButton("poison_zone", "Poison Zone", {
                on: () => {
                    state.poisonZone    = true;
                    poisonZone.enabled  = true;
                    poisonStart();
                },
                off: () => {
                    state.poisonZone   = false;
                    poisonZone.enabled = false;
                    poisonStop();
                },
            });

            menu.addLogButton();
            menu.start();
        });
    });
}

setTimeout(main, 5000);