// agent/core/offsets.js
var offsets = Object.freeze({
  LogicBattleModeClient_update: 12119776,
  BattleMode_getInstance: 9785056,
  LogicGameObjectClient_getX: 11422236,
  LogicGameObjectClient_getY: 11422244,
  LogicBattleModeClient_getOwnCharacter: 12126760,
  BattleScreen_activateSkill: 8398668,
  Gui_getInstance: 5838404,
  StringCtor: 14481648,
  Gui_showFloaterTextAtDefaultPos: 8490204,
  LogicBattleModeClient_getOwnPlayerTeam: 12125824,
  LogicGameObjectClient_getGlobalID: 11422152,
  LogicGameObjectClient_getData: 11421436,
  LogicProjectileData_getRadius: 11015756,
  LogicProjectileData_getSpeed: 11015628,
  LogicCharacterData_getCollisionRadius: 10728748,
  decoratedTextFieldSetPlayerName: 5866136,
  TextField_setText_ui: 5866136,
  TextField_setText: 12888440,
  handleJoystick: 5800320,
  ClientInputMessage_sendMovement: 8131548,
  ClientInput_constructor_int: 11876968,
  ClientInputManager_addInput: 7978812,
  LogicBattleModeClient_setClientPredictionMoveTo: 12127116,
  LogicTileMap_getTile: 10338704,
  Sprite_Sprite: 12768900,
  VTABLE_PROJECTILE_DATA: 18153904,
  VTABLE_CHARACTER_DATA: 72087288,
  TileMap_Width: 196,
  TileMap_Height: 200,
  TileMap_TilesArray: 32,
  TileTypeData_BlocksMovement: 86,
  TileTypeData_BlocksProjectiles: 87,
  BattleMode_objectManagerPtr: 40,
  BattleMode_clientInputManager: 88,
  ObjectManager_objectsArray: 0,
  ObjectManager_count: 12,
  ObjectManager_ptrStride: 8,
  GameObj_team: 64,
  GameObj_currentHP: 168,
  GameObj_maxHP: 172,
  GameObj_deadFlag: 208,
  LogicData_csvRow: 8,
  CharData_speed: 452,
  CharData_brawlerId: 24,
  CharData_characterType: 572,
  Projectile_spawnAngle: 184,
  Joy_currentX: 148,
  Joy_currentY: 152,
  Joy_centerX: 156,
  Joy_centerY: 160,
  Joy_isDragging: 16,
  ScString_length: 4,
  ScString_data: 8,
  GameMain__draw: 4940704,
  DecalManager__DecalManager: 5298924,
  LogicProjectileData__IsOwnTeamProjectile: 5300692,
  GameObjectManager__GameObjectManager: 5304768,
  Projectile_ctor: 5328776,
  Projectile__update: 5331192,
  RenderSystem__RenderSystem: 5341544,
  CombatHUD__toggleEditing: 5696732,
  BattleScreen__update: 5700224,
  BattleScreen__updateCameraParameters: 8383944,
  Character__updateHealthBar: 5727356,
  CombatHUD__update: 5742540,
  CombatHUD__setShootStickState: 5789532,
  CombatHUD__setMoveStickState: 5789708,
  GUI__getDefaultFloaterPos: 5840288,
  GUI__showFloaterTextAt: 5840680,
  GUI__showPopup: 5844004,
  GameButtonCtor: 5864520,
  GameSliderComponent__GameSliderComponent: 5881860,
  GameSliderComponent__setValueBounds: 5883912,
  MapEditorModifierItem__MapEditorModifierItem: 7233864,
  MapEditorModifierPopup__MapEditorModifierPopup: 7237728,
  MapEditorModifierPopup__addModifierItem: 7240188,
  PopupBase__PopupBase: 7302680,
  MessageManager__receiveMessage: 8105236,
  BattleScreen__BattleScreen: 8368872,
  BattleScreen__initializeMembers: 8369564,
  BattleScreen__stopWithStick: 8394204,
  BattleScreen__handleTouchReleased: 8394828,
  BattleScreen__updateAutoshoot: 8418976,
  BattleScreen_getClosestTargetForAutoshoot: 8475104,
  BattleScreen__updateMovement: 8426312,
  BattleScreen__tryToActivateSkill: 8443736,
  BattleScreen__shouldShowAccessoryButton: 8448844,
  BattleScreen__calculateProjectilePath: 8461404,
  BattleScreen__joystickToWorld: 8478340,
  GameScreen__getLogicBattle: 8489932,
  MapEditorScreen__updateCameraParameters: 8569284,
  MapEditorScreen__initRenderSystem: 8569804,
  MapEditorScreen__initItems: 8570160,
  MapEditorScreen__initCharacters: 8570364,
  GameSettings__isFixedJoystickEnabled: 9715848,
  BattleMode__enter: 9791076,
  BattleMode__addResourcesToLoad: 9791672,
  GameStateManager__getInstance: 9820900,
  GameStateManager__isState: 9824192,
  HomeMode__getInstance: 9827464,
  StringTable__getMovieClip: 9886756,
  MovieClipHelper__setTextAndScaleIfNecessary: 10030248,
  LogicTile__setData: 10332128,
  LogicTileMap__LogicTileMap: 10334372,
  LogicTileMap__isPlayerLineOfSightClear: 10352716,
  LogicTileMap__isPlayerLineOfSightClear1: 10352764,
  LogicCarryableData__getThrowOverWalls: 10698240,
  LogicCharacterData__isCarryable: 10731244,
  LogicDataTables__getOpenTileData: 10866348,
  LogicDataTables__getBaseTileData: 10866432,
  LogicDataTables__getSiegeBoltTileData: 10866516,
  LogicProjectileData__isBeam: 11016048,
  LogicProjectileData__getNumEarlyTicks: 11016772,
  LogicSkillData__getActiveTime: 11092188,
  LogicSkillData__getRechargeTime: 11092928,
  LogicSkillData__getMaxCharge: 11092944,
  LogicSkillData__getMsBetweenAttacks: 11092984,
  LogicTileData__blocksMovement: 11166924,
  LogicCharacterClient__getCarryableData: 11220436,
  LogicCharacterClient__getWeaponSkill: 11224088,
  LogicCharacterClient__canMoveAndUseThisSkillSimultaneously: 11224112,
  LogicCharacterClient__getLinkedCarryable: 11224872,
  LogicCharacterClient__getCurrentActiveOrCastingSkill: 11227176,
  LogicCharacterClientOwn__clientPredictionPauseMovementForSkillCasting: 11235540,
  LogicCharacterClientOwn__clientPredictionUpdateAttackDirection: 11235644,
  LogicGameObjectManagerClient__LogicGameObjectManagerClient: 11423024,
  LogicGameObjectManagerClient__getGameObjects: 11424076,
  LogicGameObjectManagerClient__findGameObject: 11436076,
  LogicGameObjectServer__getData: 11464092,
  LogicProjectileServer__shootProjectile: 11515868,
  LogicProjectileServer__runEarlyTicks: 11519608,
  getProjData: 11653976,
  GlobalID__getInstanceID: 11671944,
  LogicPlayerMap__save: 11707076,
  LogicPlayerMapUtil__tileDataToTileCode: 11722992,
  AnalyticEvent__AnalyticEvent: 11827e3,
  AnalyticEvent__setString: 11827240,
  LogicBattleModeClient__LogicBattleModeClient: 12117628,
  LogicBattleModeClient__setRandomSeed: 12118136,
  LogicBattleModeClient__setPlayerAvatar: 12119536,
  LogicBattleModeClient__getOwnPlayerIndex: 12125816,
  LogicBattleModeClient__getTileMap: 12126632,
  SetClientPrediction: 12127116,
  LogicGameModeUtil__isTileOnPoisonArea: 12402696,
  LogicGamePlayUtil__getClosestAnyCollision: 12408296,
  ScrollArea__scrollTo: 12457448,
  StringTable_getMovieClip: 12504672,
  DisplayObject__setXY: 12675916,
  DisplayObject__removeFromParent: 12676776,
  MovieClip__gotoAndStopFrameIndex: 12699916,
  MovieClip__getTextFieldByName: 12703056,
  MovieClip__setChildVisible: 12705096,
  Sprite__addChild: 12769476,
  Sprite__addChildAt: 12769484,
  Sprite__removeChild: 12770204,
  ScrollArea__updateBounds: 12909176,
  ScrollArea__addContent: 12909688,
  ScrollArea__removeAllContent: 12909768,
  CSVRow__getIntegerValueAt: 12965500,
  CSVRow__getValueAt: 12965516,
  CSVRow__getBooleanValueAt: 12965484,
  CSVTable__getColumnIndexByName: 12967572,
  LogicJSONObject__put: 12990880,
  LogicRandom__setIteratedRandomSeed: 13006608,
  LogicCompressedString__LogicCompressedString: 13087256,
  LogicLongToCodeConverterUtil__LogicLongToCodeConverterUtil: 13087972,
  LogicLongToCodeConverterUtil__convert: 13088080,
  LogicLongToCodeConverterUtil__toCode: 13088808,
  ResourceListener__addFile: 13214080,
  String__format: 14492748,
  FramerateManager__setSegment: 14532064,
  Screen__getHeight: 14557684,
  Screen__getDpiClass: 14557696,
  Application__copyString: 14985140,
  HeroData_namePtr: 72,
  BattleScreen_manualFireX: 3844,
  BattleScreen_manualFireY: 3848,
  BattleScreen_autoFireX: 3692,
  BattleScreen_autoFireY: 3696,
  BattleScreen_autoshootPredOff: 1644,
  BattleScreen_fireWrapperFn: 8399200,
  ClientInput_x: 12,
  ClientInput_y: 16,
  Message_port: 144,
  Message_ipPtr: 152,
  SockAddr_portHi: 2,
  SockAddr_portLo: 3,
  SockAddr_addr0: 4,
  SockAddr_addr1: 5,
  SockAddr_addr2: 6,
  SockAddr_addr3: 7,
  Stage_addChild: 12793504,
  MovieClip_gotoAndStop: 12699916,
  GameButton_setText: 5866136,
  CustomButton_onButtonPressed: 12902348,
  nativeCopyToClipboard: 14520824,
  StageInstanceGlobalPtr: 19108832,
  BattleScreen_screenWidth: 2180,
  BattleScreen_screenHeight: 2184,
  BattleScreen_viewMatrix: 2024,
  ResourceManager__getCSV: 12511816
});

// agent/core/functions.js
var functions = null;
function createNative(base3, offset, returnType, argTypes) {
  return new NativeFunction(base3.add(offset), returnType, argTypes);
}
function initFunctions(base3) {
  if (functions) return functions;
  const n = (offset, returnType, argTypes = []) => createNative(base3, offset, returnType, argTypes);
  functions = Object.freeze({
    BattleMode_getInstance: n(offsets.BattleMode_getInstance, "pointer", []),
    LogicGameObjectClient_getX: n(offsets.LogicGameObjectClient_getX, "int32", ["pointer"]),
    LogicGameObjectClient_getY: n(offsets.LogicGameObjectClient_getY, "int32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: n(offsets.LogicBattleModeClient_getOwnCharacter, "pointer", ["pointer"]),
    LogicBattleModeClient_setClientPredictionMoveTo: n(offsets.LogicBattleModeClient_setClientPredictionMoveTo, "void", ["pointer", "int", "int", "int"]),
    Gui_getInstance: n(offsets.Gui_getInstance, "pointer", []),
    ClientInput_constructor_int: n(offsets.ClientInput_constructor_int, "pointer", ["pointer", "int"]),
    ClientInputManager_addInput: n(offsets.ClientInputManager_addInput, "void", ["pointer", "pointer"]),
    LogicGameObjectClient_getGlobalID: n(offsets.LogicGameObjectClient_getGlobalID, "uint32", ["pointer"]),
    LogicBattleModeClient_getOwnPlayerTeam: n(offsets.LogicBattleModeClient_getOwnPlayerTeam, "uint32", ["pointer"]),
    LogicGameObjectClient_getData: n(offsets.LogicGameObjectClient_getData, "pointer", ["pointer"]),
    LogicProjectileData_getSpeed: n(offsets.LogicProjectileData_getSpeed, "uint32", ["pointer"]),
    LogicProjectileData_getRadius: n(offsets.LogicProjectileData_getRadius, "uint32", ["pointer"]),
    LogicCharacterData_getCollisionRadius: n(offsets.LogicCharacterData_getCollisionRadius, "uint32", ["pointer"]),
    BattleScreen_getLogicBattleModeClient: n(offsets.GameScreen__getLogicBattle, "pointer", ["pointer"]),
    LogicBattleModeClient_getTileMap: n(offsets.LogicBattleModeClient__getTileMap, "pointer", ["pointer"]),
    LogicCharacterClient_getWeaponSkill: n(offsets.LogicCharacterClient__getWeaponSkill, "pointer", ["pointer"]),
    getProjData: n(offsets.getProjData, "pointer", ["pointer"]),
    StringCtor: n(offsets.StringCtor, "pointer", ["pointer", "pointer"]),
    TextField_setText: n(offsets.TextField_setText, "pointer", ["pointer", "pointer"]),
    TextField_setText_ui: n(offsets.TextField_setText_ui, "pointer", ["pointer", "pointer", "bool"])
  });
  return functions;
}
function getFunctions() {
  if (!functions) throw new Error("Functions not initialized! Call initFunctions(base) first.");
  return functions;
}

// agent/core/libs.js
var base = null;
var malloc = null;
function initLibs() {
  base = Module.findBaseAddress("libg.so");
  malloc = new NativeFunction(Module.getExportByName("libc.so", "malloc"), "pointer", ["uint"]);
}
function getBase() {
  return base;
}

// agent/core/csv.js
var _getColumnIndexByName = null;
var _getValueAt = null;
var _getBooleanValueAt = null;
var _getIntegerValueAt = null;
var _getCSV = null;
var ROW_TABLE_ARRAY_PTR = 72;
var ROW_TABLE_ROW_STRIDE = 8;
var ROW_TABLE_ROW_COUNT = 84;
function initCSV(base3) {
  _getColumnIndexByName = new NativeFunction(
    base3.add(offsets.CSVTable__getColumnIndexByName),
    "int",
    ["pointer", "pointer"]
  );
  _getValueAt = new NativeFunction(
    base3.add(offsets.CSVRow__getValueAt),
    "pointer",
    ["pointer", "int"]
  );
  _getBooleanValueAt = new NativeFunction(
    base3.add(offsets.CSVRow__getBooleanValueAt),
    "bool",
    ["pointer", "int"]
  );
  _getIntegerValueAt = new NativeFunction(
    base3.add(offsets.CSVRow__getIntegerValueAt),
    "int",
    ["pointer", "int"]
  );
  _getCSV = new NativeFunction(
    base3.add(offsets.ResourceManager__getCSV),
    "pointer",
    ["pointer"]
  );
}
function _readScString(p) {
  try {
    if (!p || p.isNull()) return null;
    const len = p.add(offsets.ScString_length).readU32();
    if (len === 0 || len > 1024) return null;
    const sp = len < 8 ? p.add(offsets.ScString_data) : p.add(offsets.ScString_data).readPointer();
    if (!sp || sp.isNull()) return null;
    return sp.readUtf8String(len);
  } catch (_) {
    return null;
  }
}
var CSVTable = class {
  constructor(ptr2) {
    this.ptr = ptr2;
  }
  getRowAt(index) {
    try {
      const rowsArray = this.ptr.add(ROW_TABLE_ARRAY_PTR).readPointer();
      const rowPtr = rowsArray.add(ROW_TABLE_ROW_STRIDE * index).readPointer();
      if (!rowPtr || rowPtr.isNull()) return null;
      return new CSVRow(rowPtr);
    } catch (_) {
      return null;
    }
  }
  getColumnIndexByName(name) {
    const buf = Memory.allocUtf8String(name);
    return _getColumnIndexByName(this.ptr, buf);
  }
  getRowCount() {
    try {
      return this.ptr.add(ROW_TABLE_ROW_COUNT).readS32();
    } catch (_) {
      return 0;
    }
  }
};
var CSVRow = class {
  constructor(ptr2) {
    this.ptr = ptr2;
  }
  get table() {
    return new CSVTable(this.ptr.readPointer());
  }
  getValueAt(column) {
    return _readScString(_getValueAt(this.ptr, column));
  }
  getBooleanValueAt(column) {
    return Boolean(_getBooleanValueAt(this.ptr, column));
  }
  getIntegerValueAt(column) {
    return _getIntegerValueAt(this.ptr, column);
  }
  getName() {
    return this.getValueAt(0);
  }
  getValue(name, index = 0) {
    const col = this.table.getColumnIndexByName(name);
    if (col < 0) return null;
    return this.getValueAt(col + index);
  }
  getBooleanValue(name, index = 0) {
    const col = this.table.getColumnIndexByName(name);
    if (col < 0) return false;
    return this.getBooleanValueAt(col + index);
  }
  getIntegerValue(name, index = 0) {
    const col = this.table.getColumnIndexByName(name);
    if (col < 0) return 0;
    return this.getIntegerValueAt(col + index);
  }
};

// agent/core/object_types.js
var OBJECT_TYPE = Object.freeze({
  PLAYER: 1,
  PROJECTILE: 2,
  AREA_EFFECT: 3,
  ITEM: 4
});
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
function getCharacterTypeName(id) {
  return CharacterType[id] ?? "Unknown";
}
function parseGlobalId(globalId) {
  const gid = globalId >>> 0;
  return {
    type: Math.floor(gid / 1e6),
    index: gid % 1e6,
    raw: gid
  };
}

// agent/core/object_handler.js
var _aeColCache = null;
var _projColCache = null;
function _getCsvRow(dataPtr) {
  try {
    const rowPtr = dataPtr.add(offsets.LogicData_csvRow).readPointer();
    if (!rowPtr || rowPtr.isNull()) return null;
    return new CSVRow(rowPtr);
  } catch (_) {
    return null;
  }
}
function _ensureAeCols(csvRow) {
  if (_aeColCache) return _aeColCache;
  const table = csvRow.table;
  _aeColCache = {
    radius: table.getColumnIndexByName("Radius"),
    damage: table.getColumnIndexByName("Damage"),
    tickMs: table.getColumnIndexByName("TimeMs"),
    minTickMs: table.getColumnIndexByName("MinTimeMs")
  };
  return _aeColCache;
}
function _ensureProjCols(csvRow) {
  if (_projColCache) return _projColCache;
  const table = csvRow.table;
  _projColCache = {
    speed: table.getColumnIndexByName("Speed"),
    radius: table.getColumnIndexByName("Radius")
  };
  return _projColCache;
}
function _readIntAt(csvRow, col) {
  if (col < 0) return 0;
  try {
    return csvRow.getIntegerValueAt(col);
  } catch (_) {
    return 0;
  }
}
function readObjectHp(objPtr) {
  try {
    return {
      currentHP: objPtr.add(offsets.GameObj_currentHP).readS32(),
      maxHP: objPtr.add(offsets.GameObj_maxHP).readS32()
    };
  } catch (_) {
    return { currentHP: 0, maxHP: 0 };
  }
}
function readCharacterMeta(dataPtr) {
  try {
    const characterTypeId = dataPtr.add(offsets.CharData_characterType).readS32();
    return {
      characterTypeId,
      characterTypeName: getCharacterTypeName(characterTypeId)
    };
  } catch (_) {
    return { characterTypeId: -1, characterTypeName: "Unknown" };
  }
}
function readAreaEffectCsv(dataPtr) {
  const csvRow = _getCsvRow(dataPtr);
  if (!csvRow) return null;
  const cols = _ensureAeCols(csvRow);
  return {
    csvName: csvRow.getName(),
    radius: _readIntAt(csvRow, cols.radius),
    damage: _readIntAt(csvRow, cols.damage),
    tickMs: _readIntAt(csvRow, cols.tickMs),
    minTickMs: _readIntAt(csvRow, cols.minTickMs)
  };
}
function readProjectileCsv(dataPtr) {
  const csvRow = _getCsvRow(dataPtr);
  if (!csvRow) return null;
  const cols = _ensureProjCols(csvRow);
  return {
    csvName: csvRow.getName(),
    speed: _readIntAt(csvRow, cols.speed),
    radius: _readIntAt(csvRow, cols.radius)
  };
}
function resolveObjectKind(globalIdNum, dataPtr, vtableProj) {
  const { type } = parseGlobalId(globalIdNum);
  if (type === OBJECT_TYPE.PROJECTILE) return "projectile";
  if (type === OBJECT_TYPE.AREA_EFFECT) return "areaEffect";
  if (type === OBJECT_TYPE.PLAYER) return "player";
  if (type === OBJECT_TYPE.ITEM) return "item";
  if (dataPtr && vtableProj) {
    try {
      if (dataPtr.readPointer().equals(vtableProj)) return "projectile";
    } catch (_) {
    }
  }
  return "unknown";
}

// agent/core/scanner.js
var _base = null;
var _brawlerNameCache = /* @__PURE__ */ new Map();
var _scanCount = 0;
var _activeGidSet = /* @__PURE__ */ new Set();
var _isBeamFn = null;
var scanData = {
  ownCharacter: ptr(0),
  myTeamId: 0,
  myX: 0,
  myY: 0,
  myRadius: 60,
  mySpeed: 720,
  myBrawlerId: 0,
  myBrawlerName: null,
  myCurrentHP: 0,
  myMaxHP: 0,
  myCharacterTypeId: 0,
  myCharacterTypeName: null,
  enemies: [],
  projectiles: [],
  areaEffects: [],
  lastUpdate: 0
};
function readHeroIconName(data) {
  try {
    const namePtr = data.add(offsets.HeroData_namePtr).readPointer();
    if (!namePtr || namePtr.isNull()) return null;
    const str = namePtr.readCString();
    if (str && str.startsWith("hero_icon_")) return str.substring(10).toUpperCase();
    return null;
  } catch (_) {
    return null;
  }
}
function readObjectPtr(objects, i, stride, batchView) {
  if (batchView) {
    const off = i * stride;
    const lo = batchView.getUint32(off, true);
    const hi = batchView.getUint32(off + 4, true);
    if (lo === 0 && hi === 0) return null;
    return ptr(hi * 4294967296 + lo);
  }
  const obj = objects.add(i * stride).readPointer();
  if (!obj || obj.isNull()) return null;
  return obj;
}
function handleProjectile(obj, data, functions2, globalId, gidStr, isEnemy) {
  if (!isEnemy) return null;
  let spawnAngle = null;
  try {
    const raw = obj.add(offsets.Projectile_spawnAngle).readFloat();
    if (isFinite(raw)) spawnAngle = raw;
  } catch (_) {
  }
  let isBeam = false;
  try {
    if (_isBeamFn) isBeam = !!_isBeamFn(data);
  } catch (_) {
  }
  const csv = readProjectileCsv(data);
  const nativeSpeed = functions2.LogicProjectileData_getSpeed(data) || 0;
  const nativeRadius = functions2.LogicProjectileData_getRadius(data) || 0;
  return {
    gid: gidStr,
    globalId,
    globalIndex: parseGlobalId(globalId).index,
    x: functions2.LogicGameObjectClient_getX(obj) | 0,
    y: functions2.LogicGameObjectClient_getY(obj) | 0,
    speed: nativeSpeed || csv?.speed || 1200,
    radius: nativeRadius || csv?.radius || 8,
    csvSpeed: csv?.speed || 0,
    csvRadius: csv?.radius || 0,
    csvName: csv?.csvName || null,
    spawnAngle,
    isBeam
  };
}
function handleAreaEffect(obj, data, functions2, globalId, gidStr, team, isEnemy) {
  if (!isEnemy) return null;
  const csv = readAreaEffectCsv(data);
  if (!csv) return null;
  return {
    gid: gidStr,
    globalId,
    globalIndex: parseGlobalId(globalId).index,
    x: functions2.LogicGameObjectClient_getX(obj) | 0,
    y: functions2.LogicGameObjectClient_getY(obj) | 0,
    teamId: team,
    radius: csv.radius,
    damage: csv.damage,
    tickMs: csv.tickMs,
    minTickMs: csv.minTickMs,
    csvName: csv.csvName
  };
}
function handlePlayer(obj, data, functions2, globalId, gidStr, team, isEnemy, own) {
  if (!isEnemy || own && obj.equals(own)) return null;
  let brawlerName = _brawlerNameCache.get(gidStr);
  if (brawlerName === void 0) {
    brawlerName = readHeroIconName(data);
    _brawlerNameCache.set(gidStr, brawlerName);
    if (brawlerName === null) return null;
  } else if (brawlerName === null) {
    return null;
  }
  let moveSpeed = 0;
  try {
    const sp = data.add(offsets.CharData_speed).readU32();
    if (sp >= 300 && sp <= 8500) moveSpeed = sp;
  } catch (_) {
  }
  const hp = readObjectHp(obj);
  const meta = readCharacterMeta(data);
  return {
    gid: gidStr,
    globalId,
    globalIndex: parseGlobalId(globalId).index,
    x: functions2.LogicGameObjectClient_getX(obj) | 0,
    y: functions2.LogicGameObjectClient_getY(obj) | 0,
    brawlerId: data.add(offsets.CharData_brawlerId).readU8() | 0,
    brawlerName,
    teamId: team,
    moveSpeed,
    currentHP: hp.currentHP,
    maxHP: hp.maxHP,
    characterTypeId: meta.characterTypeId,
    characterTypeName: meta.characterTypeName
  };
}
function updateScanner(bm, now) {
  if (!_base) return;
  if (now === void 0) now = Date.now();
  const functions2 = getFunctions();
  try {
    const own = functions2.LogicBattleModeClient_getOwnCharacter(bm);
    if (!own || own.isNull()) {
      scanData.ownCharacter = null;
      scanData.lastUpdate = 0;
      return;
    }
    scanData.ownCharacter = own;
    scanData.myTeamId = functions2.LogicBattleModeClient_getOwnPlayerTeam(bm);
    scanData.myX = functions2.LogicGameObjectClient_getX(own) | 0;
    scanData.myY = functions2.LogicGameObjectClient_getY(own) | 0;
    scanData.mySpeed = 720;
    const ownData = functions2.LogicGameObjectClient_getData(own);
    if (ownData && !ownData.isNull()) {
      scanData.myRadius = functions2.LogicCharacterData_getCollisionRadius(ownData) || 60;
      try {
        scanData.myBrawlerId = ownData.add(offsets.CharData_brawlerId).readU8() | 0;
      } catch (_) {
      }
      try {
        const readSpeed = ownData.add(offsets.CharData_speed).readU32();
        if (readSpeed >= 300 && readSpeed <= 2500) scanData.mySpeed = readSpeed;
      } catch (_) {
      }
      try {
        const nameRead = readHeroIconName(ownData);
        if (nameRead) scanData.myBrawlerName = nameRead;
      } catch (_) {
      }
      const ownHp = readObjectHp(own);
      scanData.myCurrentHP = ownHp.currentHP;
      scanData.myMaxHP = ownHp.maxHP;
      const ownMeta = readCharacterMeta(ownData);
      scanData.myCharacterTypeId = ownMeta.characterTypeId;
      scanData.myCharacterTypeName = ownMeta.characterTypeName;
    }
    const objMgr = bm.add(offsets.BattleMode_objectManagerPtr).readPointer();
    if (!objMgr || objMgr.isNull()) return;
    const objects = objMgr.add(offsets.ObjectManager_objectsArray).readPointer();
    const count = objMgr.add(offsets.ObjectManager_count).readU32();
    if (!objects || objects.isNull() || count === 0 || count > 1200) return;
    const enemies = [];
    const projectiles = [];
    const areaEffects = [];
    const vtableProj = _base.add(offsets.VTABLE_PROJECTILE_DATA);
    const stride = offsets.ObjectManager_ptrStride;
    let batchView = null;
    try {
      const buf = Memory.readByteArray(objects, count * stride);
      if (buf) batchView = new DataView(buf);
    } catch (_) {
      batchView = null;
    }
    for (let i = 0; i < count; i++) {
      try {
        const obj = readObjectPtr(objects, i, stride, batchView);
        if (!obj) continue;
        const team = obj.add(offsets.GameObj_team).readU32();
        const isEnemy = team !== scanData.myTeamId;
        if (obj.add(offsets.GameObj_deadFlag).readU32() !== 0) continue;
        const data = functions2.LogicGameObjectClient_getData(obj);
        if (!data || data.isNull()) continue;
        const globalId = functions2.LogicGameObjectClient_getGlobalID(obj) >>> 0;
        const gidStr = globalId.toString();
        const kind = resolveObjectKind(globalId, data, vtableProj);
        if (kind === "projectile") {
          const entry = handleProjectile(obj, data, functions2, globalId, gidStr, isEnemy);
          if (entry) projectiles.push(entry);
          continue;
        }
        if (kind === "areaEffect") {
          const entry = handleAreaEffect(obj, data, functions2, globalId, gidStr, team, isEnemy);
          if (entry) areaEffects.push(entry);
          continue;
        }
        if (kind === "player") {
          const entry = handlePlayer(obj, data, functions2, globalId, gidStr, team, isEnemy, own);
          if (entry) enemies.push(entry);
        }
      } catch (_) {
      }
    }
    _scanCount++;
    if ((_scanCount & 63) === 0) {
      _activeGidSet.clear();
      for (let i = 0; i < enemies.length; i++) _activeGidSet.add(enemies[i].gid);
      for (const gid of _brawlerNameCache.keys()) {
        if (_brawlerNameCache.get(gid) !== null && !_activeGidSet.has(gid)) {
          _brawlerNameCache.delete(gid);
        }
      }
    }
    scanData.enemies = enemies;
    scanData.projectiles = projectiles;
    scanData.areaEffects = areaEffects;
    scanData.lastUpdate = now;
  } catch (_) {
  }
}
function resetScannerCache() {
  _brawlerNameCache.clear();
}
function initScanner(base3) {
  _base = base3;
  try {
    _isBeamFn = new NativeFunction(base3.add(offsets.LogicProjectileData__isBeam), "bool", ["pointer"]);
  } catch (_) {
    _isBeamFn = null;
  }
}

// agent/utils/flags.js
var state = {
  esp: false
};

// agent/core/brawler_db.js
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
var RANGE_BY_NAME = {
  "8-BIT": 3700,
  "ALLI": 200,
  "AMBER": 3100,
  "ANGELO": 3700,
  "ASH": 1700,
  "BARLEY": 2700,
  "BEA": 3700,
  "BELLE": 3700,
  "BERRY": 2300,
  "BIBI": 1300,
  "BO": 3200,
  "BONNIE": 3300,
  "BROCK": 3300,
  "BULL": 2e3,
  "BUSTER": 2e3,
  "BUZZ": 1e3,
  "BYRON": 3700,
  "CARL": 3100,
  "CHARLIE": 3300,
  "CHESTER": 3100,
  "CHUCK": 2400,
  "CLANCY": 2800,
  "COLETTE": 3200,
  "COLT": 3300,
  "CORDELIUS": 2e3,
  "CROW": 3200,
  "DARRYL": 2200,
  "DOUG": 1200,
  "DRACO": 1500,
  "DYNAMIKE": 2700,
  "EDGAR": 700,
  "EL_PRIMO": 1100,
  "EMZ": 2400,
  "EVE": 3400,
  "FANG": 1e3,
  "FINX": 3100,
  "FRANK": 2200,
  "GALE": 3100,
  "GENE": 2100,
  "GIGI": 1200,
  "GRAY": 3300,
  "GRIFF": 3100,
  "GROM": 2800,
  "GUS": 3400,
  "HANK": 1200,
  "JACKY": 1200,
  "JAE": 3100,
  "JANET": 1500,
  "JESSIE": 3300,
  "JUJU": 2300,
  "KAZE": 1e3,
  "KENJI": 1e3,
  "KIT": 1300,
  "LARRY_AND_LAWRIE": 2700,
  "LEON": 3500,
  "LILY": 700,
  "LOLA": 3300,
  "LOU": 3400,
  "LUMI": 2900,
  "MAISIE": 3200,
  "MANDY": 3300,
  "MAX": 3100,
  "MEEPLE": 2800,
  "MEG": 3300,
  "MELODIE": 2900,
  "MICO": 1500,
  "MOE": 1800,
  "MORTIS": 1e3,
  "MR_P": 2600,
  "NANI": 3200,
  "NITA": 2200,
  "OLLIE": 2300,
  "OTIS": 3300,
  "PAM": 3300,
  "PEARL": 3300,
  "PENNY": 3200,
  "PIERCE": 3700,
  "PIPER": 3700,
  "POCO": 2600,
  "RICO": 3500,
  "ROSA": 1300,
  "RUFFS": 3300,
  "SAM": 1100,
  "SANDY": 2200,
  "SHADE": 1300,
  "SHELLY": 2800,
  "SPIKE": 2800,
  "SPROUT": 1800,
  "SQUEAK": 2800,
  "STU": 2800,
  "SURGE": 2400,
  "TARA": 2900,
  "TICK": 3200,
  "TRUNK": 1200,
  "WILLOW": 2700
};
var LAUNCHERS = /* @__PURE__ */ new Set([
  "BARLEY",
  "DYNAMIKE",
  "TICK",
  "SPROUT",
  "GROM",
  "WILLOW",
  "LARRY_AND_LAWRIE",
  "BERRY"
]);
var LAUNCHER_IDS = /* @__PURE__ */ new Set([6, 9, 22, 37, 48, 67, 77, 82]);
Object.freeze(BRAWLER_RANGE);
Object.freeze(RANGE_BY_NAME);
Object.freeze(LAUNCHERS);
Object.freeze(LAUNCHER_IDS);
function resolveBrawlerRange(name, id) {
  if (name && RANGE_BY_NAME[name] !== void 0) return RANGE_BY_NAME[name];
  return BRAWLER_RANGE[id | 0] || 0;
}

// agent/core/renderer.js
var GL = {
  ARRAY_BUFFER: 34962,
  DYNAMIC_DRAW: 35048,
  FLOAT: 5126,
  LINES: 1,
  BLEND: 3042,
  SRC_ALPHA: 770,
  ONE_MINUS_SRC_ALPHA: 771,
  VERTEX_SHADER: 35633,
  FRAGMENT_SHADER: 35632,
  DEPTH_TEST: 2929,
  CULL_FACE: 2884,
  SCISSOR_TEST: 3089
};
var VERT_SRC = "attribute vec2 p;attribute vec4 vc;varying vec4 fc;void main(){fc=vc;gl_Position=vec4(p,0.0,1.0);}";
var FRAG_SRC = "precision mediump float;varying vec4 fc;void main(){gl_FragColor=fc;}";
var MAX_VERTS = 2048;
var STRIDE_F = 6;
var STRIDE_B = 24;
var verts = new Float32Array(MAX_VERTS * STRIDE_F);
var vertsU8 = new Uint8Array(verts.buffer);
var gpuBuf = Memory.alloc(verts.byteLength);
var gl = {};
var prog = 0;
var posLoc = -1;
var colLoc = -1;
var vbo = 0;
var ready = false;
var failed = false;
function findGLLibrary() {
  const candidates = ["libGLESv2.so", "libGLES_mali.so", "libGLES_adreno.so", "libGL.so"];
  for (const lib of candidates) {
    try {
      if (Module.findExportByName(lib, "glCreateShader")) return lib;
    } catch (_) {
    }
  }
  return null;
}
function loadGL(lib) {
  const fn = (name, ret, args) => new NativeFunction(Module.findExportByName(lib, name), ret, args);
  gl.createShader = fn("glCreateShader", "uint", ["uint"]);
  gl.shaderSource = fn("glShaderSource", "void", ["uint", "int", "pointer", "pointer"]);
  gl.compileShader = fn("glCompileShader", "void", ["uint"]);
  gl.createProgram = fn("glCreateProgram", "uint", []);
  gl.attachShader = fn("glAttachShader", "void", ["uint", "uint"]);
  gl.linkProgram = fn("glLinkProgram", "void", ["uint"]);
  gl.useProgram = fn("glUseProgram", "void", ["uint"]);
  gl.getAttribLocation = fn("glGetAttribLocation", "int", ["uint", "pointer"]);
  gl.enableVertexAttrib = fn("glEnableVertexAttribArray", "void", ["uint"]);
  gl.vertexAttribPtr = fn("glVertexAttribPointer", "void", ["uint", "int", "uint", "uint8", "int", "pointer"]);
  gl.drawArrays = fn("glDrawArrays", "void", ["uint", "int", "int"]);
  gl.genBuffers = fn("glGenBuffers", "void", ["int", "pointer"]);
  gl.bindBuffer = fn("glBindBuffer", "void", ["uint", "uint"]);
  gl.bufferData = fn("glBufferData", "void", ["uint", "int64", "pointer", "uint"]);
  gl.enable = fn("glEnable", "void", ["uint"]);
  gl.disable = fn("glDisable", "void", ["uint"]);
  gl.blendFunc = fn("glBlendFunc", "void", ["uint", "uint"]);
  gl.lineWidth = fn("glLineWidth", "void", ["float"]);
}
function compileShader(type, src) {
  const shader = gl.createShader(type);
  const srcPtr = Memory.allocUtf8String(src);
  const ptrPtr = Memory.alloc(Process.pointerSize);
  ptrPtr.writePointer(srcPtr);
  gl.shaderSource(shader, 1, ptrPtr, ptr(0));
  gl.compileShader(shader);
  return shader;
}
function initGL() {
  if (ready || failed) return;
  try {
    const lib = findGLLibrary();
    if (!lib) {
      failed = true;
      return;
    }
    loadGL(lib);
    const vs = compileShader(GL.VERTEX_SHADER, VERT_SRC);
    const fs = compileShader(GL.FRAGMENT_SHADER, FRAG_SRC);
    prog = gl.createProgram();
    if (prog === 0) {
      failed = true;
      return;
    }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    posLoc = gl.getAttribLocation(prog, Memory.allocUtf8String("p"));
    colLoc = gl.getAttribLocation(prog, Memory.allocUtf8String("vc"));
    const vboBuf = Memory.alloc(4);
    gl.genBuffers(1, vboBuf);
    vbo = vboBuf.readU32();
    ready = true;
  } catch (e) {
    failed = true;
  }
}
function setVert(idx, nx, ny, r, g, b, a) {
  const off = idx * STRIDE_F;
  verts[off] = nx;
  verts[off + 1] = ny;
  verts[off + 2] = r;
  verts[off + 3] = g;
  verts[off + 4] = b;
  verts[off + 5] = a;
}
function pushLine(idx, ax, ay, bx, by, r, g, b, a) {
  if (idx + 2 > MAX_VERTS) return idx;
  setVert(idx, ax, ay, r, g, b, a);
  setVert(idx + 1, bx, by, r, g, b, a);
  return idx + 2;
}
var Renderer2 = {
  /** Flush all queued primitives to the screen. Called once per frame. */
  flush(drawList) {
    if (!ready) initGL();
    if (!ready) return;
    let idx = 0;
    for (const cmd of drawList) {
      switch (cmd.type) {
        case "line":
          idx = pushLine(idx, cmd.ax, cmd.ay, cmd.bx, cmd.by, cmd.r, cmd.g, cmd.b, cmd.a);
          break;
        case "box":
          idx = pushBox(idx, cmd.sx, cmd.sy, cmd.sw, cmd.sh, cmd.r, cmd.g, cmd.b, cmd.a);
          break;
        case "ring":
          idx = pushRing(idx, cmd.pts, cmd.r, cmd.g, cmd.b, cmd.a);
          break;
      }
    }
    if (idx === 0) return;
    submitGPU(idx);
  },
  /** Returns true once GL is successfully initialised. */
  isReady() {
    return ready;
  }
};
function pushBox(idx, sx, sy, screenW3, screenH3, r, g, b, a) {
  const nx = sx / screenW3 * 2 - 1;
  const ny = 1 - sy / screenH3 * 2;
  const bw = 80 / screenW3, bh = 120 / screenH3;
  const x0 = nx - bw / 2, x1 = nx + bw / 2;
  idx = pushLine(idx, x0, ny, x1, ny, r, g, b, a);
  idx = pushLine(idx, x1, ny, x1, ny + bh, r, g, b, a);
  idx = pushLine(idx, x1, ny + bh, x0, ny + bh, r, g, b, a);
  idx = pushLine(idx, x0, ny + bh, x0, ny, r, g, b, a);
  return idx;
}
function pushRing(idx, pts, r, g, b, a) {
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p1 = pts[i], p2 = pts[(i + 1) % n];
    if (!p1.valid || !p2.valid) continue;
    idx = pushLine(idx, p1.sx, p1.sy, p2.sx, p2.sy, r, g, b, a);
  }
  return idx;
}
function submitGPU(vertCount) {
  gpuBuf.writeByteArray(vertsU8.subarray(0, vertCount * STRIDE_B));
  gl.disable(GL.DEPTH_TEST);
  gl.disable(GL.CULL_FACE);
  gl.disable(GL.SCISSOR_TEST);
  gl.enable(GL.BLEND);
  gl.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA);
  gl.useProgram(prog);
  gl.bindBuffer(GL.ARRAY_BUFFER, vbo);
  gl.bufferData(GL.ARRAY_BUFFER, vertCount * STRIDE_B, gpuBuf, GL.DYNAMIC_DRAW);
  gl.enableVertexAttrib(posLoc);
  gl.vertexAttribPtr(posLoc, 2, GL.FLOAT, 0, STRIDE_B, ptr(0));
  gl.enableVertexAttrib(colLoc);
  gl.vertexAttribPtr(colLoc, 4, GL.FLOAT, 0, STRIDE_B, ptr(8));
  gl.lineWidth(3);
  gl.drawArrays(GL.LINES, 0, vertCount);
  gl.useProgram(0);
  gl.bindBuffer(GL.ARRAY_BUFFER, 0);
}

// agent/core/draw.js
var Color = Object.freeze({
  enemy: [1, 0.2, 0.2, 0.9],
  ally: [0.2, 0.9, 0.3, 0.9],
  self: [0.2, 0.9, 0.95, 0.55],
  aim: [1, 1, 0.15, 0.95],
  warning: [1, 0.6, 0, 0.9],
  white: [1, 1, 1, 1]
});
var screenW = 1;
var screenH = 1;
var commands = [];
var Draw = {
  /**
   * Call once per frame before any draw calls.
   * @param {number} w  Screen width  in pixels
   * @param {number} h  Screen height in pixels
   */
  beginFrame(w, h) {
    screenW = w;
    screenH = h;
    commands = [];
  },
  /** Submit everything queued this frame to the renderer. */
  endFrame() {
    Renderer2.flush(commands, screenW, screenH);
  },
  /**
   * Draw a screen-space line between two points.
   * @param {number}   x0,y0   Start (screen px)
   * @param {number}   x1,y1   End   (screen px)
   * @param {number[]} color   [r,g,b,a]  0–1
   */
  line(x0, y0, x1, y1, color = Color.white) {
    const [r, g, b, a] = color;
    commands.push({ type: "line", ax: x0, ay: y0, bx: x1, by: y1, r, g, b, a });
  },
  /**
   * Draw a box centred on a screen-space point.
   * @param {number}   sx,sy   Centre (screen px)
   * @param {number[]} color   [r,g,b,a]
   * @param {number}   w       Box width  in pixels  (default 80)
   * @param {number}   h       Box height in pixels  (default 120)
   */
  box(sx, sy, color = Color.enemy, w = 80, h = 120) {
    const [r, g, b, a] = color;
    commands.push({ type: "box", sx, sy, sw: screenW, sh: screenH, bw: w, bh: h, r, g, b, a });
  },
  /**
   * Draw a ring (circle approximated by line segments) around a screen-space point.
   * @param {Array<{sx,sy,valid}>} pts  Pre-projected ring points (see buildRingPoints())
   * @param {number[]}             color
   */
  ring(pts, color = Color.self) {
    const [r, g, b, a] = color;
    commands.push({ type: "ring", pts, r, g, b, a });
  },
  /**
   * Draw a tracer line from one screen point to another with the aim colour.
   * Convenience wrapper for the common aimbot / LOS line.
   */
  tracerLine(fromX, fromY, toX, toY, color = Color.aim) {
    Draw.line(fromX, fromY, toX, toY, color);
  },
  /**
   * Draw a box + optional tracer from a source point in one call.
   * Typical use: one enemy = Draw.enemyMarker(...)
   */
  enemyMarker(sx, sy, fromX, fromY, drawTracer = false) {
    if (drawTracer) Draw.tracerLine(fromX, fromY, sx, sy, Color.enemy);
    Draw.box(sx, sy, Color.enemy);
  }
};

// agent/modules/esp.js
var SCAN_STALENESS_MS = 2e3;
var BS_STALENESS_MS = 2e3;
var RING_SEGS = 32;
var RING_COS = new Float32Array(RING_SEGS);
var RING_SIN = new Float32Array(RING_SEGS);
for (let i = 0; i < RING_SEGS; i++) {
  const a = i * (Math.PI * 2 / RING_SEGS);
  RING_COS[i] = Math.cos(a);
  RING_SIN[i] = Math.sin(a);
}
var battleScreen = null;
var battleScreenTs = 0;
var screenW2 = 0;
var screenH2 = 0;
var viewMatrix = new Float32Array(16);
function refreshMatrix(bs) {
  try {
    const w = bs.add(offsets.BattleScreen_screenWidth).readFloat();
    const h = bs.add(offsets.BattleScreen_screenHeight).readFloat();
    if (w <= 0 || h <= 0) return false;
    const buf = bs.add(offsets.BattleScreen_viewMatrix).readByteArray(64);
    if (!buf) return false;
    const dv = new DataView(buf);
    for (let i = 0; i < 16; i++) viewMatrix[i] = dv.getFloat32(i * 4, true);
    screenW2 = w;
    screenH2 = h;
    return true;
  } catch (_) {
    return false;
  }
}
var w2sTmp = { sx: 0, sy: 0, valid: false };
function worldToScreen(wx, wy, out) {
  const M = viewMatrix;
  const y = -wy;
  const cx = M[0] * wx + M[4] * y + M[12];
  const cy = M[1] * wx + M[5] * y + M[13];
  const cw = M[3] * wx + M[7] * y + M[15];
  if (cw <= 1e-6) {
    out.valid = false;
    return false;
  }
  const iw = 1 / cw;
  out.sx = (cx * iw * 0.5 + 0.5) * screenW2;
  out.sy = (1 - (cy * iw * 0.5 + 0.5)) * screenH2;
  out.valid = true;
  return true;
}
function buildRingPoints(cx, cy, radius) {
  const pts = new Array(RING_SEGS);
  for (let i = 0; i < RING_SEGS; i++) {
    const tmp = { sx: 0, sy: 0, valid: false };
    worldToScreen(cx + RING_COS[i] * radius, cy + RING_SIN[i] * radius, tmp);
    pts[i] = { sx: tmp.sx, sy: tmp.sy, valid: tmp.valid };
  }
  return pts;
}
var hookCallback = null;
function parseGOTFromPLT(pltAddr) {
  try {
    const insn0 = pltAddr.readU32();
    const insn1 = pltAddr.add(4).readU32();
    if ((insn0 >>> 24 & 159) !== 144) return null;
    const immlo = insn0 >>> 29 & 3;
    const immhi = insn0 >>> 5 & 524287;
    const imm21 = immhi << 2 | immlo;
    const signed = imm21 & 1048576 ? imm21 - 2097152 : imm21;
    const ldrOff = (insn1 >>> 10 & 4095) * 8;
    const pcPage = ptr(pltAddr).and(ptr("0xFFFFFFFFFFFFF000"));
    const gotPage = signed >= 0 ? pcPage.add(signed * 4096) : pcPage.sub(-signed * 4096);
    return gotPage.add(ldrOff);
  } catch (_) {
    return null;
  }
}
function scanGOT(libgMod, eglReal) {
  const tmp = Memory.alloc(8);
  tmp.writePointer(eglReal);
  const pattern = Array.from(
    { length: 8 },
    (_, i) => tmp.add(i).readU8().toString(16).padStart(2, "0")
  ).join(" ");
  const libgEnd = libgMod.base.add(libgMod.size);
  for (const prot of ["r--", "rw-"]) {
    for (const range of Process.enumerateRanges(prot)) {
      if (range.base.compare(libgMod.base) < 0 || range.base.compare(libgEnd) >= 0) continue;
      const hits = Memory.scanSync(range.base, range.size, pattern);
      if (hits.length > 0) return hits[0].address;
    }
  }
  return null;
}
function installSwapHook(eglReal, slot) {
  const origSwap = new NativeFunction(eglReal, "uint", ["pointer", "pointer"]);
  hookCallback = new NativeCallback((dpy, surface) => {
    try {
      buildDrawList();
    } catch (_) {
    }
    return origSwap(dpy, surface);
  }, "uint", ["pointer", "pointer"]);
  try {
    Memory.protect(slot, 8, "rw-");
  } catch (_) {
  }
  slot.writePointer(hookCallback);
}
var lastUpdate = 0;
var selfValid = false;
var selfX = 0;
var selfY = 0;
function buildDrawList() {
  Draw.beginFrame(screenW2, screenH2);
  const now = Date.now();
  const stale = !battleScreen || battleScreen.isNull() || battleScreenTs > 0 && now - battleScreenTs > BS_STALENESS_MS || scanData.lastUpdate === 0 || now - scanData.lastUpdate > SCAN_STALENESS_MS || !scanData.ownCharacter || scanData.myX === void 0 || scanData.myX === -1;
  if (stale || !refreshMatrix(battleScreen)) return [];
  const mx = scanData.myX, my = scanData.myY;
  selfValid = worldToScreen(mx, my, w2sTmp);
  if (selfValid) {
    selfX = w2sTmp.sx;
    selfY = w2sTmp.sy;
  }
  const myRange = resolveBrawlerRange(scanData.myBrawlerName, scanData.myBrawlerId);
  if (myRange > 0) {
    Draw.ring(buildRingPoints(mx, my, myRange), Color.self);
  }
  for (const e of scanData.enemies) {
    if (!worldToScreen(e.x, e.y, w2sTmp)) continue;
    const { sx, sy } = w2sTmp;
    Draw.enemyMarker(sx, sy, selfX, selfY, selfValid);
    const eRange = resolveBrawlerRange(e.brawlerName, e.brawlerId);
    if (eRange > 0) Draw.ring(buildRingPoints(e.x, e.y, eRange), Color.enemy);
  }
  Draw.endFrame();
  lastUpdate = now;
}
function setupESP(base3) {
  try {
    Interceptor.attach(base3.add(offsets.BattleScreen__updateCameraParameters), {
      onEnter(args) {
        battleScreen = args[0];
        battleScreenTs = Date.now();
      }
    });
  } catch (_) {
  }
  try {
    const libgMod = Process.findModuleByName("libg.so");
    if (!libgMod) return;
    const eglReal = Module.findExportByName("libEGL.so", "eglSwapBuffers");
    if (!eglReal) return;
    const pltEntry = libgMod.enumerateImports().find((i) => i.name === "eglSwapBuffers");
    if (!pltEntry) return;
    let slot = parseGOTFromPLT(pltEntry.address);
    let slotValid = false;
    try {
      slotValid = slot && slot.readPointer().compare(eglReal) === 0;
    } catch (_) {
    }
    if (!slotValid) slot = scanGOT(libgMod, eglReal);
    if (!slot) return;
    installSwapHook(eglReal, slot);
  } catch (_) {
  }
}
function resetESP() {
  battleScreen = null;
  battleScreenTs = 0;
  selfValid = false;
  selfX = 0;
  selfY = 0;
  lastUpdate = 0;
  screenW2 = 0;
  screenH2 = 0;
}

// agent/index.js
var base2 = getBase();
function main() {
  initLibs();
  let base3 = getBase();
  initFunctions(base3);
  initCSV(base3);
  initScanner(base3);
  setupESP(base3);
  let lastBM2 = null;
  Interceptor.attach(base3.add(offsets.LogicBattleModeClient_update), {
    onEnter(args) {
      try {
        const bm = args[0];
        if (!bm || bm.isNull()) return;
        if (!lastBM2 || !lastBM2.equals(bm)) {
          lastBM2 = bm;
          resetESP();
          resetScannerCache();
        }
        const now = Date.now();
        updateScanner(bm, now);
        if (state.esp) buildDrawList();
      } catch (_) {
      }
    }
  });
}
setTimeout(() => {
  main();
}, 5e3);
