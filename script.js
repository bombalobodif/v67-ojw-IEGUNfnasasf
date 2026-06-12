let logMessages = [];
let globalMenu = null;

function log(message) {
    if (globalMenu) globalMenu.log(message);
}

function getClassLoader() {
    return {
        Gravity: Java.use("android.view.Gravity"),
        TextView: Java.use("android.widget.TextView"),
        LinearLayout: Java.use("android.widget.LinearLayout"),
        LinearLayout_LayoutParams: Java.use("android.widget.LinearLayout$LayoutParams"),
        FrameLayout: Java.use("android.widget.FrameLayout"),
        FrameLayout_LayoutParams: Java.use("android.widget.FrameLayout$LayoutParams"),
        Color: Java.use("android.graphics.Color"),
        ActivityThread: Java.use("android.app.ActivityThread"),
        ActivityThread_ActivityClientRecord: Java.use("android.app.ActivityThread$ActivityClientRecord"),
        View_OnTouchListener: Java.use("android.view.View$OnTouchListener"),
        View_OnClickListener: Java.use("android.view.View$OnClickListener"),
        MotionEvent: Java.use("android.view.MotionEvent"),
        String: Java.use("java.lang.String"),
        ScrollView: Java.use("android.widget.ScrollView"),
        Button: Java.use("android.widget.Button"),
        GradientDrawable: Java.use("android.graphics.drawable.GradientDrawable"),
        SeekBar: Java.use("android.widget.SeekBar"),
        SeekBar_OnSeekBarChangeListener: Java.use("android.widget.SeekBar$OnSeekBarChangeListener"),
    };
}

function dp(context, value) {
    return parseInt(value * context.getResources().getDisplayMetrics().density.value);
}

function getMainActivity(cl) {
    const thread = cl.ActivityThread.sCurrentActivityThread.value;
    const record = Java.cast(thread.mActivities.value.valueAt(0), cl.ActivityThread_ActivityClientRecord);
    return record.activity.value;
}

function makeRoundedDrawable(cl, colorHex, radiusDp, activity) {
    const drawable = cl.GradientDrawable.$new();
    drawable.setShape(cl.GradientDrawable.RECTANGLE.value);
    drawable.setColor(cl.Color.parseColor(colorHex));
    drawable.setCornerRadius(dp(activity, radiusDp));
    return drawable;
}

class Menu {
    #cl; #activity; #MATCH; #WRAP;
    #contentView; #mainLayout; #menuLayout; #scrollLayout;
    #isOpen = false; #openBtn; #colorOn; #colorOff;
    #logOverlay; #logTextView; #logScrollView;

    constructor(cl, activity) {
        this.#cl = cl;
        this.#activity = activity;
        this.#MATCH = cl.LinearLayout_LayoutParams.MATCH_PARENT.value;
        this.#WRAP = cl.LinearLayout_LayoutParams.WRAP_CONTENT.value;
        this.#build();
    }

    #build() {
        // Fullscreen overlay
        this.#contentView = this.#cl.FrameLayout.$new(this.#activity);
        const fp = this.#cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH);
        this.#contentView.setLayoutParams(fp);
        this.#contentView.setBackgroundColor(this.#cl.Color.TRANSPARENT.value);

        // Floating container
        this.#mainLayout = this.#cl.LinearLayout.$new(this.#activity);
        this.#mainLayout.setOrientation(this.#mainLayout.VERTICAL.value);
        const mainFrame = this.#cl.FrameLayout_LayoutParams.$new(this.#WRAP, this.#WRAP);
        mainFrame.gravity = this.#cl.Gravity.TOP.value | this.#cl.Gravity.START.value;
        mainFrame.setMargins(dp(this.#activity, 16), dp(this.#activity, 60), 0, 0);
        this.#mainLayout.setLayoutParams(mainFrame);

        // Open/close tlačítko
        this.#openBtn = this.#cl.Button.$new(this.#activity);
        const bp = this.#cl.LinearLayout_LayoutParams.$new(dp(this.#activity, 56), dp(this.#activity, 56));
        this.#openBtn.setLayoutParams(bp);
        this.#openBtn.setText(this.#cl.String.$new("☰"));
        this.#openBtn.setTextColor(this.#cl.Color.parseColor("#FFFFFF"));
        this.#openBtn.setBackground(makeRoundedDrawable(this.#cl, "#635985", 16, this.#activity));

        // Menu panel
        this.#menuLayout = this.#cl.LinearLayout.$new(this.#activity);
        const mlp = this.#cl.LinearLayout_LayoutParams.$new(dp(this.#activity, 220), this.#WRAP);
        mlp.setMargins(0, dp(this.#activity, 8), 0, 0);
        this.#menuLayout.setLayoutParams(mlp);
        this.#menuLayout.setOrientation(this.#menuLayout.VERTICAL.value);
        this.#menuLayout.setBackground(makeRoundedDrawable(this.#cl, "#18122B", 20, this.#activity));
        const pad = dp(this.#activity, 12);
        this.#menuLayout.setPadding(pad, pad, pad, pad);
        this.#menuLayout.setVisibility(0x8);

        // ScrollView uvnitř menu
        const scroll = this.#cl.ScrollView.$new(this.#activity);
        scroll.setLayoutParams(this.#cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
        this.#scrollLayout = this.#cl.LinearLayout.$new(this.#activity);
        this.#scrollLayout.setLayoutParams(this.#cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
        this.#scrollLayout.setOrientation(this.#scrollLayout.VERTICAL.value);
        scroll.addView(this.#scrollLayout);
        this.#menuLayout.addView(scroll);

        // Toggle menu
        const that = this;
        const ToggleListener = Java.registerClass({
            name: "com.example.MenuToggle",
            implements: [this.#cl.View_OnClickListener],
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
        const cl = this.#cl;
        const activity = this.#activity;

        // Poloprůhledné pozadí
        this.#logOverlay = cl.FrameLayout.$new(activity);
        const olp = cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH);
        this.#logOverlay.setLayoutParams(olp);
        this.#logOverlay.setBackgroundColor(cl.Color.parseColor("#AA000000"));
        this.#logOverlay.setVisibility(0x8);

        // Karta logu
        const card = cl.LinearLayout.$new(activity);
        const clp = cl.FrameLayout_LayoutParams.$new(dp(activity, 320), dp(activity, 420));
        clp.gravity = cl.Gravity.CENTER.value;
        card.setLayoutParams(clp);
        card.setOrientation(card.VERTICAL.value);
        card.setBackground(makeRoundedDrawable(cl, "#18122B", 24, activity));
        const cp = dp(activity, 16);
        card.setPadding(cp, cp, cp, cp);

        // Nadpis
        const title = cl.TextView.$new(activity);
        const titleLp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        titleLp.setMargins(0, 0, 0, dp(activity, 12));
        title.setLayoutParams(titleLp);
        title.setText(cl.String.$new("📋  Log"));
        title.setTextColor(cl.Color.parseColor("#FFC107"));
        title.setTextSize(18);
        title.setGravity(cl.Gravity.CENTER.value);

        // ScrollView pro logy
        this.#logScrollView = cl.ScrollView.$new(activity);
        const slp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, dp(activity, 260));
        this.#logScrollView.setLayoutParams(slp);
        this.#logScrollView.setBackground(makeRoundedDrawable(cl, "#0D0A1A", 16, activity));
        const sp = dp(activity, 10);
        this.#logScrollView.setPadding(sp, sp, sp, sp);

        this.#logTextView = cl.TextView.$new(activity);
        const tvLp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#MATCH);
        this.#logTextView.setLayoutParams(tvLp);
        this.#logTextView.setMinHeight(dp(activity, 200));
        this.#logTextView.setTextColor(cl.Color.parseColor("#AAFFAA"));
        this.#logTextView.setTextSize(13);
        this.#logScrollView.addView(this.#logTextView);

        // Zavírací tlačítko
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
            methods: {
                onClick(v) {
                    that.#logOverlay.setVisibility(0x8);
                }
            }
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

    setColors(colorOn, colorOff) {
        this.#colorOn = colorOn;
        this.#colorOff = colorOff;
    }

    addButton(id, label, callbacks, defaultOn = false) {
        const cl = this.#cl;
        const activity = this.#activity;
        const colorOn = this.#colorOn;
        const colorOff = this.#colorOff;

        const btn = cl.Button.$new(activity);
        const lp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        lp.setMargins(0, 0, 0, dp(activity, 8));
        btn.setLayoutParams(lp);
        btn.setText(cl.String.$new(label));
        btn.setTextColor(cl.Color.parseColor("#FFFFFF"));

        let state = defaultOn;
        btn.setBackground(makeRoundedDrawable(cl, state ? colorOn : colorOff, 12, activity));
        if (defaultOn) callbacks.on();

        const ClickListener = Java.registerClass({
            name: "com.example.BtnClick" + id,
            implements: [cl.View_OnClickListener],
            methods: {
                onClick(v) {
                    state = !state;
                    v.setBackground(makeRoundedDrawable(cl, state ? colorOn : colorOff, 12, activity));
                    state ? callbacks.on() : callbacks.off();
                }
            }
        });
        btn.setOnClickListener(ClickListener.$new());
        this.#scrollLayout.addView(btn);
    }

    // Přidá slider pro nastavení hodnoty (min, max, default, callback(value))
    addSlider(id, label, minVal, maxVal, defaultVal, onChange) {
        const cl = this.#cl;
        const activity = this.#activity;

        // Wrapper
        const wrapper = cl.LinearLayout.$new(activity);
        wrapper.setOrientation(wrapper.VERTICAL.value);
        const wlp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        wlp.setMargins(0, 0, 0, dp(activity, 10));
        wrapper.setLayoutParams(wlp);
        wrapper.setBackground(makeRoundedDrawable(cl, "#231A3A", 12, activity));
        const wp = dp(activity, 8);
        wrapper.setPadding(wp, wp, wp, wp);

        // Label + aktuální hodnota
        const labelView = cl.TextView.$new(activity);
        labelView.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
        labelView.setTextColor(cl.Color.parseColor("#CCBBFF"));
        labelView.setTextSize(12);
        labelView.setText(cl.String.$new(label + ": " + defaultVal));

        // SeekBar
        const seekBar = cl.SeekBar.$new(activity);
        const slp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
        slp.setMargins(0, dp(activity, 4), 0, 0);
        seekBar.setLayoutParams(slp);
        seekBar.setMax(maxVal - minVal);
        seekBar.setProgress(defaultVal - minVal);

        const SliderListener = Java.registerClass({
            name: "com.example.SliderChange" + id,
            implements: [cl.SeekBar_OnSeekBarChangeListener],
            methods: {
                onProgressChanged(sb, progress, fromUser) {
                    const val = minVal + progress;
                    labelView.setText(cl.String.$new(label + ": " + val));
                    onChange(val);
                },
                onStartTrackingTouch(sb) {},
                onStopTrackingTouch(sb) {}
            }
        });
        seekBar.setOnSeekBarChangeListener(SliderListener.$new());

        wrapper.addView(labelView);
        wrapper.addView(seekBar);
        this.#scrollLayout.addView(wrapper);
    }

    addLogButton() {
        const cl = this.#cl;
        const activity = this.#activity;

        const btn = cl.Button.$new(activity);
        const lp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
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
        const timestamp = new Date().toLocaleTimeString();
        logMessages.push(`[${timestamp}] ${message}`);

        const MAX_LOG_MESSAGES = 20;
        if (logMessages.length > MAX_LOG_MESSAGES) {
            logMessages.splice(0, logMessages.length - MAX_LOG_MESSAGES);
        }

        const tv = this.#logTextView;
        const cl = this.#cl;
        if (!tv) return;
        Java.scheduleOnMainThread(() => {
            try {
                const text = logMessages.join('\n');
                tv.setText(cl.String.$new(text));
                const sv = this.#logScrollView;
                if (sv) sv.fullScroll(0x00000082);
            } catch(e) {}
        });
    }

    updateLogView() {
        if (!this.#logTextView) return;
        const tv = this.#logTextView;
        const cl = this.#cl;
        const sv = this.#logScrollView;
        const text = logMessages.length > 0 ? logMessages.join('\n') : "(žádné logy)";
        tv.setText(cl.String.$new(text));
        if (sv) sv.fullScroll(0x00000082);
    }

    start() {
        this.#activity.addContentView(this.#contentView, this.#contentView.getLayoutParams());
        this.#contentView.addView(this.#mainLayout);
        this.#contentView.addView(this.#logOverlay);
        this.#mainLayout.addView(this.#openBtn);
        this.#mainLayout.addView(this.#menuLayout);
    }
}

const base = Module.findBaseAddress("libg.so");
const malloc = new NativeFunction(Module.getExportByName("libc.so", "malloc"), "pointer", ["uint"]);

let state = {
    aimbot: false
}

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
    guiGetInstance: 0x591644,
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
    stringString: 0xDCF7E0,
    updateAutoshoot: 0x8076A0
};

const natives = {
    BattleMode_getInstance: new NativeFunction(base.add(OFFSETS.battleMode_getInstance), "pointer", []),
    LogicGameObjectClient_getX: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getX), "uint32", ["pointer"]),
    LogicGameObjectClient_getY: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getY), "uint32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: new NativeFunction(base.add(OFFSETS.logicBattleModeClient_getOwnCharacter), "pointer", ["pointer"]),
    Gui_getInstance: new NativeFunction(base.add(OFFSETS.guiGetInstance), "pointer", []),
    StringCtor: new NativeFunction(base.add(OFFSETS.stringCtor), "pointer", ["pointer", "pointer"]),
    Gui_showFloaterTextAtDefaultPos: new NativeFunction(base.add(OFFSETS.gui_showFloaterTextAtDefaultPos), "void", ["pointer", "pointer", "int", "int"]),
    LogicGameObjectClient_getGlobalID: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getGlobalID), "uint32", ["pointer"])
};


//CONFIG
const config = {
    lastpositionsLen: 5,
    projectileSpeed: 3255,
    useWeightedAverage: false,
    timeToHitMultiplyCoeficient: 0.8,
    emaAlpha: 0.4,           // EMA vyhlazení: 0.0 = maximální vyhlazení, 1.0 = raw
    iterativeSteps: 3,       // počet iterací predikce
    movementThreshold: 50,   // minimální pohyb pro predikci (jinak aim na aktuální pozici)
    maxRange: 10000,         // maximální dosah střely ve world units (0 = vypnuto)
    wallCheckEnabled: true,  // zda kontrolovat zdi mezi hráčem a cílem
    arcMode: false,          // true = predikce pro obloukové střely (fixní air time)
    arcAirTime: 1.2          // fixní air time obloukových střel v sekundách
};
//CONFIG

const getinstance = natives.Gui_getInstance;
const stringctor = natives.StringCtor;
const floater = natives.Gui_showFloaterTextAtDefaultPos;

const latestX = createRecentArray(config.lastpositionsLen);
const latestY = createRecentArray(config.lastpositionsLen);
const timeDiffs = createRecentArray(config.lastpositionsLen - 1);
let battleMode = null;
let lastTime = 0;
let emaX = null;
let emaY = null;

// Tile mapa — aktualizuje se v logicBattleModeClient_update
let currentTileMap = null;
let tileMapWidth  = 0;
let tileMapHeight = 0;
let tileMapCount  = 0;
let tilesArrayPtr = null;

// Převod world souřadnic <-> tile souřadnice
function worldToTile(worldCoord) {
    return Math.floor(worldCoord / 300);
}

// Přečte data jednoho tile z pole (vrátí null pokud mimo mapu nebo chyba)
function getTileData(tx, ty) {
    try {
        if (!tilesArrayPtr || tx < 0 || ty < 0 || tx >= tileMapWidth || ty >= tileMapHeight) return null;
        const i = ty * tileMapWidth + tx;
        if (i >= tileMapCount) return null;
        const tilePtr = tilesArrayPtr.add(i * 8).readPointer();
        if (!tilePtr || tilePtr.isNull()) return null;
        return tilePtr;
    } catch(e) {
        return null;
    }
}

// Vrátí true pokud tile na (tx, ty) blokuje střely
function tileBlocksProjectile(tx, ty) {
    const tilePtr = getTileData(tx, ty);
    if (!tilePtr) return false;
    try {
        const blocksProj = tilePtr.add(0x49).readU8();
        return blocksProj !== 0;
    } catch(e) {
        return false;
    }
}

// Bresenhámův algoritmus — projde všechny tile na přímce od (x0,y0) do (x1,y1)
// Vrátí true pokud je na cestě zeď blokující střelu
function hasWallBetween(wx0, wy0, wx1, wy1) {
    if (!tilesArrayPtr || tileMapWidth === 0) return false;

    let tx0 = worldToTile(wx0);
    let ty0 = worldToTile(wy0);
    const tx1 = worldToTile(wx1);
    const ty1 = worldToTile(wy1);

    const dx = Math.abs(tx1 - tx0);
    const dy = Math.abs(ty1 - ty0);
    const sx = tx0 < tx1 ? 1 : -1;
    const sy = ty0 < ty1 ? 1 : -1;
    let err = dx - dy;

    const maxSteps = dx + dy + 2;
    for (let step = 0; step < maxSteps; step++) {
        // Přeskočíme počáteční tile (tam stojíme my) a koncový tile (tam je cíl)
        if (!(tx0 === worldToTile(wx0) && ty0 === worldToTile(wy0)) &&
            !(tx0 === tx1 && ty0 === ty1)) {
            if (tileBlocksProjectile(tx0, ty0)) return true;
        }
        if (tx0 === tx1 && ty0 === ty1) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; tx0 += sx; }
        if (e2 <  dx) { err += dx; ty0 += sy; }
    }
    return false;
}

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

// Iterativní predikce — řeší cirkulární závislost timeToHit <-> cílová pozice
function predictIterative(ownX, ownY) {
    let predX = latestX.array[latestX.array.length - 1] || 0;
    let predY = latestY.array[latestY.array.length - 1] || 0;

    for (let i = 0; i < config.iterativeSteps; i++) {
        const t = config.timeToHitMultiplyCoeficient
            * calculateTimeToHit(ownX, ownY, predX, predY);
        const pos = predictFuturePosition(t);
        predX = pos.x;
        predY = pos.y;
    }

    return { x: predX, y: predY };
}

// Vrátí velikost posledního pohybu cíle (pro detekci stání)
function getVelocityMagnitude() {
    const len = latestX.array.length;
    if (len < 2) return 0;
    const dx = latestX.array[len - 1] - latestX.array[len - 2];
    const dy = latestY.array[len - 1] - latestY.array[len - 2];
    return Math.sqrt(dx * dx + dy * dy);
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
            const rawX = natives.LogicGameObjectClient_getX(retval);
            const rawY = natives.LogicGameObjectClient_getY(retval);

            // EMA filtr — vyhladí šum / lag skoky v pozici
            emaX = emaX === null ? rawX : config.emaAlpha * rawX + (1 - config.emaAlpha) * emaX;
            emaY = emaY === null ? rawY : config.emaAlpha * rawY + (1 - config.emaAlpha) * emaY;

            latestX.push(emaX);
            latestY.push(emaY);

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
            if (!state.aimbot || !battleMode) {
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

                const targetX = latestX.array[latestX.array.length - 1];
                const targetY = latestY.array[latestY.array.length - 1];

                // Kontrola maximálního dosahu
                if (config.maxRange > 0) {
                    const dist = calculateDistance(ownX, ownY, targetX, targetY);
                    if (dist > config.maxRange) return;
                }

                // Kontrola zdi mezi hráčem a aktuální pozicí cíle
                if (config.wallCheckEnabled && hasWallBetween(ownX, ownY, targetX, targetY)) {
                    log("wall blocked: target at (" + Math.round(targetX) + "," + Math.round(targetY) + ")");
                    return;
                }

                // Výpočet timeToHit podle módu
                // Arc mód: střela letí vždy fixní air time bez ohledu na vzdálenost
                // Linear mód: timeToHit = distance / projectileSpeed
                const timeToHit = config.arcMode
                    ? config.timeToHitMultiplyCoeficient * config.arcAirTime
                    : config.timeToHitMultiplyCoeficient * calculateTimeToHit(ownX, ownY, targetX, targetY);

                const predictedPos = predictFuturePosition(timeToHit);

                // Kontrola zdi i pro předpovídanou pozici
                if (config.wallCheckEnabled && hasWallBetween(ownX, ownY, predictedPos.x, predictedPos.y)) {
                    log("wall blocked: predicted (" + Math.round(predictedPos.x) + "," + Math.round(predictedPos.y) + ") -> aim current");
                    // Fallback na aktuální pozici — zeď za rohem
                    args[5] = ptr(0);
                    args[1] = ptr(Math.round(targetX));
                    args[2] = ptr(Math.round(targetY));
                    return;
                }

                args[5] = ptr(0);
                args[1] = ptr(Math.round(predictedPos.x));
                args[2] = ptr(Math.round(predictedPos.y));
            } catch (e) {
                log("aimbot error: " + e.message);
            }
        },
    });

    Interceptor.attach(base.add(OFFSETS.logicBattleModeClient_update), {
        onEnter: function(args) {
            battleMode = args[0];

            // Načtení tile mapy
            try {
                const objMgr = battleMode.add(40).readPointer();
                if (!objMgr || objMgr.isNull()) return;

                const logicTileMap = objMgr.add(0xf8).readPointer();
                if (!logicTileMap || logicTileMap.isNull()) return;

                // mapData je přímo logicTileMap
                const mapData = logicTileMap;
                const w = mapData.add(0xc4).readInt();
                const h = mapData.add(0xc8).readInt();
                const cnt = mapData.add(0xdc).readInt();
                const arr = mapData.add(0x20).readPointer();

                if (w > 0 && h > 0 && cnt > 0 && arr && !arr.isNull()) {
                    tileMapWidth  = w;
                    tileMapHeight = h;
                    tileMapCount  = cnt;
                    tilesArrayPtr = arr;
                    currentTileMap = logicTileMap;
                }
            } catch(e) {}
        }
    });

    showFloater("aimbot loaded");
}

function main() {
    aimbot();

    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
            const cl = getClassLoader();
            const activity = getMainActivity(cl);
            const menu = new Menu(cl, activity);
            globalMenu = menu;

            menu.setColors("#82da48", "#406e36");

            menu.addButton("aim_bot", "Aim Bot", {
                 on: () => { state.aimbot = true; },
                 off: () => { state.aimbot = false; }
            });

            menu.addButton("wall_check", "Wall Check", {
                on:  () => { config.wallCheckEnabled = true;  log("wall check: ON");  },
                off: () => { config.wallCheckEnabled = false; log("wall check: OFF"); }
            }, true);

            menu.addButton("arc_mode", "Arc Mode", {
                on:  () => { config.arcMode = true;  log("arc mode: ON (airTime=" + config.arcAirTime + "s)"); },
                off: () => { config.arcMode = false; log("arc mode: OFF (linear)"); }
            }, false);

            // Slider pro air time obloukových střel (0.5 - 3.0s, krok 0.1s → 5-30 * 0.1)
            menu.addSlider(
                "arc_airtime",
                "Arc Air Time (x0.1s)",
                5,
                30,
                Math.round(config.arcAirTime * 10),
                (val) => {
                    config.arcAirTime = val / 10;
                    log("arcAirTime: " + config.arcAirTime + "s");
                }
            );

            // Slider pro projectile speed (500 - 8000, default 3255)
            menu.addSlider(
                "proj_speed",
                "Proj Speed",
                500,
                8000,
                config.projectileSpeed,
                (val) => {
                    config.projectileSpeed = val;
                    log("projectileSpeed: " + val);
                }
            );

            // Slider pro maximální dosah (1000 - 20000, default 10000; 0 = vypnuto)
            menu.addSlider(
                "max_range",
                "Max Range",
                1000,
                20000,
                config.maxRange,
                (val) => {
                    config.maxRange = val;
                    log("maxRange: " + val);
                }
            );

            menu.addLogButton();

            menu.start();
        });
    });
}

setTimeout(main, 5000);