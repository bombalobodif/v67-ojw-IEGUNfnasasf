// agent/core/offsets.js
var base = Module.findBaseAddress("libg.so");
var OFFSETS = Object.freeze({
  BattleMode_getInstance: 9785056,
  BattleMode_objectManagerPtr: 40,
  BattleMode_clientInputManager: 88,
  BattleMode__enter: 9791076,
  setGameOverResult: 9787872,
  normalGameStart: 9468452,
  GameScreen__getLogicBattle: 8489932,
  BattleScreen_getInstance: 8451272,
  BattleScreen__update: 5700224,
  BattleScreen__updateMovement: 8426312,
  BattleScreen__updateAutoshoot: 8418976,
  BattleScreen__stopWithStick: 8394204,
  BattleScreen__handleTouchReleased: 8394828,
  BattleScreen__tryToActivateSkill: 8443736,
  BattleScreen_activateSkill: 8398668,
  BattleScreen_getClosestTargetForAutoshoot: 8475104,
  BattleScreen__calculateProjectilePath: 8461404,
  BattleScreen__joystickToWorld: 8478340,
  BattleScreen_manualFireX: 3844,
  BattleScreen_manualFireY: 3848,
  BattleScreen_autoFireX: 3692,
  BattleScreen_autoFireY: 3696,
  BattleScreen_autoshootPredOff: 1644,
  BattleScreen_fireWrapperFn: 8399200,
  BattleScreen_screenWidth: 2180,
  BattleScreen_screenHeight: 2184,
  BattleScreen_viewMatrix: 2024,
  BattleScreen_spectateWidget: 968,
  BattleScreen_spectateTextField: 984,
  LogicBattleModeClient_update: 12119776,
  LogicBattleModeClient_getOwnCharacter: 12126760,
  LogicBattleModeClient_getOwnPlayerTeam: 12125824,
  LogicBattleModeClient_getOwnPlayerIndex: 12125816,
  LogicBattleModeClient_setClientPredictionMoveTo: 12127116,
  LogicBattleModeClient_getTileMap: 12126632,
  LogicBattleModeClient__LogicBattleModeClient: 12117628,
  LogicBattleModeClient__setRandomSeed: 12118136,
  LogicBattleModeClient__setPlayerAvatar: 12119536,
  LogicGameObjectClient_getGlobalID: 11422152,
  LogicGameObjectClient_getX: 11422236,
  LogicGameObjectClient_getY: 11422244,
  LogicGameObjectClient_getData: 11421436,
  LogicGameObjectManagerClient__getGameObjects: 11424076,
  LogicGameObjectManagerClient__findGameObject: 11436076,
  ObjectManager_objectsArray: 0,
  ObjectManager_count: 12,
  ObjectManager_ptrStride: 8,
  GameObj_team: 64,
  GameObj_deadFlag: 208,
  LogicCharacterClient__getWeaponSkill: 11224088,
  LogicCharacterClient__getCarryableData: 11220436,
  LogicCharacterClient__getLinkedCarryable: 11224872,
  LogicCharacterClient__getCurrentActiveOrCastingSkill: 11227176,
  LogicCharacterData_getCollisionRadius: 10728748,
  CharData_speed: 452,
  CharData_brawlerId: 24,
  LogicProjectileData_getRadius: 11015756,
  LogicProjectileData_getSpeed: 11015628,
  LogicProjectileData__isBeam: 11016048,
  LogicProjectileData__getNumEarlyTicks: 11016772,
  Projectile_ctor: 5328776,
  Projectile__update: 5331192,
  Projectile_spawnAngle: 184,
  VTABLE_PROJECTILE_DATA: 18153904,
  VTABLE_CHARACTER_DATA: 72087288,
  getProjData: 11653976,
  TileMap_Width: 196,
  TileMap_Height: 200,
  TileMap_TilesArray: 32,
  TileTypeData_BlocksMovement: 86,
  TileTypeData_BlocksProjectiles: 87,
  LogicTileMap__isPlayerLineOfSightClear: 10352716,
  LogicTile__setData: 10332128,
  ClientInput_constructor_int: 11876968,
  ClientInputManager_addInput: 7978812,
  ClientInput_x: 12,
  ClientInput_y: 16,
  ClientInputMessage_sendMovement: 8131548,
  Gui_getInstance: 5838404,
  Gui_showFloaterTextAtDefaultPos: 8490204,
  GUI__showFloaterTextAt: 5840680,
  GUI__showPopup: 5844004,
  GUI__getDefaultFloaterPos: 5840288,
  StringCtor: 14481648,
  TextField_setText: 12888440,
  TextField_setText_ui: 5866136,
  String__format: 14492748,
  nativeCopyToClipboard: 14520824,
  HomeMode__getInstance: 9827464,
  getHomeScreen: 9831908,
  getHomePage: 8512808,
  homePage_startGame: 9434892,
  mapEditorScreen_sendGoHomeMessage: 8583464,
  GameStateManager__getInstance: 9820900,
  GameStateManager__isState: 9824192,
  MovieClip__gotoAndStopFrameIndex: 12699916,
  MovieClip__getTextFieldByName: 12703056,
  MovieClip__setChildVisible: 12705096,
  DisplayObject__setXY: 12675916,
  DisplayObject__removeFromParent: 12676776,
  Sprite__addChild: 12769476,
  Sprite__addChildAt: 12769484,
  Sprite__removeChild: 12770204,
  Stage_addChild: 12793504,
  StageInstanceGlobalPtr: 19108832,
  LogicSkillData__getActiveTime: 11092188,
  LogicSkillData__getRechargeTime: 11092928,
  LogicSkillData__getMaxCharge: 11092944,
  LogicSkillData__getMsBetweenAttacks: 11092984,
  HeroData_namePtr: 72,
  Joy_currentX: 148,
  Joy_currentY: 152,
  Joy_centerX: 156,
  Joy_centerY: 160,
  Joy_isDragging: 16,
  Message_port: 144,
  Message_ipPtr: 152,
  ScString_length: 4,
  ScString_data: 8,
  ScrollArea__scrollTo: 12457448,
  ScrollArea__updateBounds: 12909176,
  ScrollArea__addContent: 12909688,
  ScrollArea__removeAllContent: 12909768,
  GameButtonCtor: 5864520,
  GameButton_setText: 5866136,
  CustomButton_onButtonPressed: 12902348,
  ResourceManager__getCSV: 12511816,
  ResourceListener__addFile: 13214080,
  FramerateManager__setSegment: 14532064,
  Screen__getHeight: 14557684,
  Screen__getDpiClass: 14557696,
  LogicGameModeUtil__isTileOnPoisonArea: 12402696,
  TileCodeDAT: 18387576,
  CSVRow__getValueAt: 12965516,
  LogicBattleModeClient_getPredictedTick: 12119744
});

// agent/core/natives.js
var malloc = new NativeFunction(
  Module.getExportByName("libc.so", "malloc"),
  "pointer",
  ["uint"]
);
var _cache = null;
function fns() {
  if (_cache) return _cache;
  _cache = {
    BattleMode_getInstance: new NativeFunction(base.add(OFFSETS.BattleMode_getInstance), "pointer", []),
    LogicGameObjectClient_getX: new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getX), "int32", ["pointer"]),
    LogicGameObjectClient_getY: new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getY), "int32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getOwnCharacter), "pointer", ["pointer"]),
    LogicBattleModeClient_getOwnPlayerTeam: new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getOwnPlayerTeam), "int32", ["pointer"]),
    LogicBattleModeClient_setClientPredictionMoveTo: new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_setClientPredictionMoveTo), "void", ["pointer", "int", "int", "int"]),
    LogicBattleModeClient_getTileMap: new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getTileMap), "pointer", ["pointer"]),
    LogicGameObjectClient_getGlobalID: new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getGlobalID), "uint32", ["pointer"]),
    LogicGameObjectClient_getData: new NativeFunction(base.add(OFFSETS.LogicGameObjectClient_getData), "pointer", ["pointer"]),
    LogicProjectileData_getSpeed: new NativeFunction(base.add(OFFSETS.LogicProjectileData_getSpeed), "uint32", ["pointer"]),
    LogicProjectileData_getRadius: new NativeFunction(base.add(OFFSETS.LogicProjectileData_getRadius), "uint32", ["pointer"]),
    LogicCharacterData_getCollisionRadius: new NativeFunction(base.add(OFFSETS.LogicCharacterData_getCollisionRadius), "uint32", ["pointer"]),
    BattleScreen_getLogicBattle: new NativeFunction(base.add(OFFSETS.GameScreen__getLogicBattle), "pointer", ["pointer"]),
    BattleScreen_getInstance: new NativeFunction(base.add(OFFSETS.BattleScreen_getInstance), "pointer", []),
    ClientInput_ctor: new NativeFunction(base.add(OFFSETS.ClientInput_constructor_int), "pointer", ["pointer", "int"]),
    ClientInputManager_add: new NativeFunction(base.add(OFFSETS.ClientInputManager_addInput), "void", ["pointer", "pointer"]),
    Gui_getInstance: new NativeFunction(base.add(OFFSETS.Gui_getInstance), "pointer", []),
    Gui_showFloaterTextAtDefaultPos: new NativeFunction(base.add(OFFSETS.Gui_showFloaterTextAtDefaultPos), "void", ["pointer", "pointer", "int", "int"]),
    StringCtor: new NativeFunction(base.add(OFFSETS.StringCtor), "pointer", ["pointer", "pointer"]),
    normalGameStart: new NativeFunction(base.add(OFFSETS.normalGameStart), "void", ["pointer"]),
    getHomeScreen: new NativeFunction(base.add(OFFSETS.getHomeScreen), "pointer", ["pointer"]),
    homeModeGetInstance: new NativeFunction(base.add(OFFSETS.HomeMode__getInstance), "pointer", []),
    getHomePage: new NativeFunction(base.add(OFFSETS.getHomePage), "pointer", ["pointer"]),
    homePage_startGame: new NativeFunction(base.add(OFFSETS.homePage_startGame), "void", ["pointer", "pointer", "pointer", "int", "pointer", "pointer", "uint8", "pointer", "uint8"]),
    guiCloseAllPopups: new NativeFunction(base.add(OFFSETS.GUI__showPopup), "void", ["pointer"]),
    mapEditorScreen_sendGoHomeMessage: new NativeFunction(base.add(OFFSETS.mapEditorScreen_sendGoHomeMessage), "void", ["pointer"]),
    LogicGameModeUtil__isTileOnPoisonArea: new NativeFunction(base.add(OFFSETS.LogicGameModeUtil__isTileOnPoisonArea), "uint32", ["pointer", "int", "uint8", "int", "int"]),
    CSVRow__getValueAt: new NativeFunction(base.add(OFFSETS.CSVRow__getValueAt), "pointer", ["pointer", "int"]),
    LogicBattleModeClient_getPredictedTick: new NativeFunction(base.add(OFFSETS.LogicBattleModeClient_getPredictedTick), "int32", ["pointer"]),
    BattleScreen_fireWrapperFn: new NativeFunction(base.add(OFFSETS.BattleScreen_fireWrapperFn), "int", ["pointer", "pointer"])
  };
  Object.freeze(_cache);
  return _cache;
}

// agent/core/wallCache.js
var TILE_SIZE = 300;
var BIT_MOVE = 128;
var BIT_PROJ = 64;
var BIT_X = 32;
var BIT_W = 16;
var BIT_F = 8;
var FAST_RESCAN_MS = 500;
var FULL_REBUILD_MS = 15e3;
var wallCache = {
  wall: null,
  w: 0,
  h: 0,
  tilesPtr: null,
  destructibles: null,
  gen: 0,
  lastFullBuild: 0,
  lastFastScan: 0
};
function readBSString(strPtr) {
  const length = strPtr.add(4).readS32();
  if (length > 7) {
    const charPtr = strPtr.add(8).readPointer();
    return charPtr.readCString();
  } else {
    return strPtr.add(8).readCString();
  }
}
function _readPacked(tilesArr, idx) {
  const tile = tilesArr.add(idx * Process.pointerSize).readPointer();
  if (tile.isNull()) return 0;
  const data = tile.readPointer();
  if (data.isNull()) return 0;
  const flags = data.add(OFFSETS.TileTypeData_BlocksMovement).readU16();
  const csvRow = data.add(8).readPointer();
  const tileCodeDatColumn = base.add(OFFSETS.TileCodeDAT).readS32();
  const valuePtr = fns().CSVRow__getValueAt(csvRow, tileCodeDatColumn);
  const tileCodeStr = readBSString(valuePtr);
  let extra = 0;
  if (tileCodeStr === "x") extra |= BIT_X;
  if (tileCodeStr === "W") extra |= BIT_W;
  if (tileCodeStr === "F") extra |= BIT_F;
  return (flags & 255 ? BIT_MOVE : 0) | (flags >> 8 & 255 ? BIT_PROJ : 0) | extra;
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
  Object.assign(wallCache, {
    wall,
    w,
    h,
    tilesPtr: tilesArr,
    destructibles: dest,
    gen: wallCache.gen + 1,
    lastFullBuild: now,
    lastFastScan: now
  });
  return true;
}
function _fastRescan() {
  const { wall, tilesPtr, destructibles } = wallCache;
  if (!wall || !destructibles || !tilesPtr || tilesPtr.isNull()) return;
  let changed = false, writeIdx = 0;
  for (const i of destructibles) {
    let packed = 0;
    try {
      packed = _readPacked(tilesPtr, i);
    } catch (_) {
    }
    if (wall[i] !== packed) {
      wall[i] = packed;
      changed = true;
    }
    if (packed) destructibles[writeIdx++] = i;
  }
  if (writeIdx !== destructibles.length) {
    destructibles.length = writeIdx;
    changed = true;
  }
  if (changed) wallCache.gen++;
  wallCache.lastFastScan = Date.now();
}
function maybeRefreshWallCache(logic, now = Date.now()) {
  if (!logic || logic.isNull()) return;
  const rebuild = () => {
    const tm = fns().LogicBattleModeClient_getTileMap(logic);
    if (tm && !tm.isNull()) _fullRebuild(tm);
  };
  if (!wallCache.wall) {
    rebuild();
    return;
  }
  if (now - wallCache.lastFullBuild >= FULL_REBUILD_MS) {
    rebuild();
    return;
  }
  if (now - wallCache.lastFastScan >= FAST_RESCAN_MS) _fastRescan();
}

// agent/core/gameHelpers.js
function getHomePage() {
  return fns().getHomePage(fns().getHomeScreen(fns().homeModeGetInstance()));
}
function joinBattle() {
  try {
    fns().normalGameStart(getHomePage());
  } catch (e) {
    console.error("joinBattle error:", e);
  }
}
function exitBattle() {
  const fake = Memory.alloc(2305);
  fake.writeByteArray(new Array(2305).fill(0));
  fns().mapEditorScreen_sendGoHomeMessage(fake);
}

// agent/world/worldState.js
var OBJ_TYPE_CHARACTER = 1;
var OBJ_TYPE_PROJECTILE = 2;
var CharacterType = Object.freeze({
  0: "Hero",
  1: "Npc_Boss",
  2: "Minion_FollowOwner",
  3: "Minion_FindEnemies",
  4: "LootBox",
  6: "Pvp_Base",
  7: "Minion_Building_charges_ulti",
  8: "Minion_Dog",
  12: "RoboWars",
  13: "Train",
  15: "Minion_Mirage",
  16: "Npc_Boss_TownCrush",
  17: "Carryable",
  18: "Minion_Duplicate",
  19: "Payload",
  20: "Minion_Invasion",
  21: "Minion_LastStand",
  22: "Minion_Percenter",
  23: "Minion_Twin",
  24: "Minion_Critter",
  25: "Minion_Orbiting",
  26: "Hero2",
  30: "Mega_Boss",
  31: "Minion_Shadow_Clone"
});
var worldState = {
  enemies: [],
  projectiles: [],
  myTeamId: -1,
  myX: 0,
  myY: 0
};
function handleObjects(objects, count, ownTeamId) {
  const newEnemies = [];
  const newProjectiles = [];
  for (let i = 0; i < count; i++) {
    const objPtr = objects.add(i * 8).readPointer();
    if (!objPtr || objPtr.isNull()) continue;
    const globalId = fns().LogicGameObjectClient_getGlobalID(objPtr);
    const objType = Math.floor(globalId / 1e6);
    try {
      if (objPtr.add(OFFSETS.GameObj_deadFlag).readU8() !== 0) continue;
    } catch (_) {
      continue;
    }
    const x = fns().LogicGameObjectClient_getX(objPtr);
    const y = fns().LogicGameObjectClient_getY(objPtr);
    const data = fns().LogicGameObjectClient_getData(objPtr);
    if (objType === OBJ_TYPE_CHARACTER) {
      const teamId = objPtr.add(OFFSETS.GameObj_team).readS32();
      const id = data.add(24).readU8() | 0;
      if (teamId !== ownTeamId) newEnemies.push({ x, y, teamId, id });
    } else if (objType === OBJ_TYPE_PROJECTILE) {
      const radius = fns().LogicProjectileData_getRadius(data);
      newProjectiles.push({ x, y, radius });
    }
  }
  worldState.enemies = newEnemies;
  worldState.projectiles = newProjectiles;
  worldState.myTeamId = ownTeamId;
}

// agent/world/poisonZone.js
function isTileOnPoisonArea(tileX, tileY, gameState, tick, width, height) {
  const poisonWidth = fns().LogicGameModeUtil__isTileOnPoisonArea(gameState, tick, 0, width, height);
  const poisonHeight = fns().LogicGameModeUtil__isTileOnPoisonArea(gameState, tick, 1, width, height);
  const isInPoisonX = tileX < poisonWidth || tileX >= width - poisonWidth;
  const isInPoisonY = tileY < poisonHeight || tileY >= height - poisonHeight;
  return isInPoisonX || isInPoisonY;
}
function isTileInPoison(tx, ty) {
  const { wall, w, h } = wallCache;
  const battleMode = fns().BattleMode_getInstance();
  const state1 = battleMode.add(40).readPointer();
  const state2 = state1.add(296).readPointer();
  const tick = fns().LogicBattleModeClient_getPredictedTick(state1);
  return isTileOnPoisonArea(tx, ty, state2, tick, w, h);
}
function isPosInPoison(wx, wy) {
  return isTileInPoison(wx / TILE_SIZE | 0, wy / TILE_SIZE | 0);
}
function getSafeCenter() {
  const { w, h } = wallCache;
  return {
    x: (w / 2 | 0) * TILE_SIZE + TILE_SIZE / 2,
    y: (h / 2 | 0) * TILE_SIZE + TILE_SIZE / 2
  };
}

// agent/world/movement.js
function getBattleContext() {
  try {
    const screen = fns().BattleScreen_getInstance();
    if (!screen || screen.isNull()) return null;
    const logic = fns().BattleScreen_getLogicBattle(screen);
    if (!logic || logic.isNull()) return null;
    const battle = fns().BattleMode_getInstance();
    if (!battle || battle.isNull()) return null;
    return { logic, battle };
  } catch (_) {
    return null;
  }
}
function getMyPosition(logic) {
  try {
    const own = fns().LogicBattleModeClient_getOwnCharacter(logic);
    if (!own || own.isNull()) return null;
    return {
      x: fns().LogicGameObjectClient_getX(own),
      y: fns().LogicGameObjectClient_getY(own)
    };
  } catch (_) {
    return null;
  }
}
function sendMove(logic, battle, wx, wy) {
  wx = wx | 0;
  wy = wy | 0;
  if (!isFinite(wx) || !isFinite(wy) || Math.abs(wx) > 2e5 || Math.abs(wy) > 2e5) return;
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
  } catch (_) {
  }
}

// agent/ai/pathfinder.js
var ENEMY_AVOID_RADIUS = TILE_SIZE * 4;
var BULLET_AVOID_RADIUS = TILE_SIZE * 3;
var BRAWLER_RANGE = {
  0: 2800,
  1: 3300,
  2: 2e3,
  3: 3300,
  4: 3500,
  5: 2800,
  6: 2700,
  7: 3300,
  8: 2200,
  9: 2700,
  10: 1100,
  11: 1e3,
  12: 3200,
  13: 2600,
  14: 3200,
  15: 3700,
  16: 3300,
  17: 2900,
  18: 2200,
  19: 3200,
  20: 2200,
  21: 2100,
  22: 3200,
  23: 3500,
  24: 1300,
  25: 3100,
  26: 1300,
  27: 3700,
  28: 2200,
  29: 3700,
  30: 2400,
  31: 2600,
  32: 3100,
  34: 1200,
  35: 3100,
  36: 3200,
  37: 1800,
  38: 2400,
  39: 3200,
  40: 3100,
  41: 3400,
  42: 3700,
  43: 700,
  44: 3300,
  45: 2800,
  46: 3700,
  47: 2800,
  48: 2800,
  49: 1e3,
  50: 3100,
  51: 1700,
  52: 3300,
  53: 3300,
  54: 1e3,
  56: 3400,
  57: 1500,
  58: 3300,
  59: 3300,
  60: 1100,
  61: 3400,
  62: 2e3,
  63: 3100,
  64: 3300,
  65: 3300,
  67: 2700,
  68: 3200,
  69: 1200,
  70: 2e3,
  71: 1200,
  72: 3300,
  73: 2400,
  74: 3300,
  75: 1500,
  76: 1300,
  77: 2700,
  78: 2900,
  79: 3700,
  80: 1500,
  81: 700,
  82: 2300,
  83: 2800,
  84: 1800,
  85: 1e3,
  86: 1300,
  87: 2300,
  88: 2800,
  89: 2300,
  90: 2900,
  91: 3100,
  92: 3100,
  93: 1e3,
  94: 200,
  95: 1200,
  98: 3700,
  99: 1200
};
function tileDangerCost(tx, ty) {
  let cost = 0;
  if (isTileInPoison(tx, ty)) cost += 1e4;
  const wx = tx * TILE_SIZE + TILE_SIZE / 2;
  const wy = ty * TILE_SIZE + TILE_SIZE / 2;
  for (const e of worldState.enemies) {
    const range = BRAWLER_RANGE[e.id];
    const dx = wx - e.x, dy = wy - e.y;
    const d2 = dx * dx + dy * dy;
    const r2 = range * range;
    if (d2 < r2) cost += Math.round(500 * (1 - d2 / r2));
  }
  for (const p of worldState.projectiles) {
    const dx = wx - p.x, dy = wy - p.y;
    const d2 = dx * dx + dy * dy;
    const r2 = BULLET_AVOID_RADIUS * BULLET_AVOID_RADIUS;
    if (d2 < r2) cost += Math.round(800 * (1 - d2 / r2));
  }
  return cost;
}
var DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
var COST = [10, 10, 10, 10, 14, 14, 14, 14];
function pathfind(startWX, startWY, goalWX, goalWY) {
  const { wall, w, h } = wallCache;
  if (!wall || w === 0 || h === 0) return null;
  const clamp = (v, max) => v < 0 ? 0 : v > max ? max : v;
  const sx = clamp(startWX / TILE_SIZE | 0, w - 1);
  const sy = clamp(startWY / TILE_SIZE | 0, h - 1);
  const gx = clamp(goalWX / TILE_SIZE | 0, w - 1);
  const gy = clamp(goalWY / TILE_SIZE | 0, h - 1);
  if (sx === gx && sy === gy) return [{ x: goalWX, y: goalWY }];
  if (wall[gy * w + gx] & BIT_MOVE) return null;
  const idx = (x, y) => y * w + x;
  const heur = (x, y) => (Math.abs(x - gx) + Math.abs(y - gy)) * 10;
  const INF = 2147483647;
  const gCost = new Int32Array(w * h).fill(INF);
  const prev = new Int32Array(w * h).fill(-1);
  const open = [];
  const push = (f, x, y) => {
    let lo = 0, hi = open.length;
    while (lo < hi) {
      const mid = lo + hi >> 1;
      open[mid].f <= f ? lo = mid + 1 : hi = mid;
    }
    open.splice(lo, 0, { f, x, y });
  };
  gCost[idx(sx, sy)] = 0;
  push(heur(sx, sy), sx, sy);
  while (open.length) {
    const { x, y } = open.shift();
    const ci2 = idx(x, y);
    if (x === gx && y === gy) break;
    for (let d = 0; d < 8; d++) {
      const nx = x + DIRS[d][0], ny = y + DIRS[d][1];
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      if (wall[idx(nx, ny)] & BIT_MOVE) continue;
      if (d >= 4 && (wall[idx(x, ny)] & BIT_MOVE || wall[idx(nx, y)] & BIT_MOVE)) continue;
      const ng = gCost[ci2] + COST[d] + tileDangerCost(nx, ny);
      const ni = idx(nx, ny);
      if (ng >= gCost[ni]) continue;
      gCost[ni] = ng;
      prev[ni] = ci2;
      push(ng + heur(nx, ny), nx, ny);
    }
  }
  if (gCost[idx(gx, gy)] === INF) return null;
  const path = [];
  let ci = idx(gx, gy);
  while (ci !== -1) {
    path.push({ x: ci % w * TILE_SIZE + TILE_SIZE / 2, y: (ci / w | 0) * TILE_SIZE + TILE_SIZE / 2 });
    ci = prev[ci];
  }
  path.reverse();
  path[path.length - 1] = { x: goalWX, y: goalWY };
  return path;
}

// agent/ai/walker.js
var walker = {
  active: false,
  path: null,
  stepIdx: 0,
  onDone: null,
  _iv: null
};
function startWalk(goalWX, goalWY, onDone = null) {
  stopWalk();
  const ctx = getBattleContext();
  if (!ctx) {
    onDone?.(false);
    return false;
  }
  maybeRefreshWallCache(ctx.logic);
  const pos = getMyPosition(ctx.logic);
  if (!pos) {
    onDone?.(false);
    return false;
  }
  const path = pathfind(pos.x, pos.y, goalWX, goalWY);
  if (!path) {
    onDone?.(false);
    return false;
  }
  walker.active = true;
  walker.path = path;
  walker.stepIdx = 0;
  walker.onDone = onDone;
  walker._iv = setInterval(() => {
    if (!walker.active) {
      clearInterval(walker._iv);
      return;
    }
    const c = getBattleContext();
    if (!c) {
      stopWalk();
      walker.onDone?.(false);
      return;
    }
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
  if (walker._iv) {
    clearInterval(walker._iv);
    walker._iv = null;
  }
  walker.path = null;
  walker.stepIdx = 0;
  walker.onDone = null;
}
function isWalking() {
  return walker.active;
}

// agent/ai/autofarm.js
var AI_TICK_MS = 600;
var ROAM_CANDIDATES = 12;
var ENEMY_AVOID_RADIUS2 = TILE_SIZE * 4;
var BULLET_AVOID_RADIUS2 = TILE_SIZE * 3;
var aiState = {
  _iv: null,
  mode: "idle",
  // "idle" | "escape_poison" | "dodge_bullet" | "avoid_enemy" | "roam"
  stuckCounter: 0,
  lastX: 0,
  lastY: 0
};
var _log = null;
function aiStart(log2) {
  aiStop(log2);
  _log = log2 ?? null;
  aiState.mode = "idle";
  aiState.stuckCounter = 0;
  aiState._iv = setInterval(_aiTick, AI_TICK_MS);
  _log?.("AutoFarm AI started");
}
function aiStop(log2) {
  if (aiState._iv) {
    clearInterval(aiState._iv);
    aiState._iv = null;
  }
  stopWalk();
  aiState.mode = "idle";
  (log2 ?? _log)?.("AutoFarm AI stopped");
}
function _aiTick() {
  const ctx = getBattleContext();
  if (!ctx) return;
  const pos = getMyPosition(ctx.logic);
  if (!pos) return;
  const ddx = pos.x - aiState.lastX, ddy = pos.y - aiState.lastY;
  if (ddx * ddx + ddy * ddy < 50 * 50 && aiState.mode !== "idle") {
    if (++aiState.stuckCounter >= 4) {
      aiState.stuckCounter = 0;
      stopWalk();
      const escape = _pickRoamPoint(pos.x, pos.y, true);
      if (escape) startWalk(escape.x, escape.y);
      return;
    }
  } else {
    aiState.stuckCounter = 0;
  }
  aiState.lastX = pos.x;
  aiState.lastY = pos.y;
  if (isPosInPoison(pos.x, pos.y)) {
    if (aiState.mode !== "escape_poison") {
      aiState.mode = "escape_poison";
      stopWalk();
      const safe = _pickSafePoint(pos.x, pos.y);
      _log?.(`AI: poison! \u2192 (${safe.x | 0}, ${safe.y | 0})`);
      startWalk(safe.x, safe.y);
    }
    return;
  }
  const closeBullet = _closestThreat(pos.x, pos.y, worldState.projectiles, 2).enemy;
  if (closeBullet) {
    if (aiState.mode !== "dodge_bullet") {
      aiState.mode = "dodge_bullet";
      stopWalk();
      const dodge = _fleePoint(pos.x, pos.y, closeBullet.x, closeBullet.y, TILE_SIZE * 5);
      if (dodge) {
        _log?.("AI: dodge bullet");
        startWalk(dodge.x, dodge.y);
      }
    }
    return;
  }
  const closeEnemy = _closestThreat(pos.x, pos.y, worldState.enemies, 1);
  const enemy = closeEnemy.enemy;
  if (closeEnemy.attack) {
    if (enemy) attack(enemy.x, enemy.y);
  }
  if (enemy) {
    if (aiState.mode !== "avoid_enemy") {
      aiState.mode = "avoid_enemy";
      stopWalk();
      const flee = _fleePoint(pos.x, pos.y, enemy.x, enemy.y, TILE_SIZE * 6);
      if (flee) {
        _log?.("AI: avoid enemy");
        startWalk(flee.x, flee.y);
      }
    }
    return;
  }
  if (!isWalking() || aiState.mode !== "roam") {
    aiState.mode = "roam";
    const pt = _pickRoamPoint(pos.x, pos.y, false);
    if (pt) {
      _log?.(`AI: roam \u2192 (${pt.x | 0}, ${pt.y | 0})`);
      startWalk(pt.x, pt.y, () => {
        aiState.mode = "idle";
      });
    }
  }
}
function attack(fireX, fireY) {
  const battleMode = fns().BattleMode_getInstance();
  const manager = battleMode.add(OFFSETS.BattleMode_clientInputManager).readPointer();
  if (!manager || manager.isNull()) return;
  const ci = malloc(64);
  fns().ClientInput_ctor(ci, 1);
  ci.add(OFFSETS.ClientInput_x).writeS32(fireX);
  ci.add(OFFSETS.ClientInput_y).writeS32(fireY);
  fns().ClientInputManager_add(manager, ci);
}
function _closestThreat(myX, myY, list, type) {
  let best = null, bestD2 = 0;
  for (const t of list) {
    if (type == 1) {
      const range = BRAWLER_RANGE[t.id];
      const dx = myX - t.x, dy = myY - t.y;
      const d2 = dx * dx + dy * dy;
      const divided = range * range / d2;
      if (divided > bestD2) {
        bestD2 = divided;
        best = t;
      }
      continue;
    }
    if (type == 2) {
      const range = t.range;
      const dx = myX - t.x, dy = myY - t.y;
      const d2 = dx * dx + dy * dy;
      const divided = range * range / d2;
      if (divided > bestD2) {
        bestD2 = divided;
        best = t;
      }
      continue;
    }
  }
  let shouldAttack = false;
  if (bestD2 <= TILE_SIZE * TILE_SIZE) shouldAttack = true;
  return { enemy: best, attack: shouldAttack };
}
function _fleePoint(myX, myY, threatX, threatY, dist) {
  const dx = myX - threatX, dy = myY - threatY;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = dx / len, ny = dy / len;
  for (const d of [dist, dist * 0.7, dist * 0.4]) {
    const tx = myX + nx * d | 0;
    const ty = myY + ny * d | 0;
    if (isPosInPoison(tx, ty)) continue;
    const tileX = tx / TILE_SIZE | 0, tileY = ty / TILE_SIZE | 0;
    if (tileX < 0 || tileX >= wallCache.w || tileY < 0 || tileY >= wallCache.h) continue;
    if (wallCache.wall && wallCache.wall[tileY * wallCache.w + tileX] & BIT_MOVE) continue;
    return { x: tx, y: ty };
  }
  return _pickSafePoint(myX, myY);
}
function _pickSafePoint(myX, myY) {
  const { w, h } = wallCache;
  if (w === 0 || h === 0) return getSafeCenter();
  const b = 0;
  const safeW = Math.max(1, w - b * 2);
  const safeH = Math.max(1, h - b * 2);
  const cx = (w / 2 | 0) * TILE_SIZE + TILE_SIZE / 2;
  const cy = (h / 2 | 0) * TILE_SIZE + TILE_SIZE / 2;
  if (!isPosInPoison(cx, cy)) return { x: cx, y: cy };
  for (let i = 0; i < 20; i++) {
    const rx = (b + Math.random() * safeW | 0) * TILE_SIZE + TILE_SIZE / 2;
    const ry = (b + Math.random() * safeH | 0) * TILE_SIZE + TILE_SIZE / 2;
    const tileX = rx / TILE_SIZE | 0, tileY = ry / TILE_SIZE | 0;
    if (wallCache.wall && wallCache.wall[tileY * wallCache.w + tileX] & BIT_MOVE) continue;
    if (!isPosInPoison(rx, ry)) return { x: rx, y: ry };
  }
  return { x: cx, y: cy };
}
function _pickRoamPoint(myX, myY, forceDistant) {
  const { wall, w, h } = wallCache;
  if (!wall || w === 0 || h === 0) return null;
  const b = 0;
  const minDist = forceDistant ? TILE_SIZE * 8 : TILE_SIZE * 3;
  const minD2 = minDist * minDist;
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
    const score = d2 / (TILE_SIZE * TILE_SIZE) - tileDangerCost(tx, ty) / 100;
    if (score > bestScore) {
      bestScore = score;
      best = { x: wx, y: wy };
    }
  }
  return best;
}

// agent/ui/androidHelpers.js
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
    GradientDrawable: Java.use("android.graphics.drawable.GradientDrawable")
  };
}
function dp(ctx, v) {
  return parseInt(v * ctx.getResources().getDisplayMetrics().density.value);
}
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

// agent/ui/menu.js
var LOG_MAX = 30;
var logMessages = [];
var Menu = class {
  #cl;
  #activity;
  #MATCH;
  #WRAP;
  #contentView;
  #mainLayout;
  #menuLayout;
  #scrollLayout;
  #openBtn;
  #logOverlay;
  #logTextView;
  #logScrollView;
  #isOpen = false;
  #colorOn;
  #colorOff;
  constructor(cl, activity) {
    this.#cl = cl;
    this.#activity = activity;
    this.#MATCH = cl.LinearLayout_LayoutParams.MATCH_PARENT.value;
    this.#WRAP = cl.LinearLayout_LayoutParams.WRAP_CONTENT.value;
    this.#build();
  }
  // ── Build ────────────────────────────────────────────────────────────────
  #build() {
    const { cl, activity } = { cl: this.#cl, activity: this.#activity };
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
    this.#openBtn.setText(cl.String.$new("\u2630"));
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
    this.#menuLayout.setVisibility(8);
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
          that.#menuLayout.setVisibility(that.#isOpen ? 0 : 8);
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
    this.#logOverlay = cl.FrameLayout.$new(activity);
    this.#logOverlay.setLayoutParams(cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH));
    this.#logOverlay.setBackgroundColor(cl.Color.parseColor("#AA000000"));
    this.#logOverlay.setVisibility(8);
    const card = cl.LinearLayout.$new(activity);
    const clp = cl.FrameLayout_LayoutParams.$new(dp(activity, 320), dp(activity, 420));
    clp.gravity = cl.Gravity.CENTER.value;
    card.setLayoutParams(clp);
    card.setOrientation(card.VERTICAL.value);
    card.setBackground(makeRoundedDrawable(cl, "#18122B", 24, activity));
    const cp = dp(activity, 16);
    card.setPadding(cp, cp, cp, cp);
    const title = cl.TextView.$new(activity);
    const titleLp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
    titleLp.setMargins(0, 0, 0, dp(activity, 12));
    title.setLayoutParams(titleLp);
    title.setText(cl.String.$new("\u{1F4CB}  Log"));
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
    closeBtn.setText(cl.String.$new("\u2715  Zav\u0159\xEDt"));
    closeBtn.setTextColor(cl.Color.parseColor("#FFFFFF"));
    closeBtn.setBackground(makeRoundedDrawable(cl, "#635985", 14, activity));
    const that = this;
    const CloseListener = Java.registerClass({
      name: "com.example.LogClose",
      implements: [cl.View_OnClickListener],
      methods: { onClick(v) {
        that.#logOverlay.setVisibility(8);
      } }
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
  // ── Public API ───────────────────────────────────────────────────────────
  /** Set the toggle-button colors (on / off state). */
  setColors(colorOn, colorOff) {
    this.#colorOn = colorOn;
    this.#colorOff = colorOff;
  }
  /**
   * Add a toggle button to the menu.
   * @param {string} id         Unique class-name suffix (no spaces).
   * @param {string} label      Button label.
   * @param {{ on?: () => void, off?: () => void }} callbacks
   * @param {boolean} defaultOn Whether the button starts in the ON state.
   */
  addButton(id, label, callbacks, defaultOn = false) {
    const cl = this.#cl;
    const activity = this.#activity;
    const btn = cl.Button.$new(activity);
    const lp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
    lp.setMargins(0, 0, 0, dp(activity, 8));
    btn.setLayoutParams(lp);
    btn.setText(cl.String.$new(label));
    btn.setTextColor(cl.Color.parseColor("#FFFFFF"));
    let state2 = defaultOn;
    const colorOn = this.#colorOn;
    const colorOff = this.#colorOff;
    btn.setBackground(makeRoundedDrawable(cl, state2 ? colorOn : colorOff, 12, activity));
    if (defaultOn) callbacks.on?.();
    const ClickListener = Java.registerClass({
      name: "com.example.BtnClick" + id,
      implements: [cl.View_OnClickListener],
      methods: {
        onClick(v) {
          state2 = !state2;
          v.setBackground(makeRoundedDrawable(cl, state2 ? colorOn : colorOff, 12, activity));
          state2 ? callbacks.on?.() : callbacks.off?.();
        }
      }
    });
    btn.setOnClickListener(ClickListener.$new());
    this.#scrollLayout.addView(btn);
  }
  /** Add the Log viewer button. */
  addLogButton() {
    const cl = this.#cl;
    const activity = this.#activity;
    const btn = cl.Button.$new(activity);
    const lp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
    lp.setMargins(0, 0, 0, dp(activity, 8));
    btn.setLayoutParams(lp);
    btn.setText(cl.String.$new("\u{1F4CB}  Log"));
    btn.setTextColor(cl.Color.parseColor("#FFFFFF"));
    btn.setBackground(makeRoundedDrawable(cl, "#2E2A4A", 12, activity));
    const that = this;
    const OpenLog = Java.registerClass({
      name: "com.example.OpenLog",
      implements: [cl.View_OnClickListener],
      methods: {
        onClick(v) {
          that.#logOverlay.setVisibility(0);
          that.#refreshLogView();
        }
      }
    });
    btn.setOnClickListener(OpenLog.$new());
    this.#scrollLayout.addView(btn);
  }
  /** Append a message to the log buffer and update the overlay if visible. */
  log(message) {
    logMessages.push(`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${message}`);
    if (logMessages.length > LOG_MAX) logMessages.splice(0, logMessages.length - LOG_MAX);
    const tv = this.#logTextView, sv = this.#logScrollView;
    if (!tv) return;
    const cl = this.#cl;
    Java.scheduleOnMainThread(() => {
      try {
        tv.setText(cl.String.$new(logMessages.join("\n")));
        sv?.fullScroll(130);
      } catch (_) {
      }
    });
  }
  /** Attach the overlay to the activity window. Must be called once. */
  start() {
    this.#activity.addContentView(this.#contentView, this.#contentView.getLayoutParams());
    this.#contentView.addView(this.#mainLayout);
    this.#contentView.addView(this.#logOverlay);
    this.#mainLayout.addView(this.#openBtn);
    this.#mainLayout.addView(this.#menuLayout);
  }
  // ── Private ──────────────────────────────────────────────────────────────
  #refreshLogView() {
    if (!this.#logTextView) return;
    this.#logTextView.setText(
      this.#cl.String.$new(logMessages.length ? logMessages.join("\n") : "(\u017E\xE1dn\xE9 logy)")
    );
    this.#logScrollView?.fullScroll(130);
  }
};

// agent/index.js
var state = {
  autojoin: false,
  autofarm: false
};
var gameOver = true;
var menu = null;
var log = (msg) => menu?.log(msg);
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
      setTimeout(() => {
        log("exiting");
        exitBattle();
      }, 6e3);
      setTimeout(() => {
        log("rejoining");
        joinBattle();
      }, 2e4);
    }
  });
  Interceptor.attach(base.add(OFFSETS.LogicBattleModeClient_update), {
    onEnter(args) {
      const battleMode = args[0];
      const ownCharacter = fns().LogicBattleModeClient_getOwnCharacter(battleMode);
      if (!ownCharacter || ownCharacter.isNull()) return;
      const ownTeamId = fns().LogicBattleModeClient_getOwnPlayerTeam(battleMode);
      const objMgr = battleMode.add(40).readPointer();
      if (!objMgr || objMgr.isNull()) return;
      const objects = objMgr.readPointer();
      const count = objMgr.add(12).readU32();
      if (!objects || objects.isNull() || count === 0 || count > 1e3) return;
      handleObjects(objects, count, ownTeamId);
      maybeRefreshWallCache(battleMode);
    }
  });
}
function buildMenu(cl, activity) {
  menu = new Menu(cl, activity);
  menu.setColors("#82da48", "#406e36");
  menu.addButton("auto_rejoin", "Auto Rejoin", {
    on: () => {
      state.autojoin = true;
    },
    off: () => {
      state.autojoin = false;
    }
  });
  menu.addButton("replace", "Replace", {
    on: () => {
      try {
        const homePage = getHomePage();
        const characterCount = homePage.add(1036).readS32();
        const characters = homePage.add(1024).readPointer();
        const ownCharacter = characters.readPointer();
        const eventdata = homePage.add(1008).readPointer();
        const teammateCount = characterCount - 1;
        let teamArray = ptr(0);
        if (teammateCount > 0) {
          const dataBuf = Memory.alloc(8 * teammateCount);
          for (let i = 0; i < teammateCount; i++)
            dataBuf.add(i * 8).writePointer(characters.add((i + 1) * 8).readPointer());
          const header = Memory.alloc(16);
          header.writePointer(dataBuf);
          header.add(8).writeS32(teammateCount);
          header.add(12).writeS32(teammateCount);
          teamArray = header;
        }
        fns().homePage_startGame(
          homePage,
          eventdata,
          ptr(0),
          1,
          ownCharacter,
          teamArray,
          0,
          ptr(0),
          1
        );
      } catch (e) {
        log("replace error: " + e);
      }
    }
  });
  menu.addButton("test", "Test join", {
    on: () => {
      try {
        var bm = fns().BattleMode_getInstance();
        maybeRefreshWallCache(bm);
        isTileInPoison(0, 0);
      } catch (e) {
        log("test error: " + e);
      }
    }
  });
  menu.addButton("autofarm", "AutoFarm", {
    on: () => {
      state.autofarm = true;
      aiStart(log);
    },
    off: () => {
      state.autofarm = false;
      aiStop(log);
    }
  });
  menu.addButton("attack", "attack test", {
    on: () => {
      try {
        attack(0, 0);
      } catch (e) {
        log("test error: " + e);
      }
    }
  });
  menu.addLogButton();
  menu.start();
}
function main() {
  hookGameEvents();
  Java.perform(() => {
    Java.scheduleOnMainThread(() => {
      const cl = getClassLoader();
      const activity = getMainActivity(cl);
      buildMenu(cl, activity);
    });
  });
}
setTimeout(main, 5e3);
