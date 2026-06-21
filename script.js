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
        //const slp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, 0);
        //slp.weight = 1;

        const slp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, dp(activity, 260));
        this.#logScrollView.setLayoutParams(slp);

        this.#logScrollView.setLayoutParams(slp);
        this.#logScrollView.setBackground(makeRoundedDrawable(cl, "#0D0A1A", 16, activity));
        const sp = dp(activity, 10);
        this.#logScrollView.setPadding(sp, sp, sp, sp);

        //this.#logTextView = cl.TextView.$new(activity);
        //this.#logTextView.setLayoutParams(cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
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

    logaas(message) {
        const timestamp = new Date().toLocaleTimeString();
        logMessages.push(`[${timestamp}] ${message}`);
        Java.scheduleOnMainThread(() => {
            this.updateLogView();
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
    stringTableGetString: 0x96D7B0,
    stringString: 0xDCF7E0,
    updateAutoshoot: 0x8076A0,
    homePage_startGame: 0x8FF70C,
    setGameOverResult: 0x9559E0,
    normalGameStart: 0x907A24,
    getHomeScreen: 0x9605E4,
    getHomePage: 0x81E528,
    guiCloseAllPopups: 0x59361C,
    mapEditorScreen_sendGoHomeMessage: 0x82F928
};

const natives = {
    BattleMode_getInstance: new NativeFunction(base.add(OFFSETS.battleMode_getInstance), "pointer", []),
    LogicGameObjectClient_getX: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getX), "uint32", ["pointer"]),
    LogicGameObjectClient_getY: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getY), "uint32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: new NativeFunction(base.add(OFFSETS.logicBattleModeClient_getOwnCharacter), "pointer", ["pointer"]),
    Gui_getInstance: new NativeFunction(base.add(OFFSETS.guiGetInstance), "pointer", []),
    StringCtor: new NativeFunction(base.add(OFFSETS.stringCtor), "pointer", ["pointer", "pointer"]),
    Gui_showFloaterTextAtDefaultPos: new NativeFunction(base.add(OFFSETS.gui_showFloaterTextAtDefaultPos), "void", ["pointer", "pointer", "int", "int"]),
    LogicGameObjectClient_getGlobalID: new NativeFunction(base.add(OFFSETS.logicGameObjectClient_getGlobalID), "uint32", ["pointer"]),
    homePage_startGame: new NativeFunction(base.add(OFFSETS.homePage_startGame),'void',['pointer', 'pointer', 'pointer', 'int', 'pointer', 'pointer', 'uint8', 'pointer', 'uint8']),
    normalGameStart: new NativeFunction(base.add(OFFSETS.normalGameStart),'void',['pointer']),
    getHomeScreen: new NativeFunction(base.add(OFFSETS.getHomeScreen),'pointer',['pointer']),
    homeModeGetInstance: new NativeFunction(base.add(OFFSETS.homeModeGetInstance),'pointer',[]),
    getHomePage: new NativeFunction(base.add(OFFSETS.getHomePage),'pointer',['pointer']),
    guiCloseAllPopups: new NativeFunction(base.add(OFFSETS.guiCloseAllPopups),'void',['pointer']),
    mapEditorScreen_sendGoHomeMessage: new NativeFunction(base.add(OFFSETS.mapEditorScreen_sendGoHomeMessage),'void',['pointer'])
};

let state = {
    autojoin: false,
    replace: false
}

const getinstance = natives.Gui_getInstance;
const stringctor = natives.StringCtor;
const floater = natives.Gui_showFloaterTextAtDefaultPos;

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


let startGameArgs = null;
let gameOver = true;

function startGameTest() {
    Interceptor.attach(base.add(0x8FF70C), {
        onEnter: function(args) {
        }
    });
}

function exitBattle() {
    const size = 0x901;
    const fakeObject = Memory.alloc(size);
    fakeObject.writeByteArray(new Array(size).fill(0));

    natives.mapEditorScreen_sendGoHomeMessage(fakeObject);
}

function joinBattle() {
    try {
        var homeMode = natives.homeModeGetInstance();
        var homeScreen = natives.getHomeScreen(homeMode);
        var homePage = natives.getHomePage(homeScreen);

        natives.normalGameStart(homePage);
    } catch (e) {
        log("Error: " + e);
    }
}

function autoRejoin() {
    Interceptor.attach(base.add(OFFSETS.normalGameStart), {
        onEnter: function(args) {
            log("new game");
            gameOver = false;
        }
    });

    Interceptor.attach(base.add(OFFSETS.setGameOverResult), {
        onEnter: function(args) {
            if(state.autojoin) {
                setTimeout(function() {
                    log("exiting")
                    exitBattle();
                }, 5000);
                setTimeout(function() {
                    log("rejoining")
                    joinBattle();
                }, 13000);
                //log("joining new battle");
            }
            gameOver = true;
            log("game over");
        }
    });
}

function main() {
    startGameTest();
    autoRejoin();

    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
            const cl = getClassLoader();
            const activity = getMainActivity(cl);
            const menu = new Menu(cl, activity);
            globalMenu = menu;

            menu.setColors("#82da48", "#406e36");

            menu.addButton("auto_rejoin", "Auto Rejoin", {
                on: () => { state.autojoin = true; },
                off: () => { state.autojoin = false; }
            });

            menu.addButton("replace", "replace", {
                on: () => {
                    var homeMode = natives.homeModeGetInstance();
                    var homeScreen = natives.getHomeScreen(homeMode);
                    var homePage = natives.getHomePage(homeScreen);
                    var characterCount  = homePage.add(0x40c).readS32();
                    var teammateCount = characterCount - 1;
                    var characters = homePage.add(0x400).readPointer();
                    var ownCharacter = characters.readPointer();
                    var eventdata = homePage.add(0x3f0).readPointer();

                    try {
                        var teamArray = ptr(0);
                        if (teammateCount > 0) {
                            var dataBuf = Memory.alloc(0x8 * teammateCount);

                            for (var i = 0; i < teammateCount; i++) {
                                var p = characters.add((i + 1) * 0x8).readPointer();
                                dataBuf.add(i * 0x8).writePointer(p);
                            }

                            var header = Memory.alloc(0x10);
                            header.writePointer(dataBuf);   
                            header.add(0x08).writeS32(teammateCount);
                            header.add(0x0c).writeS32(teammateCount);
                            teamArray = header;
                        }
                        natives.homePage_startGame(homePage,eventdata,ptr(0),1,ownCharacter,teamArray,0,ptr(0),1);
                    } catch (e) {
                        log("Error: " + e);
                    }
                }
            });

            menu.addButton("test", "test", {
                on: () => {
                    joinBattle();
                    log("exited");
                }
            });

            menu.addLogButton();

            menu.start();
        });
    });
}

setTimeout(main, 5000);
