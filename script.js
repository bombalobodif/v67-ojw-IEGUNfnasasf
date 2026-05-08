const base = Module.findBaseAddress("libg.so");
const malloc = new NativeFunction(Module.getExportByName("libc.so", "malloc"), "pointer", ["uint"]);

const OFFSETS = {
    askForBattleEndMessageAddHero: 0xB57338,
    battleMode_getInstance: 0x954EE0,
    battleModeUpdate: 0x95CD14,
    battleScreen_activateSkill: 0x80274C,
    battleScreen_getClosestTargetForAutoshoot: 0x8151E0,
    billingManagerCheckCancelledPurchases: 0x4D3F7C,
    clientInput_constructor_int: 0xB53A68,
    clientInputManager_addInput: 0x79BF3C,
    clientInputManagerUpdate: 0x79C158,
    collisionResolver: 0x815E84,
    combatHUDsetPlayerNameToPortrait: 0x5E5FF8,
    combatHUDstartGameOver: 0x56E34C,
    decoratedTextFieldsetupPlayerNameText: 0x58E52C,
    gadget: 0x56EC64,
    getString: 0x96D610,
    getTile: 0x9DC190,
    gotoAndStop: 0xC1CA84,
    gotoAndStopFrameIndex: 0xC1C90C,
    gui_showFloaterTextAtDefaultPos: 0x818CDC,
    guiUpdate: 0x5916C8,
    homeModeGetInstance: 0x95F488,
    hypercharge: 0x56ECA4,
    intigerSQRT: 0xC67000,
    joystickToMove: 0x8015DC,
    logicBattleModeClient_getOwnCharacter: 0xB90A28,
    logicBattleModeClient_update: 0xB8EEE0,
    logicCharacterClient: 0xAB0D50,
    logicCharacterClientDestruct: 0xAB128C,
    logicDataTableCreateItem: 0xA4F29C,
    logicDataToString: 0xA4B4E0,
    logicGameObjectClient_getGlobalID: 0xAE49C8,
    logicGameObjectClient_getX: 0xAE4A1C,
    logicGameObjectClient_getY: 0xAE4A24,
    logicGameObjectClientDestruct: 0xAE491C,
    logicPlayerGetName: 0xBAD8B8,
    logicProjectileDataCreateReferences: 0xB1D610,
    logicProjectileDataDestruct: 0xA7D534,
    maybeDrawsUltiUseCircle: 0x585098,
    maybeVector2: 0xB1C844,
    prepareIntroSetBrawler: 0x5E51BC,
    raycast: 0xBD55E8,
    setDecoratedText: 0x58E824,
    setTextAndScaleIfNecessary: 0x990CA8,
    showFloaterTextAt: 0x591F28,
    showSpray: 0x56F834,
    someGuiShit: 0x55DD98,
    stringCopyCtor: 0xDCF970,
    stringCtor: 0xDCF8F0,
    stringTableGetString: 0x96D7B0,
    stringString: 0xDCF7E0,
    updateAutoshoot: 0x8076A0
};

const natives = {
    BattleMode_getInstance: new NativeFunction(base.add(OFFSETS.battleMode_getInstance), "pointer", []),
    LogicGameObjectClient_getX: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getX), "uint32", ["pointer"]),
    LogicGameObjectClient_getY: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getY), "uint32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: new NativeFunction(base.add(OFFSETS.logicBattleModeClient_getOwnCharacter), "pointer", ["pointer"]),
    Gui_getInstance: new NativeFunction(base.add(OFFSETS.Gui_getInstance), "pointer", []),
    StringCtor: new NativeFunction(base.add(OFFSETS.stringCtor), "pointer", ["pointer", "pointer"]),
    Gui_showFloaterTextAtDefaultPos: new NativeFunction(base.add(OFFSETS.gui_showFloaterTextAtDefaultPos), "void", ["pointer", "pointer", "int", "int"]),
    LogicGameObjectClient_getGlobalID: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getGlobalID), "uint32", ["pointer"])
};


//CONFIG
const config = {
    lastpositionsLen: 3,
    projectileSpeed: 3255,
    useWeightedAverage: false,
    timeToHitMultiplyCoeficient: 0.8
};
//CONFIG

//AIMBOT
const getinstance = natives.Gui_getInstance;
const stringctor = natives.StringCtor;
const floater = natives.Gui_showFloaterTextAtDefaultPos;

const latestX = createRecentArray(config.lastpositionsLen);
const latestY = createRecentArray(config.lastpositionsLen);
const timeDiffs = createRecentArray(config.lastpositionsLen - 1);
let battleMode = null;
let lastTime = 0;

function createRecentArray(max = 2) {
    const arr = [];
    return {
        array: arr,
        push: val => {
            arr.push(val);
            if (arr.length > max) arr.shift();
        },
        setMax: newMax => {
            max = newMax;
            while (arr.length > max) arr.shift();
        }
    };
}

function predictFuturePosition(timeToPredictSeconds) {
    if (latestX.array.length < 2 || timeDiffs.array.length < 1) {
        return { x: latestX.array[latestX.array.length - 1] || 0, y: latestY.array[latestY.array.length - 1] || 0 };
    }

    const totalTimeDiff = timeDiffs.array.reduce((sum, diff) => sum + diff, 0);
    const avgTimeDiff = totalTimeDiff / timeDiffs.array.length / 1000;

    let totalVx = 0;
    let totalVy = 0;
    let weightSum = 0;

    for (let i = 1; i < latestX.array.length; i++) {
        const dx = latestX.array[i] - latestX.array[i - 1];
        const dy = latestY.array[i] - latestY.array[i - 1];
        const dt = timeDiffs.array[i - 1] / 1000;

        if (dt <= 0) continue;

        const weight = i;
        totalVx += (dx / dt) * weight;
        totalVy += (dy / dt) * weight;
        weightSum += weight;
    }

    const avgVx = weightSum > 0 ? totalVx / weightSum : 0;
    const avgVy = weightSum > 0 ? totalVy / weightSum : 0;

    const currentX = latestX.array[latestX.array.length - 1];
    const currentY = latestY.array[latestY.array.length - 1];

    const predictedX = currentX + avgVx * timeToPredictSeconds;
    const predictedY = currentY + avgVy * timeToPredictSeconds;

    return { x: predictedX, y: predictedY };
}

function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function calculateTimeToHit(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance / config.projectileSpeed;
}

function getStrPtr(str) {
    return Memory.allocUtf8String(str);
}

function getScPtr(str) {
    var pointer = malloc(40);
    stringctor(pointer, getStrPtr(str)); 
    return pointer;
}

function showFloater(text) {
    floater(getinstance(), getScPtr(text), 0, -1);
}

function aimbot() {
    Interceptor.attach(base.add(OFFSETS.battleScreen_getClosestTargetForAutoshoot), {
        onLeave: function(retval) {
            if (retval == 0x0) {
                return;
            }
            const x = natives.LogicGameObjectClient_getX(retval);
            const y = natives.LogicGameObjectClient_getY(retval);
            latestX.push(x);
            latestY.push(y);

            const now = Date.now();

            if (lastTime !== 0) {
                const diff = now - lastTime;
                timeDiffs.push(diff);
            }

            lastTime = now;
        }
    });

    Interceptor.attach(base.add(OFFSETS.battleScreen_activateSkill), {
        onEnter: function(args) {
            if (!battleMode) {
                return;
            }

            let isAutoshot = (parseInt(args[6]) !== 0);
            if (!isAutoshot) {
                return;
            }

            try {
                const ownLogicCharacter = natives.LogicBattleModeClient_getOwnCharacter(battleMode);
                const ownX = natives.LogicGameObjectClient_getX(ownLogicCharacter);
                const ownY = natives.LogicGameObjectClient_getY(ownLogicCharacter);
                const timeToHit = config.timeToHitMultiplyCoeficient * calculateTimeToHit(
                    ownX, 
                    ownY, 
                    latestX.array[latestX.array.length - 1], 
                    latestY.array[latestY.array.length - 1]
                );
                const predictedPos = predictFuturePosition(timeToHit);

                args[5] = ptr(0);
                args[1] = ptr(Math.round(predictedPos.x));
                args[2] = ptr(Math.round(predictedPos.y));
            } catch (e) {
            }
        },
    });

    Interceptor.attach(base.add(OFFSETS.logicBattleModeClient_update), {
        onEnter: function(args) {
            battleMode = args[0];
        }
    });

    showFloater("aimbot loaded");
}

function main() {
    aimbot();
}

setTimeout(main, 5000);
