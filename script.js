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
  ButtonCallback: 12902348,
  CustomButton_SetMovieClip: 12902380,
  nativeCopyToClipboard: 14520824,
  StageInstanceGlobalPtr: 19108832,
  BattleScreen_screenWidth: 2180,
  BattleScreen_screenHeight: 2184,
  BattleScreen_viewMatrix: 2024,
  ResourceManager__getCSV: 12511816
});

// agent/core/libs.js
var _base = null;
var _libc = null;
function libg(intervalMs = 50) {
  if (_base) return Promise.resolve(_base);
  let mod = Process.findModuleByName("libg.so");
  if (mod) {
    _base = mod.base;
    return Promise.resolve(_base);
  }
  return new Promise((resolve) => {
    const id = setInterval(() => {
      mod = Process.findModuleByName("libg.so");
      if (mod) {
        clearInterval(id);
        _base = mod.base;
        resolve(_base);
      }
    }, intervalMs);
  });
}
function libc(intervalMs = 50) {
  if (_libc) return Promise.resolve(_libc);
  let mod = Process.findModuleByName("libc.so");
  if (mod) {
    _libc = _initLibc(mod);
    return Promise.resolve(_libc);
  }
  return new Promise((resolve) => {
    const id = setInterval(() => {
      mod = Process.findModuleByName("libc.so");
      if (mod) {
        clearInterval(id);
        _libc = _initLibc(mod);
        resolve(_libc);
      }
    }, intervalMs);
  });
}
function _initLibc(mod) {
  return {
    malloc: new NativeFunction(mod.getExportByName("malloc"), "pointer", ["uint"])
  };
}

// agent/core/functions.js
var _n = null;
function initFunctions(base) {
  if (_n) return _n;
  _n = {
    BattleMode_getInstance: new NativeFunction(base.add(offsets.BattleMode_getInstance), "pointer", []),
    LogicGameObjectClient_getX: new NativeFunction(base.add(offsets.LogicGameObjectClient_getX), "int32", ["pointer"]),
    LogicGameObjectClient_getY: new NativeFunction(base.add(offsets.LogicGameObjectClient_getY), "int32", ["pointer"]),
    LogicBattleModeClient_getOwnCharacter: new NativeFunction(base.add(offsets.LogicBattleModeClient_getOwnCharacter), "pointer", ["pointer"]),
    LogicBattleModeClient_setClientPredictionMoveTo: new NativeFunction(base.add(offsets.LogicBattleModeClient_setClientPredictionMoveTo), "void", ["pointer", "int", "int", "int"]),
    Gui_getInstance: new NativeFunction(base.add(offsets.Gui_getInstance), "pointer", []),
    ClientInput_constructor_int: new NativeFunction(base.add(offsets.ClientInput_constructor_int), "pointer", ["pointer", "int"]),
    ClientInputManager_addInput: new NativeFunction(base.add(offsets.ClientInputManager_addInput), "void", ["pointer", "pointer"]),
    LogicGameObjectClient_getGlobalID: new NativeFunction(base.add(offsets.LogicGameObjectClient_getGlobalID), "uint32", ["pointer"]),
    LogicBattleModeClient_getOwnPlayerTeam: new NativeFunction(base.add(offsets.LogicBattleModeClient_getOwnPlayerTeam), "uint32", ["pointer"]),
    LogicGameObjectClient_getData: new NativeFunction(base.add(offsets.LogicGameObjectClient_getData), "pointer", ["pointer"]),
    LogicProjectileData_getSpeed: new NativeFunction(base.add(offsets.LogicProjectileData_getSpeed), "uint32", ["pointer"]),
    LogicProjectileData_getRadius: new NativeFunction(base.add(offsets.LogicProjectileData_getRadius), "uint32", ["pointer"]),
    LogicCharacterData_getCollisionRadius: new NativeFunction(base.add(offsets.LogicCharacterData_getCollisionRadius), "uint32", ["pointer"]),
    BattleScreen_getLogicBattleModeClient: new NativeFunction(base.add(offsets.GameScreen__getLogicBattle), "pointer", ["pointer"]),
    LogicBattleModeClient_getTileMap: new NativeFunction(base.add(offsets.LogicBattleModeClient__getTileMap), "pointer", ["pointer"]),
    LogicCharacterClient_getWeaponSkill: new NativeFunction(base.add(offsets.LogicCharacterClient__getWeaponSkill), "pointer", ["pointer"]),
    getProjData: new NativeFunction(base.add(offsets.getProjData), "pointer", ["pointer"]),
    StringCtor: new NativeFunction(base.add(offsets.StringCtor), "pointer", ["pointer", "pointer"]),
    TextField_setText: new NativeFunction(base.add(offsets.TextField_setText), "pointer", ["pointer", "pointer"]),
    TextField_setText_ui: new NativeFunction(base.add(offsets.TextField_setText_ui), "pointer", ["pointer", "pointer", "bool"]),
    StringTable_getMovieClip: new NativeFunction(base.add(offsets.StringTable_getMovieClip), "pointer", ["pointer", "pointer", "int"]),
    GameButtonCtor: new NativeFunction(base.add(offsets.GameButtonCtor), "pointer", ["pointer"]),
    CustomButton_SetMovieClip: new NativeFunction(base.add(offsets.CustomButton_SetMovieClip), "void", ["pointer", "pointer", "int"]),
    MovieClip_gotoAndStopFrameIndex: new NativeFunction(base.add(offsets.MovieClip__gotoAndStopFrameIndex), "void", ["pointer", "int"]),
    DisplayObject_setXY: new NativeFunction(base.add(offsets.DisplayObject__setXY), "void", ["pointer", "float", "float"]),
    MovieClip_getTextFieldByName: new NativeFunction(base.add(offsets.MovieClip__getTextFieldByName), "pointer", ["pointer", "pointer"])
  };
  Object.freeze(_n);
  return _n;
}
function getFunctions() {
  if (!_n) throw new Error("Functions not initialized! Call initFunctions(base) first.");
  return _n;
}

// agent/utils/utils.js
var _libc2 = null;
function initUtils(libc2) {
  _libc2 = libc2;
}
function getLibc() {
  if (!_libc2) throw new Error("Utils not initialized! Call initUtils(libc) first.");
  return _libc2;
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
var _csvCache = /* @__PURE__ */ new Map();
function initCSV(base) {
  _getColumnIndexByName = new NativeFunction(
    base.add(offsets.CSVTable__getColumnIndexByName),
    "int",
    ["pointer", "pointer"]
  );
  _getValueAt = new NativeFunction(
    base.add(offsets.CSVRow__getValueAt),
    "pointer",
    ["pointer", "int"]
  );
  _getBooleanValueAt = new NativeFunction(
    base.add(offsets.CSVRow__getBooleanValueAt),
    "bool",
    ["pointer", "int"]
  );
  _getIntegerValueAt = new NativeFunction(
    base.add(offsets.CSVRow__getIntegerValueAt),
    "int",
    ["pointer", "int"]
  );
  _getCSV = new NativeFunction(
    base.add(offsets.ResourceManager__getCSV),
    "pointer",
    ["pointer"]
  );
}
function _makeScString(str) {
  const fns = getFunctions();
  const lc = getLibc();
  if (!fns || !lc) return null;
  const raw = Memory.allocUtf8String(str);
  const obj = lc.malloc(128);
  fns.StringCtor(obj, raw);
  return obj;
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
function loadCSV(filename) {
  if (!_getCSV) return null;
  const cached = _csvCache.get(filename);
  if (cached) return cached;
  try {
    const sc = _makeScString(filename);
    if (!sc) return null;
    const nodePtr = _getCSV(sc);
    if (!nodePtr || nodePtr.isNull()) return null;
    const node = new CSVNode(nodePtr);
    const table = node.getTable();
    if (!table) return null;
    _csvCache.set(filename, table);
    return table;
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
var CSVNode = class {
  constructor(ptr2) {
    this.ptr = ptr2;
  }
  getTable() {
    const tablePtr = this.ptr.readPointer();
    if (!tablePtr || tablePtr.isNull()) return null;
    return new CSVTable(tablePtr);
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
var _base2 = null;
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
function handleProjectile(obj, data, functions, globalId, gidStr, isEnemy) {
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
  const nativeSpeed = functions.LogicProjectileData_getSpeed(data) || 0;
  const nativeRadius = functions.LogicProjectileData_getRadius(data) || 0;
  return {
    gid: gidStr,
    globalId,
    globalIndex: parseGlobalId(globalId).index,
    x: functions.LogicGameObjectClient_getX(obj) | 0,
    y: functions.LogicGameObjectClient_getY(obj) | 0,
    speed: nativeSpeed || csv?.speed || 1200,
    radius: nativeRadius || csv?.radius || 8,
    csvSpeed: csv?.speed || 0,
    csvRadius: csv?.radius || 0,
    csvName: csv?.csvName || null,
    spawnAngle,
    isBeam
  };
}
function handleAreaEffect(obj, data, functions, globalId, gidStr, team, isEnemy) {
  if (!isEnemy) return null;
  const csv = readAreaEffectCsv(data);
  if (!csv) return null;
  return {
    gid: gidStr,
    globalId,
    globalIndex: parseGlobalId(globalId).index,
    x: functions.LogicGameObjectClient_getX(obj) | 0,
    y: functions.LogicGameObjectClient_getY(obj) | 0,
    teamId: team,
    radius: csv.radius,
    damage: csv.damage,
    tickMs: csv.tickMs,
    minTickMs: csv.minTickMs,
    csvName: csv.csvName
  };
}
function handlePlayer(obj, data, functions, globalId, gidStr, team, isEnemy, own) {
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
    x: functions.LogicGameObjectClient_getX(obj) | 0,
    y: functions.LogicGameObjectClient_getY(obj) | 0,
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
  if (!_base2) return;
  if (now === void 0) now = Date.now();
  const functions = getFunctions();
  try {
    const own = functions.LogicBattleModeClient_getOwnCharacter(bm);
    if (!own || own.isNull()) {
      scanData.ownCharacter = null;
      scanData.lastUpdate = 0;
      return;
    }
    scanData.ownCharacter = own;
    scanData.myTeamId = functions.LogicBattleModeClient_getOwnPlayerTeam(bm);
    scanData.myX = functions.LogicGameObjectClient_getX(own) | 0;
    scanData.myY = functions.LogicGameObjectClient_getY(own) | 0;
    scanData.mySpeed = 720;
    const ownData = functions.LogicGameObjectClient_getData(own);
    if (ownData && !ownData.isNull()) {
      scanData.myRadius = functions.LogicCharacterData_getCollisionRadius(ownData) || 60;
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
    const projectiles2 = [];
    const areaEffects = [];
    const vtableProj = _base2.add(offsets.VTABLE_PROJECTILE_DATA);
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
        const data = functions.LogicGameObjectClient_getData(obj);
        if (!data || data.isNull()) continue;
        const globalId = functions.LogicGameObjectClient_getGlobalID(obj) >>> 0;
        const gidStr = globalId.toString();
        const kind = resolveObjectKind(globalId, data, vtableProj);
        if (kind === "projectile") {
          const entry = handleProjectile(obj, data, functions, globalId, gidStr, isEnemy);
          if (entry) projectiles2.push(entry);
          continue;
        }
        if (kind === "areaEffect") {
          const entry = handleAreaEffect(obj, data, functions, globalId, gidStr, team, isEnemy);
          if (entry) areaEffects.push(entry);
          continue;
        }
        if (kind === "player") {
          const entry = handlePlayer(obj, data, functions, globalId, gidStr, team, isEnemy, own);
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
    scanData.projectiles = projectiles2;
    scanData.areaEffects = areaEffects;
    scanData.lastUpdate = now;
  } catch (_) {
  }
}
function resetScannerCache() {
  _brawlerNameCache.clear();
}
function initScanner(base) {
  _base2 = base;
  try {
    _isBeamFn = new NativeFunction(base.add(offsets.LogicProjectileData__isBeam), "bool", ["pointer"]);
  } catch (_) {
    _isBeamFn = null;
  }
}

// agent/utils/wallCache.js
var g_wall = null;
var g_wallW = 0;
var g_wallH = 0;
var g_builtForPtr = null;
function rebuild(tm) {
  if (!tm || tm.isNull()) return;
  if (g_wall && g_builtForPtr && !g_builtForPtr.isNull() && g_builtForPtr.equals(tm)) return;
  const w = tm.add(offsets.TileMap_Width).readS32();
  const h = tm.add(offsets.TileMap_Height).readS32();
  if (w <= 0 || w > 120 || h <= 0 || h > 120) return;
  const tilesArr = tm.add(offsets.TileMap_TilesArray).readPointer();
  if (tilesArr.isNull()) return;
  const total = w * h;
  if (total <= 0 || total > 14400) return;
  const ps = Process.pointerSize;
  const blkOff = offsets.TileTypeData_BlocksMovement;
  const out = new Uint8Array(total);
  for (let i = 0; i < total; i++) {
    const tile = tilesArr.add(i * ps).readPointer();
    if (tile.isNull()) {
      out[i] = 0;
      continue;
    }
    const ttype = tile.readPointer();
    if (ttype.isNull()) {
      out[i] = 0;
      continue;
    }
    const flags = ttype.add(blkOff).readU16();
    const blocksMove = flags & 255 ? 128 : 0;
    const blocksProj = flags >> 8 & 255 ? 64 : 0;
    out[i] = blocksMove | blocksProj;
  }
  g_wall = out;
  g_wallW = w;
  g_wallH = h;
  g_builtForPtr = tm;
}
function notifyBattleModeChanged(bm) {
  if (!bm || bm.isNull()) return;
  try {
    const tm = getFunctions().LogicBattleModeClient_getTileMap(bm);
    if (tm && !tm.isNull()) rebuild(tm);
  } catch (_) {
  }
}
function getWallCache() {
  return g_wall;
}
function getWallCacheW() {
  return g_wallW;
}
function getWallCacheH() {
  return g_wallH;
}
function losCheck(wx0, wy0, wx1, wy1, checkBit) {
  const wall = g_wall;
  if (!wall) return true;
  const w = g_wallW, h = g_wallH;
  let cx = wx0 / 300 | 0;
  let cy = wy0 / 300 | 0;
  const tx = wx1 / 300 | 0;
  const ty = wy1 / 300 | 0;
  if (cx === tx && cy === ty) return true;
  const dx = Math.abs(tx - cx);
  const dy = -Math.abs(ty - cy);
  const sx = cx < tx ? 1 : -1;
  const sy = cy < ty ? 1 : -1;
  let err = dx + dy;
  const maxSteps = dx + -dy + 2;
  for (let n = 0; n < maxSteps; n++) {
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      cx += sx;
    }
    if (e2 <= dx) {
      err += dx;
      cy += sy;
    }
    if (cx === tx && cy === ty) return true;
    if (cx < 0 || cx >= w || cy < 0 || cy >= h) continue;
    if (wall[cy * w + cx] & checkBit) return false;
  }
  return true;
}

// agent/utils/flags.js
var FLAG_AIMBOT = 1 << 0;
var FLAG_AUTODODGE = 1 << 1;
var FLAG_ESP = 1 << 2;
var FLAG_SPINNER = 1 << 3;
var FLAG_KILLAURA = 1 << 4;
var FLAG_PATHBOT = 1 << 5;
var FLAG_OF = {
  aimbot: FLAG_AIMBOT,
  autododge: FLAG_AUTODODGE,
  esp: FLAG_ESP,
  spinner: FLAG_SPINNER,
  killaura: FLAG_KILLAURA,
  pathbot: FLAG_PATHBOT
};
var _flags = 0;
var state = {
  aimbot: false,
  autododge: false,
  esp: false,
  spinner: false,
  killaura: false,
  pathbot: false
};
function setState(feature, value) {
  if (!(feature in state)) return;
  const v = !!value;
  state[feature] = v;
  const bit = FLAG_OF[feature] | 0;
  if (v) _flags |= bit;
  else _flags &= ~bit;
}
function getState(feature) {
  return !!state[feature];
}
function getFlags() {
  return _flags;
}
function setupSafe(label, fn) {
  try {
    fn();
  } catch (e) {
    try {
      send({ type: "ERROR", code: 2, text: `setup ${label}: ${e && e.message ? e.message : e}` });
    } catch (_) {
    }
  }
}

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
function isLauncher(id, name) {
  return LAUNCHER_IDS.has(id | 0) || name && LAUNCHERS.has(name);
}
var _CHARS_CSV = "csv_logic/characters.csv";
var _SKILLS_CSV = "csv_logic/skills.csv";
var _PROJ_CSV = "csv_logic/projectiles_logic.csv";
var CHAR_COL_ITEM_NAME = 3;
var CHAR_COL_WEAPON_SKILL = 4;
var SKILL_COL_PROJECTILES = 40;
var PROJ_COL_SPEED = 2;
var _csvAttempted = false;
var _csvProjSpeedByName = null;
function _normName(s) {
  if (!s) return null;
  return String(s).toUpperCase().replace(/\s+/g, "_").replace(/-/g, "_").replace(/&/g, "AND");
}
function _safeStr(row, col) {
  try {
    return row.getValueAt(col);
  } catch (_) {
    return null;
  }
}
function _safeInt(row, col) {
  try {
    return row.getIntegerValueAt(col);
  } catch (_) {
    return 0;
  }
}
function _buildIndexByName(table) {
  const map = /* @__PURE__ */ new Map();
  const n = table.getRowCount();
  for (let i = 0; i < n; i++) {
    const row = table.getRowAt(i);
    if (!row) continue;
    const v = _safeStr(row, 0);
    if (v) map.set(v, row);
  }
  return map;
}
function _buildCSVMaps() {
  if (_csvAttempted) return;
  _csvAttempted = true;
  const chars = loadCSV(_CHARS_CSV);
  const skills = loadCSV(_SKILLS_CSV);
  const projs = loadCSV(_PROJ_CSV);
  if (!chars || !skills || !projs) return;
  const skillsByName = _buildIndexByName(skills);
  const projsByName = _buildIndexByName(projs);
  const projMap = /* @__PURE__ */ new Map();
  const n = chars.getRowCount();
  for (let i = 0; i < n; i++) {
    const cRow = chars.getRowAt(i);
    if (!cRow) continue;
    const internal = _normName(_safeStr(cRow, 0));
    if (!internal) continue;
    const itemName = _safeStr(cRow, CHAR_COL_ITEM_NAME);
    const itemKey = itemName ? _normName(itemName) : null;
    const keys = [internal];
    if (itemKey && itemKey !== internal) keys.push(itemKey);
    const weaponName = _safeStr(cRow, CHAR_COL_WEAPON_SKILL);
    if (!weaponName) continue;
    const skRow = skillsByName.get(weaponName);
    if (!skRow) continue;
    const projName = _safeStr(skRow, SKILL_COL_PROJECTILES);
    if (!projName) continue;
    const pRow = projsByName.get(projName);
    if (!pRow) continue;
    const speed = _safeInt(pRow, PROJ_COL_SPEED);
    if (speed > 0) for (const k of keys) projMap.set(k, speed);
  }
  if (projMap.size > 0) _csvProjSpeedByName = projMap;
}
function resolveBrawlerRange(name, id) {
  if (name && RANGE_BY_NAME[name] !== void 0) return RANGE_BY_NAME[name];
  return BRAWLER_RANGE[id | 0] || 0;
}
function resolveBrawlerProjSpeed(name) {
  _buildCSVMaps();
  if (_csvProjSpeedByName && name) return _csvProjSpeedByName.get(name) || 0;
  return 0;
}

// agent/libs/math_aim.js
function estimateTargetVelocity(xArr, yArr, tArr, maxSpeed = 4e3) {
  const empty = {
    vx: 0,
    vy: 0,
    speed: 0,
    confident: false,
    directionChanging: false,
    isJuking: false,
    angularVelocity: 0
  };
  const n = xArr.length;
  if (n < 2 || tArr.length < 1) return empty;
  let vx = 0, vy = 0, tw = 0;
  for (let k = n - 1; k >= 1; k--) {
    const dt = (k - 1 < tArr.length ? tArr[k - 1] : 0) / 1e3;
    if (dt <= 5e-3) continue;
    const w = k;
    vx += (xArr[k] - xArr[k - 1]) / dt * w;
    vy += (yArr[k] - yArr[k - 1]) / dt * w;
    tw += w;
  }
  if (tw > 0) {
    vx /= tw;
    vy /= tw;
  }
  let sp = Math.sqrt(vx * vx + vy * vy);
  if (maxSpeed > 0 && sp > maxSpeed && sp > 1e-3) {
    const s = maxSpeed / sp;
    vx *= s;
    vy *= s;
    sp = Math.sqrt(vx * vx + vy * vy);
  }
  let directionChanging = false;
  let angularVelocity = 0;
  if (n >= 4) {
    const mid = n >> 1;
    let rvx = 0, rvy = 0, rtw = 0;
    for (let k = n - 1; k >= mid; k--) {
      const dt = (k - 1 < tArr.length ? tArr[k - 1] : 0) / 1e3;
      if (dt <= 5e-3) continue;
      const w = k - mid + 1;
      rvx += (xArr[k] - xArr[k - 1]) / dt * w;
      rvy += (yArr[k] - yArr[k - 1]) / dt * w;
      rtw += w;
    }
    let ovx = 0, ovy = 0, otw = 0;
    for (let k = mid; k >= 1; k--) {
      const dt = (k - 1 < tArr.length ? tArr[k - 1] : 0) / 1e3;
      if (dt <= 5e-3) continue;
      const w = mid - k + 1;
      ovx += (xArr[k] - xArr[k - 1]) / dt * w;
      ovy += (yArr[k] - yArr[k - 1]) / dt * w;
      otw += w;
    }
    if (rtw > 0 && otw > 0) {
      rvx /= rtw;
      rvy /= rtw;
      ovx /= otw;
      ovy /= otw;
      const rs = Math.sqrt(rvx * rvx + rvy * rvy);
      const os = Math.sqrt(ovx * ovx + ovy * ovy);
      if (rs > 60 && os > 60) {
        const dot = (rvx * ovx + rvy * ovy) / (rs * os);
        angularVelocity = Math.acos(dot < -1 ? -1 : dot > 1 ? 1 : dot);
        if (dot < 0.55) directionChanging = true;
      }
    }
  }
  return {
    vx,
    vy,
    speed: sp,
    confident: n >= 4,
    directionChanging,
    isJuking: directionChanging,
    angularVelocity
  };
}
function solveIntercept(ownX, ownY, targetX, targetY, targetVel, projSpeed) {
  if (projSpeed <= 0) return { x: targetX, y: targetY, time: 0 };
  let predX = targetX, predY = targetY, tth = 0;
  for (let i = 0; i < 4; i++) {
    const ddx = predX - ownX, ddy = predY - ownY;
    tth = Math.sqrt(ddx * ddx + ddy * ddy) / projSpeed;
    predX = targetX + targetVel.vx * tth;
    predY = targetY + targetVel.vy * tth;
  }
  return { x: predX, y: predY, time: tth };
}

// agent/core/movement.js
var _providers = [];
function registerMovementProvider(provider, priority) {
  _providers.push({ provider, priority: priority | 0 });
  _providers.sort((a, b) => b.priority - a.priority);
}
function _applyMove(self, tx, ty) {
  if (!isFinite(tx) || !isFinite(ty)) return;
  if (Math.abs(tx) > 1e5 || Math.abs(ty) > 1e5) return;
  const fns = getFunctions();
  const logic = fns.BattleScreen_getLogicBattleModeClient(self);
  if (!logic || logic.isNull()) return;
  fns.LogicBattleModeClient_setClientPredictionMoveTo(logic, tx, ty, 1);
  const battle = fns.BattleMode_getInstance();
  if (!battle || battle.isNull()) return;
  const manager = battle.add(offsets.BattleMode_clientInputManager).readPointer();
  if (!manager || manager.isNull()) return;
  const lc = getLibc();
  const ci = lc.malloc(64);
  fns.ClientInput_constructor_int(ci, 2);
  ci.add(offsets.ClientInput_x).writeS32(tx);
  ci.add(offsets.ClientInput_y).writeS32(ty);
  fns.ClientInputManager_addInput(manager, ci);
}
function setupMovementHook(base) {
  Interceptor.attach(base.add(offsets.BattleScreen__updateMovement), {
    onEnter(args) {
      try {
        const self = args[0];
        if (!self || self.isNull()) return;
        for (let i = 0; i < _providers.length; i++) {
          const dest = _providers[i].provider();
          if (!dest) continue;
          _applyMove(self, dest.x, dest.y);
          return;
        }
      } catch (_) {
      }
    }
  });
}

// agent/utils/config.js
var CONFIG = {
  SAFETY_MARGIN: 25,
  MOVING_EXTRA_MARGIN: 20,
  T_URGENT_MIN: 0.45,
  T_URGENT_MAX: 0.7,
  T_FIELD: 1,
  MIN_CLEARANCE: 70,
  MIN_CLEARANCE_RADIUS_FACTOR: 1.15,
  DODGE_COMMIT_MS: 100,
  N_DIRECTIONS: 16,
  N_COARSE_DIRECTIONS: 8,
  STALE_MS: 300,
  PERP_WEIGHT: 2.6,
  AWAY_WEIGHT: 1,
  INTENT_WEIGHT: 1,
  CHAR_SPEED: 720,
  LAG_COMPENSATION_S: 0.03,
  LOCK_DRIFT_MAX: 400,
  IMPACT_SCORE_THRESHOLD: 4e7,
  SPIRAL_SAMPLES: 32,
  STALE_FRAMES_MAX: 5,
  MAX_TRACK_DIST: 5e3,
  PROBE_TIME_S: 0.55,
  PROBE_MIN: 360,
  PROBE_MAX: 820,
  MARGIN_FAST_PROJ_THRESHOLD: 2500,
  MARGIN_FAST_PROJ_GAIN: 0.0125,
  MARGIN_FAST_PROJ_CAP: 30,
  CORNER_WALL_PENALTY: 15e4
};
var CFG = {
  HISTORY_LEN: 10,
  STALE_MS: 1500,
  SHOOT_LAG_S: 0.025,
  BURST_LOCK_MS: 100,
  BURST_LOCK_MAX_DRIFT: 160,
  EMA_ALPHA: 0.4,
  LOS_CACHE_TTL_MS: 100,
  LOS_CACHE_PURGE_MS: 500,
  DEFAULT_PROJ_SPEED: 3e3,
  DEFAULT_MOVE_SPEED: 720,
  STATIONARY_VEL_FLOOR: 30,
  STATIONARY_VEL_RATIO: 0.07,
  SCORE_DIST_WEIGHT: 1,
  SCORE_SPEED_WEIGHT: 0.3,
  SCORE_APPROACH_WEIGHT: 0.4,
  SCORE_FACING_WEIGHT: 0.5,
  UNCONFIDENT_LEAD_SCALE: 0.45,
  JUKING_LEAD_SCALE: 0.35,
  TARGET_STICKY_RATIO: 0.85
};

// agent/features/autododge.js
var _MAX_DIRS = 16;
var _MAX_BATCH = 40;
var _cachedScores = new Float32Array(_MAX_DIRS);
var _batchScores = new Float32Array(_MAX_BATCH);
var _cacheValid = false;
var _burstCandidates = new Array(64);
for (let _i = 0; _i < 64; _i++) _burstCandidates[_i] = { x: 0, y: 0 };
var _burstGroupIds = new Int32Array(128);
var _burstGroupReps = new Int32Array(128);
var BRAWLER_AOE_IMPACT_RADIUS = {
  6: 220,
  9: 240,
  22: 260,
  37: 240,
  40: 180,
  48: 220,
  82: 200
};
var PROJECTILE_OWNER_SNAP_DIST_SQ = 1500 * 1500;
var BURST_WINDOW_MS = 200;
var URGENT_WINDOW_CACHE_MS = 250;
var SPIN_RADIUS = 25;
var SPIN_STEP = Math.PI / 4;
var projectiles = /* @__PURE__ */ new Map();
var lastSafeDir = null;
var lastSafeDirTime = 0;
var g_dodgeUntil = 0;
var _dodgeDir = null;
var _lockOriginX = 0;
var _lockOriginY = 0;
var _spinPhase = 0;
var _lastSyncTime = 0;
var _walkCache = /* @__PURE__ */ new Map();
var _walkCacheTileX = -9999;
var _walkCacheTileY = -9999;
var _cachedUrgentWindow = 0.9;
var _cachedUrgentWindowTs = 0;
var _activeProjs = [];
var _maxProjSpeed = 0;
var _wc = null;
var _wcW = 0;
var _wcH = 0;
var _voCache = new Float32Array(16);
var _voCacheValid = 0;
var _base3 = null;
var _fns = null;
var _isBeamFn2 = null;
var CACHED_DIRECTIONS = [];
function _checkInitDirections() {
  if (CACHED_DIRECTIONS.length === 0 && CONFIG.N_DIRECTIONS > 0) {
    for (let i = 0; i < CONFIG.N_DIRECTIONS; i++) {
      const a = Math.PI * 2 * i / CONFIG.N_DIRECTIONS;
      CACHED_DIRECTIONS.push({ x: Math.cos(a), y: Math.sin(a) });
    }
  }
}
function getDodgeDir() {
  return _dodgeDir;
}
function resetAutododge() {
  projectiles.clear();
  _activeProjs.length = 0;
  _dodgeDir = null;
  g_dodgeUntil = 0;
  _lockOriginX = 0;
  _lockOriginY = 0;
  lastSafeDir = null;
  lastSafeDirTime = 0;
  _walkCache.clear();
  _walkCacheTileX = -9999;
  _walkCacheTileY = -9999;
  _cachedUrgentWindowTs = 0;
  _voCacheValid = 0;
  _spinPhase = 0;
}
function getUrgentWindow() {
  const now = Date.now();
  if (now - _cachedUrgentWindowTs < URGENT_WINDOW_CACHE_MS) return _cachedUrgentWindow;
  const speed = Math.max(420, Math.min(900, CONFIG.CHAR_SPEED || 720));
  const norm = (speed - 420) / 480;
  let base = CONFIG.T_URGENT_MIN + (1 - norm) * (CONFIG.T_URGENT_MAX - CONFIG.T_URGENT_MIN);
  if (_maxProjSpeed > 1800) {
    base += Math.min(0.25, (_maxProjSpeed - 1800) / 1080 * 0.25);
  }
  _cachedUrgentWindow = base;
  _cachedUrgentWindowTs = now;
  return base;
}
function sameDirection(a, b) {
  if (!a || !b) return false;
  return a.x * b.x + a.y * b.y > 0.98;
}
function directionDot(a, b) {
  if (!a || !b) return 0;
  return a.x * b.x + a.y * b.y;
}
function _walkRayClear(wx0, wy0, wx1, wy1) {
  const w = _wcW, h = _wcH;
  let cx = wx0 / 300 | 0, cy = wy0 / 300 | 0;
  const tx1 = wx1 / 300 | 0, ty1 = wy1 / 300 | 0;
  if (cx === tx1 && cy === ty1) return true;
  const dx = Math.abs(tx1 - cx), dy = -Math.abs(ty1 - cy);
  const sx = cx < tx1 ? 1 : -1, sy = cy < ty1 ? 1 : -1;
  let err = dx + dy;
  const maxSteps = dx + -dy + 2;
  for (let n = 0; n < maxSteps; n++) {
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      cx += sx;
    }
    if (e2 <= dx) {
      err += dx;
      cy += sy;
    }
    if (cx === tx1 && cy === ty1) return true;
    if (cx < 0 || cx >= w || cy < 0 || cy >= h) return false;
    if (_wc[cy * w + cx] & 128) return false;
  }
  return true;
}
function isDirectionWalkable(fromX, fromY, dirX, dirY, charRadius) {
  const key = (fromX / 300 | 0) * 1e6 + (fromY / 300 | 0) * 1e3 + (dirX * 8 | 0) * 32 + (dirY * 8 | 0);
  const cached = _walkCache.get(key);
  if (cached !== void 0) return cached;
  if (!_wc) {
    _walkCache.set(key, true);
    return true;
  }
  let probeD = CONFIG.CHAR_SPEED * CONFIG.PROBE_TIME_S;
  if (probeD < CONFIG.PROBE_MIN) probeD = CONFIG.PROBE_MIN;
  else if (probeD > CONFIG.PROBE_MAX) probeD = CONFIG.PROBE_MAX;
  const toX = fromX + dirX * probeD;
  const toY = fromY + dirY * probeD;
  const pr = charRadius * 0.9;
  const perpX = -dirY * pr;
  const perpY = dirX * pr;
  const ok = _walkRayClear(fromX, fromY, toX, toY) && _walkRayClear(fromX + perpX, fromY + perpY, toX + perpX, toY + perpY) && _walkRayClear(fromX - perpX, fromY - perpY, toX - perpX, toY - perpY);
  _walkCache.set(key, ok);
  return ok;
}
function isProjectileBlockedByWall(px, py, tx, ty) {
  return !losCheck(px, py, tx, ty, 64);
}
function timeToImpact(p, myX, myY, myRadius, movingDir, tMax) {
  if (p.losBlocked || p.ignored) return -1;
  const myVx = movingDir.x * CONFIG.CHAR_SPEED;
  const myVy = movingDir.y * CONFIG.CHAR_SPEED;
  const lag = CONFIG.LAG_COMPENSATION_S;
  const isMoving = movingDir.x !== 0 || movingDir.y !== 0;
  const haz = p.impactRadius || p.radius;
  const r = myRadius + haz + CONFIG.SAFETY_MARGIN + (isMoving ? CONFIG.MOVING_EXTRA_MARGIN : 0);
  const px0 = p.x + p._svx * lag;
  const py0 = p.y + p._svy * lag;
  const dx = px0 - myX;
  const dy = py0 - myY;
  if (dx * dx + dy * dy <= r * r) return 0;
  const rvx = p._svx - myVx;
  const rvy = p._svy - myVy;
  const a = rvx * rvx + rvy * rvy;
  if (a < 1e-6) return -1;
  const b = 2 * (dx * rvx + dy * rvy);
  const c = dx * dx + dy * dy - r * r;
  const disc = b * b - 4 * a * c;
  if (disc < 0) return -1;
  const sq = Math.sqrt(disc);
  const t1 = (-b - sq) / (2 * a);
  const t2 = (-b + sq) / (2 * a);
  if (t2 < 0) return -1;
  const t = t1 >= 0 ? t1 : 0;
  if (t > tMax) return -1;
  return t;
}
function isUrgentThreat(p, myX, myY, myRadius, movingDir) {
  return timeToImpact(p, myX, myY, myRadius, movingDir, getUrgentWindow()) >= 0;
}
function getUrgentDodgeDir(myX, myY, myRadius, movingDir, intentDir) {
  const panicT = getClosestImpactTime(myX, myY, myRadius, movingDir, getUrgentWindow());
  let panicScale = 1;
  if (panicT >= 0 && panicT <= 0.12) panicScale = Math.max(0, panicT / 0.12);
  const sIntent = { x: intentDir.x * panicScale, y: intentDir.y * panicScale };
  const n = _activeProjs.length;
  if (n === 0) return null;
  const cap = n > 128 ? 128 : n;
  const ix = sIntent.x * CONFIG.INTENT_WEIGHT;
  const iy = sIntent.y * CONFIG.INTENT_WEIGHT;
  const perpW = CONFIG.PERP_WEIGHT;
  const awayW = CONFIG.AWAY_WEIGHT;
  const maxOut = cap * 2 > _burstCandidates.length ? _burstCandidates.length : cap * 2;
  let numGroups = 0;
  for (let i = 0; i < cap; i++) {
    const p = _activeProjs[i];
    const urgent = isUrgentThreat(p, myX, myY, myRadius, movingDir);
    if (!urgent) {
      _burstGroupIds[i] = -1;
      continue;
    }
    let found = -1;
    for (let g = 0; g < numGroups; g++) {
      const ri = _burstGroupReps[g];
      const r = _activeProjs[ri];
      let match = false;
      if (p.ownerLocked && r.ownerLocked) {
        if (p.ownerBrawlerId === r.ownerBrawlerId && (p.spawnTime / BURST_WINDOW_MS | 0) === (r.spawnTime / BURST_WINDOW_MS | 0)) match = true;
      } else if (p.gid === r.gid) match = true;
      if (match) {
        found = g;
        break;
      }
    }
    if (found === -1) {
      if (numGroups < 128) {
        _burstGroupReps[numGroups] = i;
        _burstGroupIds[i] = numGroups;
        numGroups++;
      } else _burstGroupIds[i] = -1;
    } else _burstGroupIds[i] = found;
  }
  let count = 0;
  for (let g = 0; g < numGroups; g++) {
    let adx = 0, ady = 0, ax = 0, ay = 0, cnt = 0;
    for (let i = 0; i < cap; i++) {
      if (_burstGroupIds[i] !== g) continue;
      const p = _activeProjs[i];
      adx += p.dirX;
      ady += p.dirY;
      ax += p.x;
      ay += p.y;
      cnt++;
    }
    if (cnt === 0) continue;
    adx /= cnt;
    ady /= cnt;
    ax /= cnt;
    ay /= cnt;
    const awx0 = myX - ax, awy0 = myY - ay;
    const awL = Math.sqrt(awx0 * awx0 + awy0 * awy0);
    const awX = awL < 1e-6 ? 1 : awx0 / awL;
    const awY = awL < 1e-6 ? 0 : awy0 / awL;
    const p1L = Math.sqrt(ady * ady + adx * adx);
    const p1x = p1L < 1e-6 ? 1 : -ady / p1L;
    const p1y = p1L < 1e-6 ? 0 : adx / p1L;
    const p2x = -p1x, p2y = -p1y;
    const c1x = p1x * perpW + awX * awayW + ix;
    const c1y = p1y * perpW + awY * awayW + iy;
    const c1L = Math.sqrt(c1x * c1x + c1y * c1y);
    const c2x = p2x * perpW + awX * awayW + ix;
    const c2y = p2y * perpW + awY * awayW + iy;
    const c2L = Math.sqrt(c2x * c2x + c2y * c2y);
    if (count < maxOut) {
      const c = _burstCandidates[count++];
      c.x = c1L < 1e-6 ? 1 : c1x / c1L;
      c.y = c1L < 1e-6 ? 0 : c1y / c1L;
    }
    if (count < maxOut) {
      const c = _burstCandidates[count++];
      c.x = c2L < 1e-6 ? 1 : c2x / c2L;
      c.y = c2L < 1e-6 ? 0 : c2y / c2L;
    }
  }
  if (count <= 0) return null;
  const candidates = count === _burstCandidates.length ? _burstCandidates : _burstCandidates.slice(0, count);
  let bestDir = null;
  let bestScore = Number.POSITIVE_INFINITY;
  const useCached = _cacheValid && sIntent.x === 0 && sIntent.y === 0;
  if (candidates.length > 0) {
    const nBatch = _scoreBatchInto(candidates, myX, myY, myRadius, sIntent, _batchScores);
    for (let i = 0; i < nBatch; i++) {
      const s = _batchScores[i];
      if (s < bestScore) {
        bestScore = s;
        bestDir = candidates[i];
      }
    }
  }
  if (useCached) {
    for (let i = 0; i < CACHED_DIRECTIONS.length; i++) {
      const s = _cachedScores[i];
      if (Number.isFinite(s) && s < bestScore) {
        bestScore = s;
        bestDir = CACHED_DIRECTIONS[i];
      }
    }
  } else {
    const n2 = _scoreBatchInto(CACHED_DIRECTIONS, myX, myY, myRadius, sIntent, _batchScores);
    for (let i = 0; i < n2; i++) {
      const s = _batchScores[i];
      if (s < bestScore) {
        bestScore = s;
        bestDir = CACHED_DIRECTIONS[i];
      }
    }
  }
  if (bestDir === null) return null;
  return { dir: bestDir };
}
function _effectiveMinClearance(myRadius) {
  const v = myRadius * CONFIG.MIN_CLEARANCE_RADIUS_FACTOR;
  return v > CONFIG.MIN_CLEARANCE ? v : CONFIG.MIN_CLEARANCE;
}
function _effectiveMovingMargin() {
  const over = _maxProjSpeed - CONFIG.MARGIN_FAST_PROJ_THRESHOLD;
  if (over <= 0) return CONFIG.MOVING_EXTRA_MARGIN;
  let bonus = over * CONFIG.MARGIN_FAST_PROJ_GAIN;
  if (bonus > CONFIG.MARGIN_FAST_PROJ_CAP) bonus = CONFIG.MARGIN_FAST_PROJ_CAP;
  return CONFIG.MOVING_EXTRA_MARGIN + bonus;
}
function _cornerPenalty(dirX, dirY, myX, myY) {
  if (!_wc) return 0;
  const w = _wcW, h = _wcH;
  const cx = (myX + dirX * 360) / 300 | 0;
  const cy = (myY + dirY * 360) / 300 | 0;
  if (cx <= 0 || cx >= w - 1 || cy <= 0 || cy >= h - 1) return 0;
  let walls = 0;
  if (_wc[cy * w + (cx - 1)] & 128) walls++;
  if (_wc[cy * w + (cx + 1)] & 128) walls++;
  if (_wc[(cy - 1) * w + cx] & 128) walls++;
  if (_wc[(cy + 1) * w + cx] & 128) walls++;
  if (walls < 2) return 0;
  return (walls - 1) * CONFIG.CORNER_WALL_PENALTY;
}
function _thrSingle(dirX, dirY, myX, myY, myRadius, tField, minClear, charSpeed, lag, safety, moveExtra, intentX, intentY, intentW, lsAlive, lsDx, lsDy, lsFactor, unwalkable) {
  let score = 0;
  let closest = -1;
  if (unwalkable) score += 1e12;
  const dirVx = dirX * charSpeed;
  const dirVy = dirY * charSpeed;
  const minClSq = minClear * minClear;
  const isMoving = dirX !== 0 || dirY !== 0 ? 1 : 0;
  const moveOver = isMoving ? moveExtra : 0;
  const projs = _activeProjs;
  const n = projs.length;
  for (let i = 0; i < n; i++) {
    const p = projs[i];
    if (p.ignored) continue;
    let tImpact = -1;
    if (!p.losBlocked) {
      const haz = p.impactRadius || p.radius;
      const rTt = myRadius + haz + safety + moveOver;
      const px0 = p.x + p._svx * lag;
      const py0 = p.y + p._svy * lag;
      const ddx = px0 - myX;
      const ddy = py0 - myY;
      const rTtSq = rTt * rTt;
      const ddSq = ddx * ddx + ddy * ddy;
      if (ddSq <= rTtSq) tImpact = 0;
      else {
        const rvx = p._svx - dirVx;
        const rvy = p._svy - dirVy;
        const a2 = rvx * rvx + rvy * rvy;
        if (a2 >= 1e-6) {
          const b2 = 2 * (ddx * rvx + ddy * rvy);
          const c2 = ddSq - rTtSq;
          const disc = b2 * b2 - 4 * a2 * c2;
          if (disc >= 0) {
            const sq = Math.sqrt(disc);
            const t1 = (-b2 - sq) / (2 * a2);
            const t2 = (-b2 + sq) / (2 * a2);
            if (t2 >= 0) {
              const t = t1 >= 0 ? t1 : 0;
              if (t <= tField) tImpact = t;
            }
          }
        }
      }
    }
    if (tImpact >= 0) {
      if (closest < 0 || tImpact < closest) closest = tImpact;
      score += 4e7 + (tField - tImpact) * 4e7;
      if (tImpact <= 0.12) {
        const awX = myX - p.x;
        const awY = myY - p.y;
        let awL = Math.sqrt(awX * awX + awY * awY);
        if (awL === 0) awL = 1;
        const ha = (dirX * awX + dirY * awY) / awL;
        const pw = 1 + (0.12 - tImpact) / 0.12 * 4;
        score += (1 - ha) * pw * 25e5;
      }
    }
    const r = p._rNoMove;
    const vx = p._svx - dirVx;
    const vy = p._svy - dirVy;
    const dx = p._dx;
    const dy = p._dy;
    const a = vx * vx + vy * vy;
    const b = 2 * (dx * vx + dy * vy);
    const c = dx * dx + dy * dy;
    const rSq = r * r;
    if (a > 1e-6 && c > rSq) {
      const disc = b * b - 4 * a * (c - rSq);
      if (disc < 0) continue;
    }
    let minD2 = c;
    let tMinInf = 0;
    if (a > 1e-6) {
      const tMin = -b / (2 * a);
      tMinInf = tMin;
      if (tMin > 0 && tMin <= tField) minD2 = c + b * tMin + a * tMin * tMin;
      else if (tMin > tField) minD2 = c + b * tField + a * tField * tField;
    }
    let danger = 0;
    if (minD2 < rSq) {
      danger = 2e7 + (rSq - minD2) * 1e3;
    } else {
      const cl = Math.sqrt(minD2) - r;
      if (cl < minClear) {
        const gap = minClear - cl;
        danger = gap * gap * 500 / minClSq;
      }
      let denom = minD2 - rSq;
      if (denom < 1) denom = 1;
      let prox = rSq * 200 / denom;
      if (prox > 1e5) prox = 1e5;
      danger += prox;
      if (tMinInf > tField) {
        const minD2Inf = c + b * tMinInf + a * tMinInf * tMinInf;
        if (minD2Inf < rSq) danger += 2e6;
      }
    }
    const bSpeed = p.speed;
    if (bSpeed > 1) {
      const inv = 1 / bSpeed;
      const dotB = dirX * (p._svx * inv) + dirY * (p._svy * inv);
      if (dotB > 0) {
        const ir = p.impactRadius || p.radius;
        danger += dotB * ir * 200;
      }
    }
    score += danger;
  }
  if (intentX !== 0 || intentY !== 0) {
    const dot = dirX * intentX + dirY * intentY;
    score -= dot * intentW * 30;
  }
  if (lsAlive) {
    const di = dirX * lsDx + dirY * lsDy;
    let f = closest < 0 ? 1 : closest * lsFactor;
    if (f < 0.15) f = 0.15;
    if (f > 1) f = 1;
    score -= di * 10 * f;
  }
  return { score, closest };
}
function _batchParams(myX, myY, myRadius) {
  const lsAlive = lastSafeDir && Date.now() - lastSafeDirTime < 80 ? 1 : 0;
  return {
    tField: CONFIG.T_FIELD,
    minClear: _effectiveMinClearance(myRadius),
    charSpeed: CONFIG.CHAR_SPEED,
    lag: CONFIG.LAG_COMPENSATION_S,
    safety: CONFIG.SAFETY_MARGIN,
    moveExtra: _effectiveMovingMargin(),
    intentW: CONFIG.INTENT_WEIGHT,
    lsAlive,
    lsDx: lsAlive ? lastSafeDir.x : 0,
    lsDy: lsAlive ? lastSafeDir.y : 0,
    lsFactor: 1 / Math.max(getUrgentWindow(), 0.01)
  };
}
function _scoreBatchInto(candidates, myX, myY, myRadius, intentDir, outScores) {
  const n = candidates.length;
  if (n === 0) return 0;
  const cap = n > _MAX_BATCH ? _MAX_BATCH : n;
  const p = _batchParams(myX, myY, myRadius);
  for (let i = 0; i < cap; i++) {
    const d = candidates[i];
    const unwalk = isDirectionWalkable(myX, myY, d.x, d.y, myRadius) ? 0 : 1;
    const r = _thrSingle(
      d.x,
      d.y,
      myX,
      myY,
      myRadius,
      p.tField,
      p.minClear,
      p.charSpeed,
      p.lag,
      p.safety,
      p.moveExtra,
      intentDir.x,
      intentDir.y,
      p.intentW,
      p.lsAlive,
      p.lsDx,
      p.lsDy,
      p.lsFactor,
      unwalk
    );
    outScores[i] = Number.isFinite(r.score) ? r.score + _cornerPenalty(d.x, d.y, myX, myY) : Number.POSITIVE_INFINITY;
  }
  return cap;
}
function _precomputeCachedDirScores(myX, myY, myRadius, intentDir) {
  const n = CACHED_DIRECTIONS.length;
  const p = _batchParams(myX, myY, myRadius);
  let allBad = true;
  for (let i = 0; i < n; i++) {
    const d = CACHED_DIRECTIONS[i];
    const unwalk = isDirectionWalkable(myX, myY, d.x, d.y, myRadius) ? 0 : 1;
    const r = _thrSingle(
      d.x,
      d.y,
      myX,
      myY,
      myRadius,
      p.tField,
      p.minClear,
      p.charSpeed,
      p.lag,
      p.safety,
      p.moveExtra,
      intentDir.x,
      intentDir.y,
      p.intentW,
      p.lsAlive,
      p.lsDx,
      p.lsDy,
      p.lsFactor,
      unwalk
    );
    let v = r.score;
    if (Number.isFinite(v)) {
      v += _cornerPenalty(d.x, d.y, myX, myY);
      allBad = false;
    }
    _cachedScores[i] = v;
  }
  _cacheValid = !allBad;
}
function threatScore(dir, myX, myY, myRadius, intentDir) {
  const unwalk = isDirectionWalkable(myX, myY, dir.x, dir.y, myRadius) ? 0 : 1;
  const p = _batchParams(myX, myY, myRadius);
  const r = _thrSingle(
    dir.x,
    dir.y,
    myX,
    myY,
    myRadius,
    p.tField,
    p.minClear,
    p.charSpeed,
    p.lag,
    p.safety,
    p.moveExtra,
    intentDir.x,
    intentDir.y,
    p.intentW,
    p.lsAlive,
    p.lsDx,
    p.lsDy,
    p.lsFactor,
    unwalk
  );
  const s = r.score;
  if (!Number.isFinite(s)) return Number.POSITIVE_INFINITY;
  return s + _cornerPenalty(dir.x, dir.y, myX, myY);
}
var _spiralBuf = new Array(32);
for (let _i = 0; _i < 32; _i++) _spiralBuf[_i] = { x: 0, y: 0 };
function spiralSearch(myX, myY, myRadius, intentDir) {
  let cx = 0, cy = 0, n = 0;
  const m = _activeProjs.length;
  for (let i = 0; i < m; i++) {
    const p = _activeProjs[i];
    if (p.ignored) continue;
    cx += p.x;
    cy += p.y;
    n++;
  }
  if (n === 0) return null;
  cx /= n;
  cy /= n;
  const awX = myX - cx, awY = myY - cy;
  if (awX * awX + awY * awY < 1e-6) return null;
  const baseAngle = Math.atan2(awY, awX);
  const SAMPLES = CONFIG.SPIRAL_SAMPLES;
  const STEP = Math.PI / SAMPLES;
  const cap = SAMPLES > _spiralBuf.length ? _spiralBuf.length : SAMPLES;
  for (let i = 0; i < cap; i++) {
    const half = i + 1 >> 1;
    const sign = i & 1 ? -1 : 1;
    const angle = baseAngle + sign * half * STEP;
    const d = _spiralBuf[i];
    d.x = Math.cos(angle);
    d.y = Math.sin(angle);
  }
  const arr = cap === _spiralBuf.length ? _spiralBuf : _spiralBuf.slice(0, cap);
  const got = _scoreBatchInto(arr, myX, myY, myRadius, intentDir, _batchScores);
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;
  for (let i = 0; i < got; i++) {
    const s = _batchScores[i];
    if (s < bestScore) {
      bestScore = s;
      best = arr[i];
    }
  }
  if (!best) return null;
  return { dir: { x: best.x, y: best.y }, score: bestScore };
}
function chooseBestDirection(myX, myY, myRadius, intentDir) {
  const samples = CACHED_DIRECTIONS;
  if (samples.length === 0) {
    return { dir: intentDir.x !== 0 || intentDir.y !== 0 ? intentDir : { x: 1, y: 0 }, invalid: true };
  }
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestIdx = 0;
  const step = Math.max(1, samples.length / CONFIG.N_COARSE_DIRECTIONS | 0);
  for (let i = 0; i < samples.length; i += step) {
    const raw = _cacheValid ? _cachedScores[i] : threatScore(samples[i], myX, myY, myRadius, intentDir);
    if (!Number.isFinite(raw)) continue;
    if (raw < bestScore) {
      bestScore = raw;
      best = samples[i];
      bestIdx = i;
    }
  }
  for (let off = -2; off <= 2; off++) {
    if (off === 0) continue;
    const idx = (bestIdx + off + samples.length) % samples.length;
    const raw = _cacheValid ? _cachedScores[idx] : threatScore(samples[idx], myX, myY, myRadius, intentDir);
    if (!Number.isFinite(raw)) continue;
    if (raw < bestScore) {
      bestScore = raw;
      best = samples[idx];
    }
  }
  if (best === null) {
    return { dir: intentDir.x !== 0 || intentDir.y !== 0 ? intentDir : samples[0], invalid: true };
  }
  if (bestScore >= CONFIG.IMPACT_SCORE_THRESHOLD) {
    const spiral = spiralSearch(myX, myY, myRadius, intentDir);
    if (spiral && spiral.score < bestScore) best = spiral.dir;
  }
  return { dir: best };
}
function isVelocityUnsafeIdx(idx, dir, myX, myY, myRadius) {
  if (idx >= 0 && _voCacheValid & 1 << idx) return _voCache[idx] > 0;
  const unsafe = isVelocityUnsafeCompute(dir, myX, myY, myRadius);
  if (idx >= 0) {
    _voCache[idx] = unsafe ? 1 : 0;
    _voCacheValid |= 1 << idx;
  }
  return unsafe;
}
function isVelocityUnsafeCompute(dir, myX, myY, myRadius) {
  if (!isDirectionWalkable(myX, myY, dir.x, dir.y, myRadius)) return true;
  const dirVx = dir.x * CONFIG.CHAR_SPEED;
  const dirVy = dir.y * CONFIG.CHAR_SPEED;
  const T_FIELD = CONFIG.T_FIELD;
  const n = _activeProjs.length;
  for (let i = 0; i < n; i++) {
    const p = _activeProjs[i];
    if (p.ignored) continue;
    const r = p._rNoMove;
    const vx = p._svx - dirVx;
    const vy = p._svy - dirVy;
    const dx = p._dx;
    const dy = p._dy;
    const a = vx * vx + vy * vy;
    const b = 2 * (dx * vx + dy * vy);
    const c = dx * dx + dy * dy - r * r;
    if (c < 0) return true;
    if (a > 1e-6) {
      const disc = b * b - 4 * a * c;
      if (disc >= 0) {
        const t1 = (-b - Math.sqrt(disc)) / (2 * a);
        if (t1 > 0 && t1 <= T_FIELD) return true;
      }
    }
  }
  return false;
}
function applyVO(dir, dirIdx, myX, myY, myRadius, intentDir) {
  if (!isVelocityUnsafeIdx(dirIdx, dir, myX, myY, myRadius)) return { dir };
  const samples = CACHED_DIRECTIONS;
  let best = dir;
  let bestScore = 1e18;
  let foundSafe = false;
  for (let i = 0; i < samples.length; i++) {
    if (isVelocityUnsafeIdx(i, samples[i], myX, myY, myRadius)) continue;
    foundSafe = true;
    const s = _cacheValid ? _cachedScores[i] : threatScore(samples[i], myX, myY, myRadius, intentDir);
    if (s < bestScore) {
      bestScore = s;
      best = samples[i];
    }
  }
  if (!foundSafe) return { dir };
  return { dir: best };
}
function getClosestImpactTime(myX, myY, myRadius, movingDir, tMax) {
  let bestT = -1;
  const n = _activeProjs.length;
  for (let i = 0; i < n; i++) {
    const p = _activeProjs[i];
    const t = timeToImpact(p, myX, myY, myRadius, movingDir, tMax);
    if (t < 0) continue;
    if (bestT < 0 || t < bestT) bestT = t;
  }
  return bestT;
}
var _pairBuf = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
function shouldKeepCurrentUrgentDodge(curr, next, myX, myY, myRadius, intentDir) {
  if (!curr || !next) return false;
  if (!isDirectionWalkable(myX, myY, curr.x, curr.y, myRadius)) return false;
  const dot = directionDot(curr, next);
  if (dot > 0.25) return false;
  if (sameDirection(curr, next)) return false;
  const uw = getUrgentWindow();
  const cI = getClosestImpactTime(myX, myY, myRadius, curr, uw);
  const nI = getClosestImpactTime(myX, myY, myRadius, next, uw);
  if (cI >= 0 && cI <= 0.1) {
    if (nI < 0) return false;
    if (nI >= cI + 0.08) return false;
    return true;
  }
  _pairBuf[0].x = curr.x;
  _pairBuf[0].y = curr.y;
  _pairBuf[1].x = next.x;
  _pairBuf[1].y = next.y;
  _scoreBatchInto(_pairBuf, myX, myY, myRadius, intentDir, _batchScores);
  return _batchScores[0] <= _batchScores[1] * 1.15;
}
var _zeroDir = { x: 0, y: 0 };
var CONVERGENCE_BRAWLERS = /* @__PURE__ */ new Set([
  "NANI"
]);
var IGNORED_BRAWLERS = /* @__PURE__ */ new Set([
  "EL_PRIMO",
  "MORTIS",
  "ROSA",
  "BIBI",
  "JACKY",
  "EDGAR",
  "BUZZ",
  "FANG",
  "SAM",
  "HANK",
  "DOUG",
  "MICO",
  "KIT",
  "DRACO",
  "LILY",
  "BULL",
  "DARRYL",
  "FRANK",
  "ASH",
  "BARLEY",
  "DYNAMIKE",
  "TICK",
  "SPROUT",
  "GROM",
  "WILLOW",
  "SQUEAK",
  "JUJU",
  "POCO",
  "EMZ",
  "SHADE",
  "KAZE",
  "ALLI",
  "TRUNK",
  "GIGI"
]);
function _isIgnoredProjectile(brawlerName, isBeam) {
  if (isBeam) return true;
  return brawlerName ? IGNORED_BRAWLERS.has(brawlerName) : false;
}
function resolveImpactRadius(radius, speed, ownerBrawlerId) {
  if (ownerBrawlerId) {
    const aoe = BRAWLER_AOE_IMPACT_RADIUS[ownerBrawlerId];
    if (aoe) return Math.max(radius, aoe);
  }
  if (radius > 0) {
    if (speed > 0 && speed < 1200 && radius < 120) return Math.min(220, radius * 2.25);
    return radius * 1.1;
  }
  if (speed <= 800) return 550;
  if (speed >= 1400 && speed <= 1600) return 350;
  return 220;
}
function inferProjectileOwner(x, y, enemies) {
  if (!enemies || enemies.length === 0) return null;
  let best = null;
  let bestD = PROJECTILE_OWNER_SNAP_DIST_SQ;
  for (let i = 0; i < enemies.length; i++) {
    const en = enemies[i];
    const dx = x - en.x, dy = y - en.y, d2 = dx * dx + dy * dy;
    if (d2 > bestD) continue;
    bestD = d2;
    best = en;
  }
  return best ? { brawlerId: best.brawlerId, brawlerName: best.brawlerName || null, x: best.x, y: best.y } : null;
}
function _initFromCtor(projPtr) {
  if (!projPtr || projPtr.isNull() || !_base3 || !_fns) return;
  try {
    if (scanData.lastUpdate > 0) {
      try {
        const team = projPtr.add(offsets.GameObj_team).readU32();
        if (team === scanData.myTeamId) return;
      } catch (_) {
      }
    }
    const data = _fns.LogicGameObjectClient_getData(projPtr);
    if (!data || data.isNull()) return;
    const vt = data.readPointer();
    if (!vt.equals(_base3.add(offsets.VTABLE_PROJECTILE_DATA))) return;
    const gid = _fns.LogicGameObjectClient_getGlobalID(projPtr).toString();
    if (projectiles.has(gid)) return;
    const speed = _fns.LogicProjectileData_getSpeed(data) || 1200;
    const radius = _fns.LogicProjectileData_getRadius(data) || 8;
    const sx = _fns.LogicGameObjectClient_getX(projPtr) | 0;
    const sy = _fns.LogicGameObjectClient_getY(projPtr) | 0;
    const owner = inferProjectileOwner(sx, sy, scanData.enemies);
    const ownerBrawlerId = owner ? owner.brawlerId : 0;
    const ownerName = owner ? owner.brawlerName || null : null;
    let dirX = 0, dirY = 0, unconfirmed = true;
    try {
      const rawAng = projPtr.add(offsets.Projectile_spawnAngle).readFloat();
      if (isFinite(rawAng) && rawAng !== 0) {
        dirX = Math.cos(rawAng);
        dirY = Math.sin(rawAng);
        unconfirmed = false;
      }
    } catch (_) {
    }
    if (unconfirmed && owner) {
      const ddx = sx - owner.x;
      const ddy = sy - owner.y;
      const len = Math.sqrt(ddx * ddx + ddy * ddy);
      if (len > 1) {
        dirX = ddx / len;
        dirY = ddy / len;
      }
    }
    let isBeam = false;
    try {
      if (_isBeamFn2) isBeam = !!_isBeamFn2(data);
    } catch (_) {
    }
    const ignoredType = _isIgnoredProjectile(ownerName, isBeam);
    const now = Date.now();
    projectiles.set(gid, {
      addr: projPtr,
      gid,
      x: sx,
      y: sy,
      dirX,
      dirY,
      speed,
      radius,
      impactRadius: resolveImpactRadius(radius, speed, ownerBrawlerId),
      lastX: sx,
      lastY: sy,
      lastSeen: now,
      staleFrames: 0,
      unconfirmed,
      ownerBrawlerId,
      ownerBrawlerName: ownerName,
      spawnTime: now,
      ownerLocked: !!owner,
      ignored: ignoredType,
      losBlocked: false,
      losMyTileX: -9999,
      losMyTileY: -9999,
      losProjTileX: -9999,
      losProjTileY: -9999,
      _svx: 0,
      _svy: 0,
      _dx: 0,
      _dy: 0,
      _rNoMove: 0
    });
  } catch (_) {
  }
}
function _createFromScan(sp, now) {
  const owner = inferProjectileOwner(sp.x, sp.y, scanData.enemies);
  const ownerBrawlerId = owner ? owner.brawlerId : 0;
  const ownerName = owner ? owner.brawlerName || null : null;
  let dirX = 0, dirY = 0, unconfirmed = true;
  const ang = sp.spawnAngle;
  if (ang !== null && ang !== void 0 && isFinite(ang) && ang !== 0) {
    dirX = Math.cos(ang);
    dirY = Math.sin(ang);
    unconfirmed = false;
  }
  if (unconfirmed && owner) {
    const ddx = sp.x - owner.x;
    const ddy = sp.y - owner.y;
    const len = Math.sqrt(ddx * ddx + ddy * ddy);
    if (len > 1) {
      dirX = ddx / len;
      dirY = ddy / len;
    }
  }
  const ignoredType = _isIgnoredProjectile(ownerName, !!sp.isBeam);
  projectiles.set(sp.gid, {
    gid: sp.gid,
    x: sp.x,
    y: sp.y,
    dirX,
    dirY,
    speed: sp.speed,
    radius: sp.radius,
    impactRadius: resolveImpactRadius(sp.radius, sp.speed, ownerBrawlerId),
    lastX: sp.x,
    lastY: sp.y,
    lastSeen: now,
    unconfirmed,
    ownerBrawlerId,
    ownerBrawlerName: ownerName,
    spawnTime: now,
    ownerLocked: !!owner,
    ignored: ignoredType,
    losBlocked: false,
    losMyTileX: -9999,
    losMyTileY: -9999,
    losProjTileX: -9999,
    losProjTileY: -9999,
    _svx: 0,
    _svy: 0,
    _dx: 0,
    _dy: 0,
    _rNoMove: 0
  });
}
function syncProjectiles(now) {
  if (now === _lastSyncTime) return;
  _lastSyncTime = now;
  const charX = scanData.myX, charY = scanData.myY;
  const maxD2 = CONFIG.MAX_TRACK_DIST * CONFIG.MAX_TRACK_DIST;
  const staleMax = CONFIG.STALE_FRAMES_MAX;
  let scanByGid = null;
  const enemies = scanData.enemies;
  for (let i = 0; i < enemies.length; i++) {
    if (CONVERGENCE_BRAWLERS.has(enemies[i].brawlerName)) {
      const scanProj = scanData.projectiles;
      scanByGid = /* @__PURE__ */ new Map();
      for (let j = 0; j < scanProj.length; j++) scanByGid.set(scanProj[j].gid, scanProj[j]);
      break;
    }
  }
  for (const [gid, pr] of projectiles) {
    let nx, ny, spRef = null;
    if (pr.addr) {
      try {
        nx = _fns.LogicGameObjectClient_getX(pr.addr) | 0;
        ny = _fns.LogicGameObjectClient_getY(pr.addr) | 0;
      } catch (_) {
        projectiles.delete(gid);
        continue;
      }
    } else if (scanByGid) {
      spRef = scanByGid.get(gid);
      if (!spRef) {
        if (now - pr.lastSeen > CONFIG.STALE_MS) projectiles.delete(gid);
        continue;
      }
      nx = spRef.x;
      ny = spRef.y;
    } else {
      if (now - pr.lastSeen > CONFIG.STALE_MS) projectiles.delete(gid);
      continue;
    }
    const ddx = nx - charX, ddy = ny - charY;
    if (ddx * ddx + ddy * ddy > maxD2) {
      projectiles.delete(gid);
      continue;
    }
    const dx = nx - pr.lastX, dy = ny - pr.lastY;
    const moved2 = dx * dx + dy * dy;
    if (moved2 < 25) {
      if (pr.addr) {
        pr.staleFrames = (pr.staleFrames || 0) + 1;
        if (pr.staleFrames > staleMax) {
          projectiles.delete(gid);
          continue;
        }
      }
    } else {
      if (pr.addr) pr.staleFrames = 0;
      const inv = 1 / Math.sqrt(moved2);
      pr.dirX = dx * inv;
      pr.dirY = dy * inv;
      pr.unconfirmed = false;
      if (!pr.ownerLocked) {
        const owner = inferProjectileOwner(nx, ny, enemies);
        if (owner) {
          pr.ownerLocked = true;
          pr.ownerBrawlerId = owner.brawlerId;
          pr.ownerBrawlerName = owner.brawlerName || null;
          const sRad = spRef ? spRef.radius : pr.radius;
          const sSpd = spRef ? spRef.speed : pr.speed;
          pr.impactRadius = resolveImpactRadius(sRad, sSpd, owner.brawlerId);
          pr.ignored = _isIgnoredProjectile(pr.ownerBrawlerName, spRef ? !!spRef.isBeam : false);
        }
      }
    }
    pr.x = nx;
    pr.y = ny;
    pr.lastX = nx;
    pr.lastY = ny;
    pr.lastSeen = now;
  }
  if (scanByGid) {
    for (const sp of scanByGid.values()) {
      if (projectiles.has(sp.gid)) continue;
      const ddx = sp.x - charX, ddy = sp.y - charY;
      if (ddx * ddx + ddy * ddy > maxD2) continue;
      _createFromScan(sp, now);
    }
  }
}
function buildActiveList(myX, myY, myRadius, tileX, tileY) {
  _activeProjs.length = 0;
  _maxProjSpeed = 0;
  const safetyR = myRadius + CONFIG.SAFETY_MARGIN;
  for (const p of projectiles.values()) {
    const ptx = p.x / 300 | 0;
    const pty = p.y / 300 | 0;
    if (p.losMyTileX !== tileX || p.losMyTileY !== tileY || p.losProjTileX !== ptx || p.losProjTileY !== pty) {
      p.losBlocked = isProjectileBlockedByWall(p.x, p.y, myX, myY);
      p.losMyTileX = tileX;
      p.losMyTileY = tileY;
      p.losProjTileX = ptx;
      p.losProjTileY = pty;
    }
    if (p.unconfirmed) continue;
    p._svx = p.dirX * p.speed;
    p._svy = p.dirY * p.speed;
    p._dx = p.x - myX;
    p._dy = p.y - myY;
    p._rNoMove = safetyR + (p.impactRadius || p.radius);
    if (!p.ignored && p.speed > _maxProjSpeed) _maxProjSpeed = p.speed;
    _activeProjs.push(p);
  }
}
function updateAutododge() {
  if (!state.autododge) return;
  _checkInitDirections();
  if (scanData.lastUpdate === 0) return;
  const now = Date.now();
  const myX = scanData.myX, myY = scanData.myY;
  const myRadius = scanData.myRadius || 60;
  _wc = getWallCache();
  _wcW = getWallCacheW();
  _wcH = getWallCacheH();
  _voCacheValid = 0;
  const tileX = myX / 300 | 0;
  const tileY = myY / 300 | 0;
  if (tileX !== _walkCacheTileX || tileY !== _walkCacheTileY) {
    _walkCache.clear();
    _walkCacheTileX = tileX;
    _walkCacheTileY = tileY;
  }
  CONFIG.CHAR_SPEED = scanData.mySpeed;
  syncProjectiles(now);
  buildActiveList(myX, myY, myRadius, tileX, tileY);
  _cacheValid = false;
  _precomputeCachedDirScores(myX, myY, myRadius, _zeroDir);
  const intentDir = _zeroDir;
  let heldDodgeDir = null;
  if (_dodgeDir) {
    if (isDirectionWalkable(myX, myY, _dodgeDir.x, _dodgeDir.y, myRadius) && !isVelocityUnsafeIdx(-1, _dodgeDir, myX, myY, myRadius)) {
      heldDodgeDir = _dodgeDir;
    }
  }
  if (_dodgeDir && now < g_dodgeUntil) {
    const ddx = myX - _lockOriginX;
    const ddy = myY - _lockOriginY;
    const dmax = CONFIG.LOCK_DRIFT_MAX;
    if (ddx * ddx + ddy * ddy > dmax * dmax) g_dodgeUntil = now;
  }
  const commit = !!_dodgeDir && now < g_dodgeUntil;
  const movingDir = heldDodgeDir || (commit ? _dodgeDir : _zeroDir);
  const mustDodge = getClosestImpactTime(myX, myY, myRadius, _zeroDir, getUrgentWindow()) >= 0;
  if (!mustDodge) {
    _dodgeDir = null;
    return;
  }
  let safeDir = heldDodgeDir;
  const prevDir = _dodgeDir;
  if (!safeDir) {
    const urg = getUrgentDodgeDir(myX, myY, myRadius, movingDir, intentDir);
    if (urg) {
      safeDir = applyVO(urg.dir, -1, myX, myY, myRadius, intentDir).dir;
    } else {
      const choice = chooseBestDirection(myX, myY, myRadius, intentDir);
      if (choice.invalid) {
        _dodgeDir = null;
        return;
      }
      safeDir = applyVO(choice.dir, -1, myX, myY, myRadius, intentDir).dir;
    }
    if (shouldKeepCurrentUrgentDodge(prevDir, safeDir, myX, myY, myRadius, intentDir)) safeDir = prevDir;
  }
  lastSafeDir = safeDir;
  lastSafeDirTime = now;
  _dodgeDir = safeDir;
  if (!sameDirection(prevDir, safeDir)) {
    g_dodgeUntil = now + CONFIG.DODGE_COMMIT_MS;
    _lockOriginX = myX;
    _lockOriginY = myY;
  }
}
function setupAutododge(base) {
  _base3 = base;
  _fns = getFunctions();
  _checkInitDirections();
  try {
    _isBeamFn2 = new NativeFunction(base.add(offsets.LogicProjectileData__isBeam), "bool", ["pointer"]);
  } catch (_) {
    _isBeamFn2 = null;
  }
  Interceptor.attach(base.add(offsets.Projectile_ctor), {
    onEnter: function(args) {
      this._proj = args[1];
    },
    onLeave: function() {
      _initFromCtor(this._proj);
    }
  });
  registerMovementProvider(function() {
    if (state.autododge && _dodgeDir) {
      const d = _dodgeDir;
      if (!isFinite(d.x) || !isFinite(d.y)) return null;
      return {
        x: Math.round(scanData.myX + d.x * 500),
        y: Math.round(scanData.myY + d.y * 500)
      };
    }
    if (state.spinner) {
      _spinPhase += SPIN_STEP;
      if (_spinPhase >= Math.PI * 2) _spinPhase -= Math.PI * 2;
      return {
        x: Math.round(scanData.myX + Math.cos(_spinPhase) * SPIN_RADIUS),
        y: Math.round(scanData.myY + Math.sin(_spinPhase) * SPIN_RADIUS)
      };
    }
    return null;
  }, 100);
}

// agent/features/aimbot.js
var targets = /* @__PURE__ */ new Map();
var bestTargetId = null;
var _lastCleanupTs = 0;
var _burstLockPos = null;
var _burstLockUntil = 0;
var _burstLockTargetId = null;
var _burstLockTgtX = null;
var _burstLockTgtY = null;
var _losCache = /* @__PURE__ */ new Map();
function pickBestTarget(enemies, myX, myY, prevGid) {
  const wDist = CFG.SCORE_DIST_WEIGHT;
  const wSpeed = CFG.SCORE_SPEED_WEIGHT;
  const wApproach = CFG.SCORE_APPROACH_WEIGHT;
  const wFacing = CFG.SCORE_FACING_WEIGHT;
  const sticky = CFG.TARGET_STICKY_RATIO;
  const statFloor = CFG.STATIONARY_VEL_FLOOR;
  const statRatio = CFG.STATIONARY_VEL_RATIO;
  const defMove = CFG.DEFAULT_MOVE_SPEED;
  let bestGid = 0;
  let bestScore = 1e18;
  let prevScore = 1e18;
  let prevFound = false;
  const n = enemies.length;
  for (let i = 0; i < n; i++) {
    const e = enemies[i];
    if (!e.losClear) continue;
    const vx = e.vxEma;
    const vy = e.vyEma;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const dx = e.x - myX;
    const dy = e.y - myY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const invD = 1 / (dist + 1e-6);
    const approach = -(dx * vx + dy * vy) * invD;
    let facing = 0;
    const move = e.moveSpeed > 0 ? e.moveSpeed : defMove;
    const thr = statFloor > move * statRatio ? statFloor : move * statRatio;
    if (speed > thr) {
      const maxSp = speed > 1 ? speed : 1;
      facing = (-dx * vx - dy * vy) * invD / maxSp;
    }
    const score = dist * wDist - speed * wSpeed - approach * wApproach - facing * wFacing * dist;
    const gidInt = e.gidInt;
    if (prevGid !== 0 && gidInt === prevGid) {
      prevScore = score;
      prevFound = true;
    }
    if (score < bestScore) {
      bestScore = score;
      bestGid = gidInt;
    }
  }
  if (prevFound && bestGid !== prevGid && prevScore <= bestScore / sticky) {
    bestGid = prevGid;
  }
  return bestGid;
}
var _sharedBattleScreen = null;
var _sharedBattleScreenTs = 0;
function getSharedBattleScreen() {
  return _sharedBattleScreen;
}
function getSharedBattleScreenTs() {
  return _sharedBattleScreenTs;
}
function getBestTargetId() {
  return bestTargetId;
}
function resetAimbot() {
  targets.clear();
  bestTargetId = null;
  _lastCleanupTs = 0;
  _burstLockPos = null;
  _burstLockUntil = 0;
  _burstLockTargetId = null;
  _burstLockTgtX = null;
  _burstLockTgtY = null;
  _losCache.clear();
  _sharedBattleScreen = null;
  _sharedBattleScreenTs = 0;
  _projSpeedCache.brawlerId = -1;
  _projSpeedCache.speed = 0;
}
function RingBuf(max) {
  this.d = [];
  this.max = max;
}
RingBuf.prototype.push = function(v) {
  this.d.push(v);
  if (this.d.length > this.max) this.d.shift();
};
function hasLineOfSight(x0, y0, x1, y1) {
  const tx0 = x0 / 300 | 0, ty0 = y0 / 300 | 0;
  const tx1 = x1 / 300 | 0, ty1 = y1 / 300 | 0;
  const key = (tx0 & 127) << 21 | (ty0 & 127) << 14 | (tx1 & 127) << 7 | ty1 & 127 | 0;
  const now = Date.now();
  const cached = _losCache.get(key);
  if (cached !== void 0 && now - cached.ts < CFG.LOS_CACHE_TTL_MS) return cached.v;
  const v = losCheck(x0, y0, x1, y1, 64);
  _losCache.set(key, { v, ts: now });
  return v;
}
var _projSpeedCache = { brawlerId: -1, speed: 0 };
function _readOwnProjSpeedRuntime() {
  try {
    const own = scanData.ownCharacter;
    if (!own || own.isNull()) return 0;
    const fns = getFunctions();
    const skill = fns.LogicCharacterClient_getWeaponSkill(own);
    if (!skill || skill.isNull()) return 0;
    const projData = fns.getProjData(skill);
    if (!projData || projData.isNull()) return 0;
    const speed = fns.LogicProjectileData_getSpeed(projData);
    if (speed >= 500 && speed <= 15e3) return speed >>> 0;
  } catch (_) {
  }
  return 0;
}
var _DEFAULT_PROJ_SPEED = 3e3;
function resolveProjSpeed() {
  const bid = scanData.myBrawlerId | 0;
  if (bid === _projSpeedCache.brawlerId && _projSpeedCache.speed > 0) {
    return _projSpeedCache.speed;
  }
  let s = _readOwnProjSpeedRuntime();
  if (!s) s = resolveBrawlerProjSpeed(scanData.myBrawlerName);
  if (s > 0) {
    _projSpeedCache.brawlerId = bid;
    _projSpeedCache.speed = s;
    return s;
  }
  return _DEFAULT_PROJ_SPEED;
}
function computeAimForTarget(targetId, ownX, ownY) {
  const tgt = targets.get(targetId);
  if (!tgt || tgt.histX.d.length < 2) return null;
  const projSpeed = resolveProjSpeed();
  if (projSpeed <= 0) return null;
  const rawVel = tgt._velCached || estimateTargetVelocity(tgt.histX.d, tgt.histY.d, tgt.histT.d);
  let scale = 1;
  if (rawVel.directionChanging) scale = CFG.JUKING_LEAD_SCALE;
  else if (!rawVel.confident) scale = CFG.UNCONFIDENT_LEAD_SCALE;
  const targetVel = scale === 1 ? rawVel : {
    vx: rawVel.vx * scale,
    vy: rawVel.vy * scale,
    speed: rawVel.speed * scale,
    confident: rawVel.confident,
    directionChanging: rawVel.directionChanging
  };
  const intercept = solveIntercept(ownX, ownY, tgt.x, tgt.y, targetVel, projSpeed);
  if (!isFinite(intercept.x) || !isFinite(intercept.y)) return null;
  return { x: Math.round(intercept.x), y: Math.round(intercept.y), mode: "PREDICT_LINEAR" };
}
function setupAimbot(base) {
  Interceptor.attach(base.add(offsets.BattleScreen__updateAutoshoot), {
    onEnter: function(args) {
      _sharedBattleScreen = args[0];
      _sharedBattleScreenTs = Date.now();
    }
  });
  Interceptor.attach(base.add(offsets.BattleScreen_activateSkill), {
    onEnter: function(args) {
      if (!state.aimbot) return;
      if (scanData.lastUpdate === 0) return;
      const enemyId = bestTargetId;
      if (!enemyId || !targets.has(enemyId)) return;
      const nowMs = Date.now();
      if (_burstLockPos && _burstLockTargetId === enemyId && nowMs < _burstLockUntil) {
        const tgtNow = targets.get(enemyId);
        let drifted = false;
        if (tgtNow && _burstLockTgtX !== null) {
          const ddx = tgtNow.x - _burstLockTgtX;
          const ddy = tgtNow.y - _burstLockTgtY;
          if (ddx * ddx + ddy * ddy > CFG.BURST_LOCK_MAX_DRIFT * CFG.BURST_LOCK_MAX_DRIFT) drifted = true;
        }
        if (!drifted) {
          try {
            args[1] = ptr(_burstLockPos.x);
            args[2] = ptr(_burstLockPos.y);
          } catch (_) {
          }
          return;
        }
      }
      const dodge = getDodgeDir();
      const mySpd = scanData.mySpeed || CFG.DEFAULT_MOVE_SPEED;
      const effectMyX = scanData.myX + (dodge ? dodge.x * mySpd * CFG.SHOOT_LAG_S : 0);
      const effectMyY = scanData.myY + (dodge ? dodge.y * mySpd * CFG.SHOOT_LAG_S : 0);
      const aim = computeAimForTarget(enemyId, effectMyX, effectMyY);
      if (!aim) return;
      if (!isLauncher(scanData.myBrawlerId, scanData.myBrawlerName) && !hasLineOfSight(scanData.myX, scanData.myY, aim.x, aim.y)) return;
      _burstLockPos = aim;
      _burstLockTargetId = enemyId;
      _burstLockUntil = nowMs + CFG.BURST_LOCK_MS;
      const lockTgt = targets.get(enemyId);
      if (lockTgt) {
        _burstLockTgtX = lockTgt.x;
        _burstLockTgtY = lockTgt.y;
      }
      try {
        args[1] = ptr(aim.x);
        args[2] = ptr(aim.y);
      } catch (_) {
      }
    }
  });
}
function updateAimbot(now) {
  if (!state.aimbot && !state.killaura || scanData.lastUpdate === 0) return;
  const myX = scanData.myX, myY = scanData.myY;
  if (now === void 0) now = Date.now();
  const prevTargetId = bestTargetId;
  bestTargetId = null;
  const enemies = scanData.enemies || [];
  const activeEnemies = [];
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    if (!enemy.brawlerName) continue;
    if (enemy.teamId === scanData.myTeamId) continue;
    const gid = enemy.gid;
    let t = targets.get(gid);
    if (!t) {
      t = {
        histX: new RingBuf(CFG.HISTORY_LEN),
        histY: new RingBuf(CFG.HISTORY_LEN),
        histT: new RingBuf(CFG.HISTORY_LEN - 1),
        lastUpdate: now,
        x: enemy.x,
        y: enemy.y,
        brawlerId: enemy.brawlerId,
        emaVx: 0,
        emaVy: 0,
        moveSpeed: enemy.moveSpeed || CFG.DEFAULT_MOVE_SPEED
      };
      targets.set(gid, t);
    }
    const dt = now - t.lastUpdate;
    if (dt > 0 && dt < 300) {
      const invDt = 1e3 / dt;
      const rawVx = (enemy.x - t.x) * invDt;
      const rawVy = (enemy.y - t.y) * invDt;
      const alpha = Math.min(CFG.EMA_ALPHA, dt / 80);
      const oneMinus = 1 - alpha;
      t.emaVx = t.emaVx * oneMinus + rawVx * alpha;
      t.emaVy = t.emaVy * oneMinus + rawVy * alpha;
    }
    t.x = enemy.x;
    t.y = enemy.y;
    t.brawlerId = enemy.brawlerId;
    if (enemy.moveSpeed > 0) t.moveSpeed = enemy.moveSpeed;
    t.histX.push(enemy.x);
    t.histY.push(enemy.y);
    if (dt > 0 && dt < 2e3) t.histT.push(dt);
    t.lastUpdate = now;
    const targetVel = estimateTargetVelocity(t.histX.d, t.histY.d, t.histT.d);
    t._velCached = targetVel;
    const losClear = isLauncher(scanData.myBrawlerId, scanData.myBrawlerName) || hasLineOfSight(myX, myY, enemy.x, enemy.y) ? 1 : 0;
    activeEnemies.push({
      gid,
      gidInt: parseInt(gid) | 0,
      x: enemy.x,
      y: enemy.y,
      brawlerId: enemy.brawlerId,
      moveSpeed: t.moveSpeed,
      histLen: t.histX.d.length,
      vxEma: targetVel.vx,
      vyEma: targetVel.vy,
      losClear
    });
  }
  if (activeEnemies.length > 0) {
    const prevGid = prevTargetId ? parseInt(prevTargetId) | 0 : 0;
    const bestGid = pickBestTarget(activeEnemies, myX, myY, prevGid);
    if (bestGid !== 0) bestTargetId = bestGid.toString();
  }
  if (bestTargetId !== _burstLockTargetId) {
    _burstLockPos = null;
    _burstLockTargetId = null;
    _burstLockTgtX = null;
    _burstLockTgtY = null;
  }
  if (now - _lastCleanupTs > 1e3) {
    for (const [id, t] of targets) {
      if (now - t.lastUpdate > CFG.STALE_MS) targets.delete(id);
    }
    for (const [k, v] of _losCache) {
      if (now - v.ts > CFG.LOS_CACHE_PURGE_MS) _losCache.delete(k);
    }
    _lastCleanupTs = now;
  }
}

// agent/features/name.js
var TAG_FROM = "[BSD]";
var _tag = "";
var _strCache = /* @__PURE__ */ new Map();
function setTag(text) {
  _tag = String(text || "");
}
function _createScString(str) {
  const fns = getFunctions();
  const lc = getLibc();
  const raw = Memory.allocUtf8String(str);
  const obj = lc.malloc(128);
  fns.StringCtor(obj, raw);
  return obj;
}
function _readInline(scStr, len) {
  try {
    return scStr.add(offsets.ScString_data).readUtf8String(len);
  } catch (_) {
    return null;
  }
}
function _readHeap(scStr, len) {
  try {
    const p = scStr.add(offsets.ScString_data).readPointer();
    if (p && !p.isNull()) return p.readUtf8String(len);
  } catch (_) {
  }
  return null;
}
function _readScText(scStr) {
  if (!scStr || scStr.isNull()) return null;
  let len;
  try {
    len = scStr.add(offsets.ScString_length).readU32();
  } catch (_) {
    return null;
  }
  if (len <= 0 || len > 256) return null;
  const inline = _readInline(scStr, len);
  if (inline && inline.indexOf(TAG_FROM) !== -1) return inline;
  const heap = _readHeap(scStr, len);
  if (heap && heap.indexOf(TAG_FROM) !== -1) return heap;
  return null;
}
function _rewriteScArg(args, idx) {
  try {
    const text = _readScText(args[idx]);
    if (!text) return;
    const replacement = "[" + _tag + "]";
    const fixed = text.split(TAG_FROM).join(replacement);
    const key = _tag + "|" + fixed;
    let obj = _strCache[key];
    if (!obj) {
      obj = _createScString(fixed);
      _strCache[key] = obj;
    }
    args[idx] = obj;
  } catch (_) {
  }
}
function _attachRewrite(base, off, argIdx) {
  try {
    Interceptor.attach(base.add(off), {
      onEnter(args) {
        if (!_tag) return;
        _rewriteScArg(args, argIdx);
      }
    });
  } catch (_) {
  }
}
function setupName(base) {
  _attachRewrite(base, offsets.MovieClipHelper__setTextAndScaleIfNecessary, 1);
  _attachRewrite(base, offsets.TextField_setText, 1);
  _attachRewrite(base, offsets.TextField_setText_ui, 1);
}

// agent/features/killaura.js
var CFG2 = {
  ERROR_COOLDOWN_MS: 2e3,
  BATTLE_SCREEN_MAX_AGE_MS: 200,
  FIRE_INTERVAL_MS: 1e3
};
var _errorUntil = 0;
var _wrapperFn = null;
var _lastFireMs = 0;
function updateKillaura(now) {
  const _battleScreen = getSharedBattleScreen();
  if (!state.killaura || !_battleScreen) return;
  if (now === void 0) now = Date.now();
  if (now < _errorUntil) return;
  if (now - scanData.lastUpdate > 500) return;
  if (now - getSharedBattleScreenTs() > CFG2.BATTLE_SCREEN_MAX_AGE_MS) return;
  if (now - _lastFireMs < CFG2.FIRE_INTERVAL_MS) return;
  try {
    const myX = scanData.myX, myY = scanData.myY;
    const own = scanData.ownCharacter;
    if (!own || own.isNull()) return;
    const range = resolveBrawlerRange(scanData.myBrawlerName, scanData.myBrawlerId);
    if (range <= 0) return;
    const rangeSq = range * range;
    let bestDist = 1e18, bestX = 0, bestY = 0, bestGid = null, found = false;
    for (const e of scanData.enemies || []) {
      const dx = e.x - myX, dy = e.y - myY, d2 = dx * dx + dy * dy;
      if (d2 >= rangeSq || d2 >= bestDist) continue;
      if (!isLauncher(scanData.myBrawlerId, scanData.myBrawlerName) && !losCheck(myX, myY, e.x, e.y, 64)) continue;
      bestDist = d2;
      bestX = e.x;
      bestY = e.y;
      bestGid = e.gid;
      found = true;
    }
    if (!found) return;
    let fireX = bestX, fireY = bestY;
    const aim = computeAimForTarget(bestGid, myX, myY);
    if (aim) {
      fireX = aim.x;
      fireY = aim.y;
    }
    _battleScreen.add(offsets.BattleScreen_manualFireX).writeS32(fireX);
    _battleScreen.add(offsets.BattleScreen_manualFireY).writeS32(fireY);
    _battleScreen.add(offsets.BattleScreen_autoFireX).writeS32(fireX);
    _battleScreen.add(offsets.BattleScreen_autoFireY).writeS32(fireY);
    _battleScreen.add(offsets.BattleScreen_autoshootPredOff).writeS32(0);
    _wrapperFn(_battleScreen, own);
    _lastFireMs = now;
  } catch (e) {
    _errorUntil = Date.now() + CFG2.ERROR_COOLDOWN_MS;
  }
}
function setupKillaura(base) {
  _wrapperFn = new NativeFunction(base.add(offsets.BattleScreen_fireWrapperFn), "int", ["pointer", "pointer"]);
}

// agent/libs/pathfind.js
var TILE = 300;
var TILE_CENTER = 150;
var DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
];
var DIAG = 1.4142135623730951;
var INF = 1e15;
function buildDangerMap(w, h, areaEffects, projectiles2, cfg) {
  const danger = new Float32Array(w * h);
  const areaScale = cfg?.areaCostScale ?? 0.6;
  const projCost = cfg?.projCost ?? 80;
  const projLook = cfg?.projLookaheadS ?? 0.45;
  for (let i = 0; i < areaEffects.length; i++) {
    const ae = areaEffects[i];
    const radius = ae.radius || 0;
    if (radius <= 0) continue;
    const cx = ae.x / TILE | 0;
    const cy = ae.y / TILE | 0;
    const rTiles = Math.ceil(radius / TILE) + 1;
    const base = Math.min(900, 25 + (ae.damage || 100) * areaScale);
    for (let dy = -rTiles; dy <= rTiles; dy++) {
      const ty = cy + dy;
      if (ty < 0 || ty >= h) continue;
      for (let dx = -rTiles; dx <= rTiles; dx++) {
        const tx = cx + dx;
        if (tx < 0 || tx >= w) continue;
        const wx = tx * TILE + TILE_CENTER;
        const wy = ty * TILE + TILE_CENTER;
        const ddx = wx - ae.x;
        const ddy = wy - ae.y;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist > radius) continue;
        const falloff = 1 - dist / radius;
        danger[ty * w + tx] += base * falloff;
      }
    }
  }
  for (let i = 0; i < projectiles2.length; i++) {
    const p = projectiles2[i];
    if (p.spawnAngle == null || !isFinite(p.spawnAngle)) continue;
    const dirX = Math.cos(p.spawnAngle);
    const dirY = Math.sin(p.spawnAngle);
    const speed = p.speed || 1200;
    const travel = speed * projLook;
    const steps = Math.max(1, Math.ceil(travel / TILE));
    const lane = Math.max(1, Math.ceil(((p.impactRadius || p.radius || 8) + 40) / TILE));
    for (let s = 0; s <= steps; s++) {
      const decay = 1 - s / (steps + 1);
      const px = p.x + dirX * s * TILE;
      const py = p.y + dirY * s * TILE;
      const cx = px / TILE | 0;
      const cy = py / TILE | 0;
      for (let oy = -lane; oy <= lane; oy++) {
        const ty = cy + oy;
        if (ty < 0 || ty >= h) continue;
        for (let ox = -lane; ox <= lane; ox++) {
          const tx = cx + ox;
          if (tx < 0 || tx >= w) continue;
          danger[ty * w + tx] += projCost * decay;
        }
      }
    }
  }
  return danger;
}
function heur(tx, ty, gx, gy) {
  const dx = Math.abs(tx - gx);
  const dy = Math.abs(ty - gy);
  return dx + dy + (DIAG - 2) * (dx < dy ? dx : dy);
}
function findPath(w, h, wall, danger, startTx, startTy, goalTx, goalTy, maxExpand) {
  if (maxExpand === void 0) maxExpand = 900;
  if (startTx < 0 || startTy < 0 || startTx >= w || startTy >= h) return null;
  if (goalTx < 0 || goalTy < 0 || goalTx >= w || goalTy >= h) return null;
  if (wall[goalTy * w + goalTx] & 128) return null;
  const gScore = new Float32Array(w * h);
  const fScore = new Float32Array(w * h);
  const cameFrom = new Int32Array(w * h);
  const inOpen = new Uint8Array(w * h);
  gScore.fill(INF);
  fScore.fill(INF);
  cameFrom.fill(-1);
  const startIdx = startTy * w + startTx;
  const goalIdx = goalTy * w + goalTx;
  gScore[startIdx] = 0;
  fScore[startIdx] = heur(startTx, startTy, goalTx, goalTy);
  const open = [startIdx];
  inOpen[startIdx] = 1;
  let expanded = 0;
  while (open.length > 0 && expanded < maxExpand) {
    let bestPos = 0;
    let bestF = fScore[open[0]];
    for (let i = 1; i < open.length; i++) {
      const fi = fScore[open[i]];
      if (fi < bestF) {
        bestF = fi;
        bestPos = i;
      }
    }
    const current = open[bestPos];
    open[bestPos] = open[open.length - 1];
    open.pop();
    inOpen[current] = 0;
    expanded++;
    if (current === goalIdx) {
      const path = [];
      let c = current;
      while (c !== -1) {
        path.push({ tx: c % w, ty: c / w | 0 });
        c = cameFrom[c];
      }
      path.reverse();
      return path;
    }
    const cx = current % w;
    const cy = current / w | 0;
    for (let d = 0; d < 8; d++) {
      const nx = cx + DIRS[d][0];
      const ny = cy + DIRS[d][1];
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const ni = ny * w + nx;
      if (wall[ni] & 128) continue;
      const step = (d < 4 ? 1 : DIAG) + (danger ? danger[ni] : 0);
      const tg = gScore[current] + step;
      if (tg >= gScore[ni]) continue;
      cameFrom[ni] = current;
      gScore[ni] = tg;
      fScore[ni] = tg + heur(nx, ny, goalTx, goalTy);
      if (!inOpen[ni]) {
        open.push(ni);
        inOpen[ni] = 1;
      }
    }
  }
  return null;
}
function pathDangerStats(path, danger, w) {
  if (!path || path.length === 0) return { max: 0, avg: 0, total: 0 };
  let total = 0;
  let max = 0;
  for (let i = 0; i < path.length; i++) {
    const idx = path[i].ty * w + path[i].tx;
    const v = danger[idx] || 0;
    total += v;
    if (v > max) max = v;
  }
  return { max, avg: total / path.length, total };
}
function tileCenter(tx, ty) {
  return {
    x: tx * TILE + TILE_CENTER,
    y: ty * TILE + TILE_CENTER
  };
}
function worldToTile(x, y) {
  return { tx: x / TILE | 0, ty: y / TILE | 0 };
}

// agent/features/pathbot.js
// agent/features/pathbot.js
var CFG3 = {
  REPLAN_MS: 250,
  WAYPOINT_REACH: 280,
  MOVE_OFFSET: 520,
  FIRE_INTERVAL_MS: 200,        // ↓ rychlejší střelba (bylo 450)
  MAX_PATH_DANGER: 380,
  MAX_AVG_DANGER: 140,
  MAX_TARGET_DIST: 9e3,
  AREA_COST_SCALE: 0.6,
  PROJ_COST: 85,
  PROJ_LOOKAHEAD_S: 0.45,
  ATTACK_RANGE_FACTOR: 0.92,
  STALE_SCAN_MS: 500,
  BATTLE_SCREEN_MAX_AGE: 200,
  ERROR_COOLDOWN_MS: 2e3,
  DEFAULT_PROJ_SPEED: 3e3,

  // --- nové ---
  CENTER_REPLAN_MS: 1000,       // jak často přeplánovat cestu do středu
  CENTER_REACH_SQ: 400 * 400,  // "jsme v centru" threshold (px²)
};

var _wrapperFn2 = null;
var _errorUntil2 = 0;
var _lastFireMs2 = 0;
var _lastPlanMs = 0;
var _path = null;
var _pathIdx = 0;
var _targetGid = null;
var _targetHist = null;

// stav "jdeme do středu"
var _centerPath = null;
var _centerPathIdx = 0;
var _lastCenterPlanMs = 0;
var _goingToCenter = false;

function _resetPlan() {
  _path = null;
  _pathIdx = 0;
  _targetGid = null;
  _targetHist = null;
  _centerPath = null;
  _centerPathIdx = 0;
  _goingToCenter = false;
}

function _distSq(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

function _estimateVel(hist) {
  if (!hist || hist.length < 2) return { vx: 0, vy: 0 };
  const a = hist[hist.length - 2];
  const b = hist[hist.length - 1];
  const dt = (b.t - a.t) / 1e3;
  if (dt <= 0.01) return { vx: 0, vy: 0 };
  return { vx: (b.x - a.x) / dt, vy: (b.y - a.y) / dt };
}

function _updateTargetHist(enemy, now) {
  if (_targetGid !== enemy.gid) {
    _targetGid = enemy.gid;
    _targetHist = [];
  }
  const hist = _targetHist;
  if (hist.length === 0 || now - hist[hist.length - 1].t > 40) {
    hist.push({ x: enemy.x, y: enemy.y, t: now });
    if (hist.length > 8) hist.shift();
  } else {
    hist[hist.length - 1].x = enemy.x;
    hist[hist.length - 1].y = enemy.y;
    hist[hist.length - 1].t = now;
  }
}

function _pickAttackTile(enemy, attackRange, wall, danger, w, h, myTx, myTy) {
  const eTx = enemy.x / TILE | 0;
  const eTy = enemy.y / TILE | 0;
  const rangeTiles = Math.ceil(attackRange / TILE) + 1;
  const rangeSq = attackRange * attackRange * CFG3.ATTACK_RANGE_FACTOR * CFG3.ATTACK_RANGE_FACTOR;
  let best = null;
  let bestCost = 1e18;
  for (let dy = -rangeTiles; dy <= rangeTiles; dy++) {
    const ty = eTy + dy;
    if (ty < 0 || ty >= h) continue;
    for (let dx = -rangeTiles; dx <= rangeTiles; dx++) {
      const tx = eTx + dx;
      if (tx < 0 || tx >= w) continue;
      if (wall[ty * w + tx] & 128) continue;
      const c = tileCenter(tx, ty);
      if (_distSq(c.x, c.y, enemy.x, enemy.y) > rangeSq) continue;
      const path = findPath(w, h, wall, danger, myTx, myTy, tx, ty);
      if (!path || path.length < 2) continue;
      const stats = pathDangerStats(path, danger, w);
      if (stats.max > CFG3.MAX_PATH_DANGER || stats.avg > CFG3.MAX_AVG_DANGER) continue;
      const cost = stats.total + path.length * 2;
      if (cost < bestCost) {
        bestCost = cost;
        best = { enemy, goalTx: tx, goalTy: ty, path, stats, cost };
      }
    }
  }
  return best;
}

function _pickTarget(myX, myY, enemies, wall, danger, w, h, attackRange) {
  const myTile = worldToTile(myX, myY);
  let best = null;
  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    if (!e.brawlerName) continue;
    if (_distSq(myX, myY, e.x, e.y) > CFG3.MAX_TARGET_DIST * CFG3.MAX_TARGET_DIST) continue;
    const cand = _pickAttackTile(e, attackRange, wall, danger, w, h, myTile.tx, myTile.ty);
    if (!cand) continue;
    if (!best || cand.cost < best.cost) best = cand;
  }
  return best;
}

// ---------- navigace do středu mapy ----------

function _planCenterPath(myX, myY, wall, danger, w, h) {
  const cx = (w / 2 | 0);
  const cy = (h / 2 | 0);
  const myTile = worldToTile(myX, myY);

  // pokud jsme v dosahu středu, nepotřebujeme path
  const cWx = cx * TILE + TILE_CENTER;
  const cWy = cy * TILE + TILE_CENTER;
  if (_distSq(myX, myY, cWx, cWy) <= CFG3.CENTER_REACH_SQ) return null;

  // zkus najít průchodný tile v okolí středu (poloměr 5 tiles)
  for (let r = 0; r <= 5; r++) {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue; // jen obvod
        const tx = cx + dx;
        const ty = cy + dy;
        if (tx < 0 || ty < 0 || tx >= w || ty >= h) continue;
        if (wall[ty * w + tx] & 128) continue;
        const path = findPath(w, h, wall, danger, myTile.tx, myTile.ty, tx, ty, 1200);
        if (path && path.length >= 2) return path;
      }
    }
  }
  return null;
}

function _getMoveTargetCenter(myX, myY) {
  if (!_centerPath || _centerPathIdx >= _centerPath.length) return null;
  while (_centerPathIdx < _centerPath.length) {
    const node = _centerPath[_centerPathIdx];
    const c = tileCenter(node.tx, node.ty);
    const dx = c.x - myX;
    const dy = c.y - myY;
    if (dx * dx + dy * dy <= CFG3.WAYPOINT_REACH * CFG3.WAYPOINT_REACH) {
      _centerPathIdx++;
      continue;
    }
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    return {
      x: Math.round(myX + dx / len * CFG3.MOVE_OFFSET),
      y: Math.round(myY + dy / len * CFG3.MOVE_OFFSET)
    };
  }
  return null;
}

// ---------- chytrý útok (jako aimbot) ----------

/**
 * Vypočítá predikovanou pozici cíle s lead shooting.
 * Používá historii pohybu (estimateTargetVelocity z aimbot.js) i
 * jednoduché _estimateVel jako fallback.
 */
function _computeSmartFirePos(enemy, myX, myY) {
  const projSpeed = resolveProjSpeed ? resolveProjSpeed() : CFG3.DEFAULT_PROJ_SPEED;

  // zkus využít aimbot target data pokud jsou dostupná
  let vel = { vx: 0, vy: 0 };
  if (typeof targets !== 'undefined' && targets.has(enemy.gid)) {
    const t = targets.get(enemy.gid);
    if (t._velCached) {
      vel = t._velCached;
    } else {
      vel = estimateTargetVelocity(t.histX.d, t.histY.d, t.histT.d);
    }
  } else {
    // fallback: jednoduchý odhad z naší lokální histor
    vel = _estimateVel(_targetHist);
  }

  // scale velocity jako v aimbot (juking / unconfident)
  let scale = 1;
  if (vel.directionChanging) scale = 0.35;
  else if (vel.confident === false) scale = 0.45;

  const targetVel = scale === 1 ? vel : {
    vx: vel.vx * scale,
    vy: vel.vy * scale,
    speed: (vel.speed || 0) * scale,
    confident: vel.confident,
    directionChanging: vel.directionChanging
  };

  const intercept = solveIntercept(myX, myY, enemy.x, enemy.y, targetVel, projSpeed);
  if (!isFinite(intercept.x) || !isFinite(intercept.y)) {
    return { x: enemy.x, y: enemy.y };
  }
  return { x: Math.round(intercept.x), y: Math.round(intercept.y) };
}

// ---------- fire ----------

function _tryFire(now, myX, myY, attackRange) {
  const bs = getSharedBattleScreen();
  if (!bs || now - getSharedBattleScreenTs() > CFG3.BATTLE_SCREEN_MAX_AGE) return;
  if (now - _lastFireMs2 < CFG3.FIRE_INTERVAL_MS) return;
  const own = scanData.ownCharacter;
  if (!own || own.isNull()) return;

  const rangeSq = attackRange * attackRange;
  let best = null;
  let bestDist = 1e18;
  const enemies = scanData.enemies || [];

  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    // preferuj aktuální target, ale střílej na kohokoliv v dosahu
    const d2 = _distSq(myX, myY, e.x, e.y);
    if (d2 > rangeSq || d2 >= bestDist) continue;
    if (!isLauncher(scanData.myBrawlerId, scanData.myBrawlerName) && !losCheck(myX, myY, e.x, e.y, 64)) continue;
    bestDist = d2;
    best = e;
  }

  if (!best) return;

  // chytrý aim (lead shooting) — jako aimbot
  const firePos = _computeSmartFirePos(best, myX, myY);

  // LOS check na predikovanou pozici (pro non-launcher)
  if (!isLauncher(scanData.myBrawlerId, scanData.myBrawlerName)) {
    if (!losCheck(myX, myY, firePos.x, firePos.y, 64)) {
      // fallback na přímou pozici
      if (!losCheck(myX, myY, best.x, best.y, 64)) return;
      firePos.x = best.x;
      firePos.y = best.y;
    }
  }

  bs.add(offsets.BattleScreen_manualFireX).writeS32(firePos.x);
  bs.add(offsets.BattleScreen_manualFireY).writeS32(firePos.y);
  bs.add(offsets.BattleScreen_autoFireX).writeS32(firePos.x);
  bs.add(offsets.BattleScreen_autoFireY).writeS32(firePos.y);
  bs.add(offsets.BattleScreen_autoshootPredOff).writeS32(0);
  _wrapperFn2(bs, own);
  _lastFireMs2 = now;
}

// ---------- replan ----------

function _replan(now, myX, myY, attackRange) {
  const wall = getWallCache();
  const w = getWallCacheW();
  const h = getWallCacheH();
  if (!wall || w <= 0 || h <= 0) {
    _resetPlan();
    return;
  }

  const danger = buildDangerMap(w, h, scanData.areaEffects || [], scanData.projectiles || [], {
    areaCostScale: CFG3.AREA_COST_SCALE,
    projCost: CFG3.PROJ_COST,
    projLookaheadS: CFG3.PROJ_LOOKAHEAD_S
  });

  const enemies = scanData.enemies || [];
  let chosen = null;

  if (_targetGid) {
    for (let i = 0; i < enemies.length; i++) {
      if (enemies[i].gid === _targetGid) {
        const myTile = worldToTile(myX, myY);
        chosen = _pickAttackTile(enemies[i], attackRange, wall, danger, w, h, myTile.tx, myTile.ty);
        break;
      }
    }
  }

  if (!chosen) chosen = _pickTarget(myX, myY, enemies, wall, danger, w, h, attackRange);

  if (!chosen) {
    // --- ŽÁDNÝ CÍLE: jdi do středu mapy ---
    _path = null;
    _pathIdx = 0;
    _targetGid = null;
    _targetHist = null;
    _goingToCenter = true;

    if (now - _lastCenterPlanMs >= CFG3.CENTER_REPLAN_MS) {
      _centerPath = _planCenterPath(myX, myY, wall, danger, w, h);
      _centerPathIdx = 1;
      _lastCenterPlanMs = now;
    }
    _lastPlanMs = now;
    return;
  }

  // našli cíl — zrušíme center navigaci
  _goingToCenter = false;
  _centerPath = null;

  _updateTargetHist(chosen.enemy, now);
  _path = chosen.path;
  _pathIdx = 1;
  _lastPlanMs = now;
}

// ---------- movement provider ----------

function _getMoveTarget(myX, myY) {
  if (!_path || _pathIdx >= _path.length) return null;
  while (_pathIdx < _path.length) {
    const node = _path[_pathIdx];
    const c = tileCenter(node.tx, node.ty);
    const dx = c.x - myX;
    const dy = c.y - myY;
    if (dx * dx + dy * dy <= CFG3.WAYPOINT_REACH * CFG3.WAYPOINT_REACH) {
      _pathIdx++;
      continue;
    }
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    return {
      x: Math.round(myX + dx / len * CFG3.MOVE_OFFSET),
      y: Math.round(myY + dy / len * CFG3.MOVE_OFFSET)
    };
  }
  return null;
}

function _movementProvider() {
  if (!state.pathbot || scanData.lastUpdate === 0) return null;
  const myX = scanData.myX;
  const myY = scanData.myY;
  const attackRange = resolveBrawlerRange(scanData.myBrawlerName, scanData.myBrawlerId);
  if (attackRange <= 0) return null;
  const now = Date.now();
  if (now - scanData.lastUpdate > CFG3.STALE_SCAN_MS) return null;

  if (now - _lastPlanMs >= CFG3.REPLAN_MS) _replan(now, myX, myY, attackRange);

  // pokud máme cíl v dosahu s LOS → stůj a střílej (replan se postará o fire)
  const rangeSq = attackRange * attackRange * CFG3.ATTACK_RANGE_FACTOR * CFG3.ATTACK_RANGE_FACTOR;
  if (_targetGid) {
    const enemies = scanData.enemies || [];
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      if (e.gid !== _targetGid) continue;
      if (_distSq(myX, myY, e.x, e.y) <= rangeSq) {
        const los = isLauncher(scanData.myBrawlerId, scanData.myBrawlerName) || losCheck(myX, myY, e.x, e.y, 64);
        if (los) return null; // stůj, _tryFire se postará
      }
      break;
    }
  }

  // pohyb po cestě k cíli
  const wpMove = _getMoveTarget(myX, myY);
  if (wpMove) return wpMove;

  // pohyb do středu mapy
  if (_goingToCenter) {
    return _getMoveTargetCenter(myX, myY);
  }

  return null;
}

// ---------- update ----------

function updatePathbot(now) {
  if (!state.pathbot || scanData.lastUpdate === 0) return;
  if (now === void 0) now = Date.now();
  if (now < _errorUntil2) return;
  if (now - scanData.lastUpdate > CFG3.STALE_SCAN_MS) return;

  try {
    const attackRange = resolveBrawlerRange(scanData.myBrawlerName, scanData.myBrawlerId);
    if (attackRange <= 0) return;
    // střílej pokud je cíl v dosahu — i když se pohybujeme k němu
    _tryFire(now, scanData.myX, scanData.myY, attackRange);
  } catch (_) {
    _errorUntil2 = Date.now() + CFG3.ERROR_COOLDOWN_MS;
  }
}

function resetPathbot() {
  _resetPlan();
  _lastPlanMs = 0;
  _lastFireMs2 = 0;
  _errorUntil2 = 0;
  _lastCenterPlanMs = 0;
  _goingToCenter = false;
}

function setupPathbot(base) {
  _wrapperFn2 = new NativeFunction(base.add(offsets.BattleScreen_fireWrapperFn), "int", ["pointer", "pointer"]);
  registerMovementProvider(_movementProvider, 50);
}

// agent/features/esp.js
var SCAN_STALENESS_MS = 2e3;
var BS_STALENESS_MS = 2e3;
var RING_SEGS = 32;
var _bs = null;
var _bsTs = 0;
var _targetCount = 0;
var _enemyRingCount = 0;
var _myRingValid = false;
var _aimLine = null;
var _selfValid = false;
var _selfX = 0;
var _selfY = 0;
var _sw = 0;
var _sh = 0;
var _lastUpd = 0;
var _glReady = false;
var _glFailed = false;
var _prog = 0;
var _posLoc = -1;
var _colLoc = -1;
var _vbo = 0;
var _MAX_VERTS = 2048;
var _STRIDE_F = 6;
var _STRIDE_B = 24;
var _verts = new Float32Array(_MAX_VERTS * _STRIDE_F);
var _vertsU8 = new Uint8Array(_verts.buffer);
var _buf = Memory.alloc(_verts.byteLength);
var _vertCount = 0;
var GL_ARRAY_BUFFER = 34962;
var GL_DYNAMIC_DRAW = 35048;
var GL_FLOAT = 5126;
var GL_LINES = 1;
var GL_BLEND = 3042;
var GL_SRC_ALPHA = 770;
var GL_ONE_MINUS_SRC_ALPHA = 771;
var GL_VERTEX_SHADER = 35633;
var GL_FRAGMENT_SHADER = 35632;
var GL_DEPTH_TEST = 2929;
var GL_CULL_FACE = 2884;
var GL_SCISSOR_TEST = 3089;
var _gl = {};
function _tryLoadGL() {
  const libs = ["libGLESv2.so", "libGLES_mali.so", "libGLES_adreno.so", "libGL.so"];
  for (const lib of libs) {
    try {
      if (Module.findExportByName(lib, "glCreateShader")) return lib;
    } catch (_) {
    }
  }
  return null;
}
function _loadGLFunctions(lib) {
  const f = (n, r, a) => new NativeFunction(Module.findExportByName(lib, n), r, a);
  _gl.createShader = f("glCreateShader", "uint", ["uint"]);
  _gl.shaderSource = f("glShaderSource", "void", ["uint", "int", "pointer", "pointer"]);
  _gl.compileShader = f("glCompileShader", "void", ["uint"]);
  _gl.createProgram = f("glCreateProgram", "uint", []);
  _gl.attachShader = f("glAttachShader", "void", ["uint", "uint"]);
  _gl.linkProgram = f("glLinkProgram", "void", ["uint"]);
  _gl.useProgram = f("glUseProgram", "void", ["uint"]);
  _gl.getAttribLoc = f("glGetAttribLocation", "int", ["uint", "pointer"]);
  _gl.getUniformLoc = f("glGetUniformLocation", "int", ["uint", "pointer"]);
  _gl.uniform4f = f("glUniform4f", "void", ["int", "float", "float", "float", "float"]);
  _gl.enableVertexAttrib = f("glEnableVertexAttribArray", "void", ["uint"]);
  _gl.vertexAttribPtr = f("glVertexAttribPointer", "void", ["uint", "int", "uint", "uint8", "int", "pointer"]);
  _gl.drawArrays = f("glDrawArrays", "void", ["uint", "int", "int"]);
  _gl.genBuffers = f("glGenBuffers", "void", ["int", "pointer"]);
  _gl.bindBuffer = f("glBindBuffer", "void", ["uint", "uint"]);
  _gl.bufferData = f("glBufferData", "void", ["uint", "int64", "pointer", "uint"]);
  _gl.enable = f("glEnable", "void", ["uint"]);
  _gl.disable = f("glDisable", "void", ["uint"]);
  _gl.blendFunc = f("glBlendFunc", "void", ["uint", "uint"]);
  _gl.lineWidth = f("glLineWidth", "void", ["float"]);
}
var _VERT = "attribute vec2 p;attribute vec4 vc;varying vec4 fc;void main(){fc=vc;gl_Position=vec4(p,0.0,1.0);}";
var _FRAG = "precision mediump float;varying vec4 fc;void main(){gl_FragColor=fc;}";
function _initGL() {
  if (_glReady || _glFailed) return;
  try {
    const lib = _tryLoadGL();
    if (!lib) {
      _glFailed = true;
      try {
        send({ type: "WARN", code: 3, text: "esp: no GLES library found, ESP disabled" });
      } catch (_) {
      }
      return;
    }
    _loadGLFunctions(lib);
    const mkShader = (type, src) => {
      const s = _gl.createShader(type);
      const sp = Memory.allocUtf8String(src);
      const pp = Memory.alloc(Process.pointerSize);
      pp.writePointer(sp);
      _gl.shaderSource(s, 1, pp, ptr(0));
      _gl.compileShader(s);
      return s;
    };
    const vs = mkShader(GL_VERTEX_SHADER, _VERT);
    const fs = mkShader(GL_FRAGMENT_SHADER, _FRAG);
    _prog = _gl.createProgram();
    if (_prog === 0) {
      _glFailed = true;
      try {
        send({ type: "WARN", code: 3, text: "esp: glCreateProgram returned 0, ESP disabled" });
      } catch (_) {
      }
      return;
    }
    _gl.attachShader(_prog, vs);
    _gl.attachShader(_prog, fs);
    _gl.linkProgram(_prog);
    _posLoc = _gl.getAttribLoc(_prog, Memory.allocUtf8String("p"));
    _colLoc = _gl.getAttribLoc(_prog, Memory.allocUtf8String("vc"));
    const vp = Memory.alloc(4);
    _gl.genBuffers(1, vp);
    _vbo = vp.readU32();
    _glReady = true;
  } catch (e) {
    _glFailed = true;
    try {
      send({ type: "WARN", code: 3, text: "esp: init error: " + (e && e.message ? e.message : e) });
    } catch (_) {
    }
  }
}
function _setVert(idx, nx, ny, r, g, b, a) {
  const off = idx * _STRIDE_F;
  _verts[off] = nx;
  _verts[off + 1] = ny;
  _verts[off + 2] = r;
  _verts[off + 3] = g;
  _verts[off + 4] = b;
  _verts[off + 5] = a;
}
function _pushSeg(idx, ax, ay, bx, by, r, g, b_, a) {
  if (idx + 2 > _MAX_VERTS) return idx;
  _setVert(idx, ax, ay, r, g, b_, a);
  _setVert(idx + 1, bx, by, r, g, b_, a);
  return idx + 2;
}
function _pushBox(idx, sx, sy, r, g, b, a) {
  const nx = sx / _sw * 2 - 1;
  const ny = 1 - sy / _sh * 2;
  const bw = 80 / _sw, bh = 120 / _sh;
  const x0 = nx - bw / 2, x1 = nx + bw / 2;
  idx = _pushSeg(idx, x0, ny, x1, ny, r, g, b, a);
  idx = _pushSeg(idx, x1, ny, x1, ny + bh, r, g, b, a);
  idx = _pushSeg(idx, x1, ny + bh, x0, ny + bh, r, g, b, a);
  idx = _pushSeg(idx, x0, ny + bh, x0, ny, r, g, b, a);
  return idx;
}
function _pushRing(idx, pts, r, g, b, a) {
  const n = RING_SEGS;
  for (let i = 0; i < n; i++) {
    const p1 = pts[i], p2 = pts[(i + 1) % n];
    if (!p1.valid || !p2.valid) continue;
    const ax = p1.sx / _sw * 2 - 1, ay = 1 - p1.sy / _sh * 2;
    const bx = p2.sx / _sw * 2 - 1, by_ = 1 - p2.sy / _sh * 2;
    idx = _pushSeg(idx, ax, ay, bx, by_, r, g, b, a);
  }
  return idx;
}
function _drawFrame() {
  if (!_glReady || _sw <= 0 || _sh <= 0) return;
  if (_lastUpd > 0 && Date.now() - _lastUpd > 1500) {
    _targetCount = 0;
    _enemyRingCount = 0;
    _myRingValid = false;
    _aimLine = null;
    _selfValid = false;
  }
  if (_targetCount === 0 && !_myRingValid && _enemyRingCount === 0 && !_aimLine) return;
  try {
    let idx = 0;
    for (let i = 0; i < _enemyRingCount; i++) {
      idx = _pushRing(idx, _ringPools[i], 0, 0, 0, 0.6);
    }
    if (_myRingValid) idx = _pushRing(idx, _myRingPool, 0.2, 0.9, 0.95, 0.55);
    const ox = _selfValid ? _selfX / _sw * 2 - 1 : 0;
    const oy = _selfValid ? 1 - _selfY / _sh * 2 : 0;
    for (let i = 0; i < _targetCount; i++) {
      const t = _targetsPool[i];
      if (t.los && _selfValid) {
        const tx = t.sx / _sw * 2 - 1;
        const ty = 1 - t.sy / _sh * 2;
        idx = _pushSeg(idx, ox, oy, tx, ty, 1, 0.2, 0.2, 0.9);
      }
      idx = _pushBox(idx, t.sx, t.sy, 1, 0.2, 0.2, 0.9);
    }
    if (_aimLine) {
      const al = _aimLine;
      const ax = al.ax / _sw * 2 - 1, ay = 1 - al.ay / _sh * 2;
      const bx = al.bx / _sw * 2 - 1, by_ = 1 - al.by / _sh * 2;
      idx = _pushSeg(idx, ax, ay, bx, by_, 1, 1, 0.15, 0.95);
    }
    if (idx === 0) return;
    _vertCount = idx;
    _buf.writeByteArray(_vertsU8.subarray(0, _vertCount * _STRIDE_B));
    _gl.disable(GL_DEPTH_TEST);
    _gl.disable(GL_CULL_FACE);
    _gl.disable(GL_SCISSOR_TEST);
    _gl.enable(GL_BLEND);
    _gl.blendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    _gl.useProgram(_prog);
    _gl.bindBuffer(GL_ARRAY_BUFFER, _vbo);
    _gl.bufferData(GL_ARRAY_BUFFER, _vertCount * _STRIDE_B, _buf, GL_DYNAMIC_DRAW);
    _gl.enableVertexAttrib(_posLoc);
    _gl.vertexAttribPtr(_posLoc, 2, GL_FLOAT, 0, _STRIDE_B, ptr(0));
    _gl.enableVertexAttrib(_colLoc);
    _gl.vertexAttribPtr(_colLoc, 4, GL_FLOAT, 0, _STRIDE_B, ptr(8));
    _gl.lineWidth(3);
    _gl.drawArrays(GL_LINES, 0, _vertCount);
    _gl.useProgram(0);
    _gl.bindBuffer(GL_ARRAY_BUFFER, 0);
  } catch (_) {
    _glFailed = true;
  }
}
var _mSW = 0;
var _mSH = 0;
var _mMat = new Float32Array(16);
var _ringCos = new Float32Array(RING_SEGS);
var _ringSin = new Float32Array(RING_SEGS);
(function() {
  for (let i = 0; i < RING_SEGS; i++) {
    const a = i * (Math.PI * 2 / RING_SEGS);
    _ringCos[i] = Math.cos(a);
    _ringSin[i] = Math.sin(a);
  }
})();
var _MAX_RINGS = 8;
var _ringPools = new Array(_MAX_RINGS);
for (let i = 0; i < _MAX_RINGS; i++) {
  const r = new Array(RING_SEGS);
  for (let j = 0; j < RING_SEGS; j++) r[j] = { sx: 0, sy: 0, valid: false };
  _ringPools[i] = r;
}
var _myRingPool = new Array(RING_SEGS);
for (let i = 0; i < RING_SEGS; i++) _myRingPool[i] = { sx: 0, sy: 0, valid: false };
var _targetsPool = new Array(_MAX_RINGS);
for (let i = 0; i < _MAX_RINGS; i++) _targetsPool[i] = { sx: 0, sy: 0, los: false };
var _w2sTmp = { sx: 0, sy: 0, valid: false };
function _refreshMatrix(bs) {
  try {
    _mSW = bs.add(offsets.BattleScreen_screenWidth).readFloat();
    _mSH = bs.add(offsets.BattleScreen_screenHeight).readFloat();
    if (_mSW <= 0 || _mSH <= 0) return false;
    const buf = bs.add(offsets.BattleScreen_viewMatrix).readByteArray(64);
    if (!buf) return false;
    const dv = new DataView(buf);
    for (let i = 0; i < 16; i++) _mMat[i] = dv.getFloat32(i * 4, true);
    return true;
  } catch (_) {
    return false;
  }
}
function _w2sInto(wx, wy, out) {
  const M = _mMat;
  const y = -wy;
  const cx = M[0] * wx + M[4] * y + M[12];
  const cy = M[1] * wx + M[5] * y + M[13];
  const cw = M[3] * wx + M[7] * y + M[15];
  if (cw <= 1e-6) {
    out.valid = false;
    return false;
  }
  const iw = 1 / cw;
  out.sx = (cx * iw * 0.5 + 0.5) * _mSW;
  out.sy = (1 - (cy * iw * 0.5 + 0.5)) * _mSH;
  out.valid = true;
  return true;
}
var _hookCb = null;
function _parseGOTFromPLT(pltAddr) {
  try {
    const insn0 = pltAddr.readU32();
    const insn1 = pltAddr.add(4).readU32();
    if ((insn0 >>> 24 & 159) !== 144) return null;
    const immlo = insn0 >>> 29 & 3;
    const immhi = insn0 >>> 5 & 524287;
    const imm21 = immhi << 2 | immlo;
    const signed = imm21 & 1048576 ? imm21 - 2097152 : imm21;
    const imm12 = insn1 >>> 10 & 4095;
    const ldrOff = imm12 * 8;
    const pcPage = ptr(pltAddr).and(ptr("0xFFFFFFFFFFFFF000"));
    const gotPage = signed >= 0 ? pcPage.add(signed * 4096) : pcPage.sub(-signed * 4096);
    return gotPage.add(ldrOff);
  } catch (_) {
    return null;
  }
}
function _scanGOT(libgMod, eglReal) {
  const tmp = Memory.alloc(8);
  tmp.writePointer(eglReal);
  const patBytes = [];
  for (let i = 0; i < 8; i++) patBytes.push(tmp.add(i).readU8().toString(16).padStart(2, "0"));
  const pattern = patBytes.join(" ");
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
function _installHook(eglReal, slot) {
  const origFn = new NativeFunction(eglReal, "uint", ["pointer", "pointer"]);
  _hookCb = new NativeCallback(function(dpy, surface) {
    try {
      if (!_glReady && !_glFailed) _initGL();
      _drawFrame();
    } catch (_) {
    }
    return origFn(dpy, surface);
  }, "uint", ["pointer", "pointer"]);
  try {
    Memory.protect(slot, 8, "rw-");
  } catch (_) {
  }
  slot.writePointer(_hookCb);
}
function setupESP(base) {
  try {
    Interceptor.attach(base.add(offsets.BattleScreen__updateCameraParameters), {
      onEnter: function(args) {
        _bs = args[0];
        _bsTs = Date.now();
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
    let slot = _parseGOTFromPLT(pltEntry.address);
    let valid = false;
    try {
      valid = slot && slot.readPointer().compare(eglReal) === 0;
    } catch (_) {
    }
    if (!valid) slot = _scanGOT(libgMod, eglReal);
    if (!slot) return;
    _installHook(eglReal, slot);
  } catch (_) {
  }
}
function _ringPointsInto(cx, cy, r, pool) {
  for (let i = 0; i < RING_SEGS; i++) {
    _w2sInto(cx + _ringCos[i] * r, cy + _ringSin[i] * r, pool[i]);
  }
}
var _aimLineSlot = { ax: 0, ay: 0, bx: 0, by: 0 };
var _aimW2sTmp = { sx: 0, sy: 0, valid: false };
function updateESP() {
  const now = Date.now();
  if (!_bs || _bs.isNull() || _bsTs > 0 && now - _bsTs > BS_STALENESS_MS || scanData.lastUpdate === 0 || now - scanData.lastUpdate > SCAN_STALENESS_MS || !scanData.ownCharacter || scanData.myX === void 0 || scanData.myX === -1) {
    _targetCount = 0;
    _enemyRingCount = 0;
    _myRingValid = false;
    _aimLine = null;
    _selfValid = false;
    return;
  }
  if (!_refreshMatrix(_bs)) {
    _targetCount = 0;
    _enemyRingCount = 0;
    _myRingValid = false;
    _aimLine = null;
    _selfValid = false;
    return;
  }
  _sw = _mSW;
  _sh = _mSH;
  const mx = scanData.myX, my = scanData.myY;
  _selfValid = _w2sInto(mx, my, _w2sTmp);
  if (_selfValid) {
    _selfX = _w2sTmp.sx;
    _selfY = _w2sTmp.sy;
  }
  const myRange = resolveBrawlerRange(scanData.myBrawlerName, scanData.myBrawlerId);
  if (myRange > 0) {
    _ringPointsInto(mx, my, myRange, _myRingPool);
    _myRingValid = true;
  } else {
    _myRingValid = false;
  }
  const enemies = scanData.enemies;
  let tCount = 0;
  let rCount = 0;
  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    if (!e || e.x === -1 || e.y === -1) continue;
    if (tCount >= _MAX_RINGS) break;
    if (!_w2sInto(e.x, e.y, _w2sTmp)) continue;
    const slot = _targetsPool[tCount];
    slot.sx = _w2sTmp.sx;
    slot.sy = _w2sTmp.sy;
    slot.los = losCheck(mx, my, e.x, e.y, 64);
    tCount++;
    const eR = resolveBrawlerRange(e.brawlerName, e.brawlerId);
    if (eR <= 0) continue;
    _ringPointsInto(e.x, e.y, eR, _ringPools[rCount]);
    rCount++;
  }
  _targetCount = tCount;
  _enemyRingCount = rCount;
  _aimLine = null;
  if (_selfValid && (state.aimbot || state.killaura)) {
    const tid = getBestTargetId();
    if (tid) {
      const aim = computeAimForTarget(tid, mx, my);
      if (aim && _w2sInto(aim.x, aim.y, _aimW2sTmp)) {
        _aimLineSlot.ax = _selfX;
        _aimLineSlot.ay = _selfY;
        _aimLineSlot.bx = _aimW2sTmp.sx;
        _aimLineSlot.by = _aimW2sTmp.sy;
        _aimLine = _aimLineSlot;
      }
    }
  }
  _lastUpd = now;
}
function resetESP() {
  _targetCount = 0;
  _enemyRingCount = 0;
  _myRingValid = false;
  _aimLine = null;
  _selfValid = false;
  _sw = 0;
  _sh = 0;
  _lastUpd = 0;
  _bs = null;
  _bsTs = 0;
}

// agent/features/ipgrabber.js
var _lastServerIP = null;
function readScString(p) {
  try {
    if (!p || p.isNull()) return null;
    const len = p.add(offsets.ScString_length).readU32();
    if (len === 0 || len > 256) return null;
    const sp = len < 8 ? p.add(offsets.ScString_data) : p.add(offsets.ScString_data).readPointer();
    if (!sp || sp.isNull()) return null;
    return sp.readUtf8String(len);
  } catch (_) {
    return null;
  }
}
function isPublicIp(ip) {
  if (!ip || !/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)) return false;
  const p = ip.split(".").map(Number);
  if (p[0] === 0 || p[0] === 127) return false;
  if (p[0] === 10) return false;
  if (p[0] === 172 && p[1] >= 16 && p[1] <= 31) return false;
  if (p[0] === 192 && p[1] === 168) return false;
  if (p[0] === 169 && p[1] === 254) return false;
  if (p[0] >= 224) return false;
  return true;
}
function reportIp(ip, port) {
  const full = ip + ":" + port;
  if (_lastServerIP === full) return;
  _lastServerIP = full;
  send({ type: "IP_CAPTURED", data: full });
}
function setupIPGrabber(base) {
  try {
    Interceptor.attach(base.add(offsets.MessageManager__receiveMessage), {
      onEnter: function(args) {
        const msg = this.context.x1;
        if (!msg || msg.isNull()) return;
        try {
          const port = msg.add(offsets.Message_port).readS32();
          if (port <= 0 || port > 65535) return;
          const ipPtr = msg.add(offsets.Message_ipPtr).readPointer();
          const ip = readScString(ipPtr);
          if (!isPublicIp(ip)) return;
          reportIp(ip, port);
        } catch (_) {
        }
      }
    });
  } catch (_) {
  }
  try {
    let connectAddr = Module.findExportByName("libc.so", "connect") || Module.findExportByName("libc.so.6", "connect") || Module.findExportByName(null, "connect");
    if (!connectAddr) return;
    Interceptor.attach(connectAddr, {
      onEnter: function(args) {
        try {
          const sa = args[1];
          if (!sa || sa.isNull()) return;
          if (sa.readU16() !== 2) return;
          const port = sa.add(offsets.SockAddr_portHi).readU8() << 8 | sa.add(offsets.SockAddr_portLo).readU8();
          if (port <= 1024 || port > 65535) return;
          const b0 = sa.add(offsets.SockAddr_addr0).readU8();
          const b1 = sa.add(offsets.SockAddr_addr1).readU8();
          const b2 = sa.add(offsets.SockAddr_addr2).readU8();
          const b3 = sa.add(offsets.SockAddr_addr3).readU8();
          const ip = `${b0}.${b1}.${b2}.${b3}`;
          if (!isPublicIp(ip)) return;
          reportIp(ip, port);
        } catch (_) {
        }
      }
    });
  } catch (_) {
  }
}
function getServerIP() {
  return _lastServerIP || "Not connected";
}

// agent/utils/logger.js
var _enabled = false;
var _buf2 = [];
var _timer = null;
function _flush() {
  if (!_buf2.length) {
    _timer = null;
    return;
  }
  const entries = _buf2;
  _buf2 = [];
  _timer = null;
  try {
    send({ type: "LOG_BATCH", entries });
  } catch (_) {
  }
}
function _push(lvl, cat, msg, data) {
  if (!_enabled) return;
  const entry = { lvl, cat: String(cat || "?"), msg: String(msg || "") };
  if (data !== void 0) entry.data = data;
  _buf2.push(entry);
  if (_buf2.length >= 32) {
    _flush();
  } else if (_timer === null) {
    _timer = setTimeout(_flush, 100);
  }
}
function setLoggingEnabled(v) {
  const next = !!v;
  if (next === _enabled) return;
  _enabled = next;
  if (_enabled) {
    _push("info", "DEBUG", "agent logging enabled");
  } else {
    _flush();
  }
}

// agent/gui/menu.js
var logMessages = [];
var globalMenu = null;
var _guiStarted = false;
var _guiRetries = 0;
var GUI_MAX_RETRIES = 20;
var _classId = Date.now().toString(36);
function log(message) {
  if (globalMenu) globalMenu.log(message);
}
function guiLog(message) {
  try {
    console.log("[REvenge GUI] " + message);
  } catch (_) {
  }
  try {
    send({ type: "LOG", text: message });
  } catch (_) {
  }
}
function getClassLoader() {
  return {
    Gravity: Java.use("android.view.Gravity"),
    TextView: Java.use("android.widget.TextView"),
    LinearLayout: Java.use("android.widget.LinearLayout"),
    LinearLayout_LayoutParams: Java.use("android.widget.LinearLayout$LayoutParams"),
    FrameLayout: Java.use("android.widget.FrameLayout"),
    FrameLayout_LayoutParams: Java.use("android.widget.FrameLayout$LayoutParams"),
    ViewGroup: Java.use("android.view.ViewGroup"),
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
function dp(context, value) {
  return parseInt(value * context.getResources().getDisplayMetrics().density.value);
}
function isActivityUsable(activity) {
  if (!activity) return false;
  try {
    if (activity.isFinishing()) return false;
    if (activity.isDestroyed && activity.isDestroyed()) return false;
    const window = activity.getWindow();
    if (!window) return false;
    const decor = window.getDecorView();
    if (!decor) return false;
    return true;
  } catch (_) {
    return !!activity;
  }
}
function getMainActivity(cl) {
  let found = null;
  Java.choose("android.app.Activity", {
    onMatch(act) {
      if (!isActivityUsable(act)) return;
      found = act;
    },
    onComplete() {
    }
  });
  if (found) return found;
  const thread = cl.ActivityThread.sCurrentActivityThread.value;
  if (!thread) throw new Error("ActivityThread is null");
  const activities = thread.mActivities.value;
  if (!activities) throw new Error("mActivities is null");
  let size = 0;
  try {
    size = activities.size();
  } catch (_) {
  }
  if (!size) throw new Error("no activities in ActivityThread");
  for (let i = 0; i < size; i++) {
    try {
      const record2 = Java.cast(activities.valueAt(i), cl.ActivityThread_ActivityClientRecord);
      const activity2 = record2.activity.value;
      if (isActivityUsable(activity2)) return activity2;
    } catch (_) {
    }
  }
  const record = Java.cast(activities.valueAt(0), cl.ActivityThread_ActivityClientRecord);
  const activity = record.activity.value;
  if (!activity) throw new Error("activity is null");
  return activity;
}
function makeRoundedDrawable(cl, colorHex, radiusDp, activity) {
  const drawable = cl.GradientDrawable.$new();
  drawable.setShape(cl.GradientDrawable.RECTANGLE.value);
  drawable.setColor(cl.Color.parseColor(colorHex));
  drawable.setCornerRadius(dp(activity, radiusDp));
  return drawable;
}
var Menu = class {
  #cl;
  #activity;
  #MATCH;
  #WRAP;
  #contentView;
  #mainLayout;
  #menuLayout;
  #scrollLayout;
  #isOpen = false;
  #openBtn;
  #colorOn;
  #colorOff;
  #logOverlay;
  #logTextView;
  #logScrollView;
  constructor(cl, activity) {
    this.#cl = cl;
    this.#activity = activity;
    this.#MATCH = cl.LinearLayout_LayoutParams.MATCH_PARENT.value;
    this.#WRAP = cl.LinearLayout_LayoutParams.WRAP_CONTENT.value;
    this.#build();
  }
  #build() {
    this.#contentView = this.#cl.FrameLayout.$new(this.#activity);
    const fp = this.#cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH);
    this.#contentView.setLayoutParams(fp);
    this.#contentView.setBackgroundColor(this.#cl.Color.TRANSPARENT.value);
    this.#mainLayout = this.#cl.LinearLayout.$new(this.#activity);
    this.#mainLayout.setOrientation(this.#mainLayout.VERTICAL.value);
    const mainFrame = this.#cl.FrameLayout_LayoutParams.$new(this.#WRAP, this.#WRAP);
    mainFrame.gravity = this.#cl.Gravity.TOP.value | this.#cl.Gravity.START.value;
    mainFrame.setMargins(dp(this.#activity, 16), dp(this.#activity, 60), 0, 0);
    this.#mainLayout.setLayoutParams(mainFrame);
    this.#openBtn = this.#cl.Button.$new(this.#activity);
    const bp = this.#cl.LinearLayout_LayoutParams.$new(dp(this.#activity, 56), dp(this.#activity, 56));
    this.#openBtn.setLayoutParams(bp);
    this.#openBtn.setText(this.#cl.String.$new("\u2630"));
    this.#openBtn.setTextColor(this.#cl.Color.parseColor("#FFFFFF"));
    this.#openBtn.setBackground(makeRoundedDrawable(this.#cl, "#635985", 16, this.#activity));
    this.#menuLayout = this.#cl.LinearLayout.$new(this.#activity);
    const mlp = this.#cl.LinearLayout_LayoutParams.$new(dp(this.#activity, 220), this.#WRAP);
    mlp.setMargins(0, dp(this.#activity, 8), 0, 0);
    this.#menuLayout.setLayoutParams(mlp);
    this.#menuLayout.setOrientation(this.#menuLayout.VERTICAL.value);
    this.#menuLayout.setBackground(makeRoundedDrawable(this.#cl, "#18122B", 20, this.#activity));
    const pad = dp(this.#activity, 12);
    this.#menuLayout.setPadding(pad, pad, pad, pad);
    this.#menuLayout.setVisibility(8);
    const scroll = this.#cl.ScrollView.$new(this.#activity);
    scroll.setLayoutParams(this.#cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
    this.#scrollLayout = this.#cl.LinearLayout.$new(this.#activity);
    this.#scrollLayout.setLayoutParams(this.#cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP));
    this.#scrollLayout.setOrientation(this.#scrollLayout.VERTICAL.value);
    scroll.addView(this.#scrollLayout);
    this.#menuLayout.addView(scroll);
    const that = this;
    const ToggleListener = Java.registerClass({
      name: "com.revenge.MenuToggle" + _classId,
      implements: [this.#cl.View_OnClickListener],
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
    const olp = cl.FrameLayout_LayoutParams.$new(this.#MATCH, this.#MATCH);
    this.#logOverlay.setLayoutParams(olp);
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
    const closeBtn = cl.Button.$new(activity);
    const cbp = cl.LinearLayout_LayoutParams.$new(this.#MATCH, this.#WRAP);
    cbp.setMargins(0, dp(activity, 12), 0, 0);
    closeBtn.setLayoutParams(cbp);
    closeBtn.setText(cl.String.$new("\u2715  Zav\u0159\xEDt"));
    closeBtn.setTextColor(cl.Color.parseColor("#FFFFFF"));
    closeBtn.setBackground(makeRoundedDrawable(cl, "#635985", 14, activity));
    const that = this;
    const CloseListener = Java.registerClass({
      name: "com.revenge.LogClose" + _classId,
      implements: [cl.View_OnClickListener],
      methods: {
        onClick(v) {
          that.#logOverlay.setVisibility(8);
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
      name: "com.revenge.MenuDrag" + _classId,
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
    let stateOn = defaultOn;
    btn.setBackground(makeRoundedDrawable(cl, stateOn ? colorOn : colorOff, 12, activity));
    if (defaultOn) callbacks.on();
    const ClickListener = Java.registerClass({
      name: "com.revenge.BtnClick" + id + _classId,
      implements: [cl.View_OnClickListener],
      methods: {
        onClick(v) {
          stateOn = !stateOn;
          v.setBackground(makeRoundedDrawable(cl, stateOn ? colorOn : colorOff, 12, activity));
          stateOn ? callbacks.on() : callbacks.off();
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
    btn.setText(cl.String.$new("\u{1F4CB}  Log"));
    btn.setTextColor(cl.Color.parseColor("#FFFFFF"));
    btn.setBackground(makeRoundedDrawable(cl, "#2E2A4A", 12, activity));
    const that = this;
    const OpenLog = Java.registerClass({
      name: "com.revenge.OpenLog" + _classId,
      implements: [cl.View_OnClickListener],
      methods: {
        onClick(v) {
          that.#logOverlay.setVisibility(0);
          that.updateLogView();
        }
      }
    });
    btn.setOnClickListener(OpenLog.$new());
    this.#scrollLayout.addView(btn);
  }
  log(message) {
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
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
        const text = logMessages.join("\n");
        tv.setText(cl.String.$new(text));
        const sv = this.#logScrollView;
        if (sv) sv.fullScroll(130);
      } catch (_) {
      }
    });
  }
  updateLogView() {
    if (!this.#logTextView) return;
    const tv = this.#logTextView;
    const cl = this.#cl;
    const sv = this.#logScrollView;
    const text = logMessages.length > 0 ? logMessages.join("\n") : "(\u017E\xE1dn\xE9 logy)";
    tv.setText(cl.String.$new(text));
    if (sv) sv.fullScroll(130);
  }
  start() {
    this.#contentView.addView(this.#mainLayout);
    this.#contentView.addView(this.#logOverlay);
    this.#mainLayout.addView(this.#openBtn);
    this.#mainLayout.addView(this.#menuLayout);
    const decor = Java.cast(
      this.#activity.getWindow().getDecorView(),
      this.#cl.ViewGroup
    );
    decor.addView(this.#contentView);
    this.#contentView.setElevation(1e4);
    this.#contentView.bringToFront();
    decor.invalidate();
  }
};
// agent/ui/nativeGui.js
var RGBA = {
  color(r, g, b, a = 255) {
    return ((a & 0xff) << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
  }
};
RGBA.green = RGBA.color(0, 255, 0);
RGBA.red = RGBA.color(255, 0, 0);
RGBA.cyan = RGBA.color(0, 255, 255);
RGBA.black = RGBA.color(0, 0, 0);
RGBA.white = RGBA.color(255, 255, 255);

var _nativeUiBtn = {
  dodgeBtn: null,
  aimbotBtn: null,
  killauraBtn: null,
  dodgeTextField: null,
  aimbotTextField: null,
  killauraTextField: null,
};
var _capturedParent = null;
var _capturedAddChildAddr = null;
var _nativeBtnsCreated = false;

function _createStringObjectNative(str) {
  const functions = getFunctions();
  const lc = getLibc();
  const raw = Memory.allocUtf8String(str);
  const obj = lc.malloc(128);
  functions.StringCtor(obj, raw);
  return obj;
}

function _createNativeButton(text, x, y, parent, addChildFn, frame) {
  const functions = getFunctions();
  const lc = getLibc();

  const s1 = Memory.allocUtf8String("sc/ui.sc");
  const s2 = Memory.allocUtf8String("map_editor_exit_button");

  const mc = functions.StringTable_getMovieClip(s1, s2, 1);
  if (!mc || mc.isNull()) return null;

  const btn = lc.malloc(600);
  for (let i = 0; i < 600; i += 8) btn.add(i).writeU64(0);

  functions.GameButtonCtor(btn);
  functions.CustomButton_SetMovieClip(btn, mc, 1);
  functions.MovieClip_gotoAndStopFrameIndex(mc, frame);
  functions.DisplayObject_setXY(btn, x, y);
  functions.TextField_setText_ui(btn, _createStringObjectNative(text), 1);

  const textField = functions.MovieClip_getTextFieldByName(mc, Memory.allocUtf8String("txt"));

  addChildFn(parent, btn);

  return { btn, textField };
}

function _setNativeButtonTextColor(textField, color) {
  if (!textField || textField.isNull()) return;
  textField.add(96).writeInt(color);
}

function _createAllNativeButtons() {
  if (_nativeBtnsCreated) return;
  if (!_capturedParent || _capturedParent.isNull()) return;
  if (!_capturedAddChildAddr) return;

  try {
    const addChild = new NativeFunction(_capturedAddChildAddr, "pointer", ["pointer", "pointer"]);

    try {
      const r = _createNativeButton("Killaura", 500, 100, _capturedParent, addChild, 1);
      if (r) {
        _nativeUiBtn.killauraBtn = r.btn;
        _nativeUiBtn.killauraTextField = r.textField;
        _setNativeButtonTextColor(_nativeUiBtn.killauraTextField, getState("killaura") ? RGBA.green : RGBA.red);
      }
    } catch (_) { _nativeUiBtn.killauraBtn = null; }

    try {
      const r = _createNativeButton("Aimbot", 575, 100, _capturedParent, addChild, 1);
      if (r) {
        _nativeUiBtn.aimbotBtn = r.btn;
        _nativeUiBtn.aimbotTextField = r.textField;
        _setNativeButtonTextColor(_nativeUiBtn.aimbotTextField, getState("aimbot") ? RGBA.green : RGBA.red);
      }
    } catch (_) { _nativeUiBtn.aimbotBtn = null; }

    try {
      const r = _createNativeButton("Autododge", 650, 100, _capturedParent, addChild, 1);
      if (r) {
        _nativeUiBtn.dodgeBtn = r.btn;
        _nativeUiBtn.dodgeTextField = r.textField;
        _setNativeButtonTextColor(_nativeUiBtn.dodgeTextField, getState("autododge") ? RGBA.green : RGBA.red);
      }
    } catch (_) { _nativeUiBtn.dodgeBtn = null; }

    _nativeBtnsCreated = true;
  } catch (_) {
    _nativeBtnsCreated = false;
  }
}

function setupNativeUI(base) {
  Interceptor.attach(base.add(offsets.Sprite__addChild), {
    onEnter(args) {
      if (!_capturedParent) {
        _capturedParent = args[0];
        _capturedAddChildAddr = base.add(offsets.Sprite__addChild);
        _createAllNativeButtons();
      }
    }
  });

  Interceptor.attach(base.add(offsets.ButtonCallback), {
    onEnter(args) {
      try {
        const clicked = args[0];
        if (!clicked || clicked.isNull()) return;
        const clickedAddr = clicked.toInt32();

        if (_nativeUiBtn.killauraBtn && !_nativeUiBtn.killauraBtn.isNull() && clickedAddr === _nativeUiBtn.killauraBtn.toInt32()) {
          const next = !getState("killaura");
          setState("killaura", next);
          _setNativeButtonTextColor(_nativeUiBtn.killauraTextField, next ? RGBA.green : RGBA.red);
          if (!next) resetAimbot();
        }
        if (_nativeUiBtn.aimbotBtn && !_nativeUiBtn.aimbotBtn.isNull() && clickedAddr === _nativeUiBtn.aimbotBtn.toInt32()) {
          const next = !getState("aimbot");
          setState("aimbot", next);
          _setNativeButtonTextColor(_nativeUiBtn.aimbotTextField, next ? RGBA.green : RGBA.red);
          if (!next) resetAimbot();
        }
        if (_nativeUiBtn.dodgeBtn && !_nativeUiBtn.dodgeBtn.isNull() && clickedAddr === _nativeUiBtn.dodgeBtn.toInt32()) {
          const next = !getState("autododge");
          setState("autododge", next);
          _setNativeButtonTextColor(_nativeUiBtn.dodgeTextField, next ? RGBA.green : RGBA.red);
          if (!next) resetAutododge();
        }
      } catch (_) {}
    }
  });

  Interceptor.attach(base.add(offsets.BattleMode__enter), {
    onEnter() {
      _capturedParent = null;
      _capturedAddChildAddr = null;
      _nativeUiBtn.killauraBtn = null;
      _nativeUiBtn.aimbotBtn = null;
      _nativeUiBtn.dodgeBtn = null;
      _nativeUiBtn.killauraTextField = null;
      _nativeUiBtn.aimbotTextField = null;
      _nativeUiBtn.dodgeTextField = null;
      _nativeBtnsCreated = false;
    }
  });
}

function toggleFeature(feature, on) {
  setState(feature, on);
  if (!on) {
    if (feature === "aimbot") resetAimbot();
    if (feature === "autododge") resetAutododge();
    if (feature === "pathbot") resetPathbot();
    if (feature === "esp") resetESP();
  }
}
function buildMenu() {
  if (_guiStarted) return;
  const cl = getClassLoader();
  const activity = getMainActivity(cl);
  const menu = new Menu(cl, activity);
  globalMenu = menu;
  menu.setColors("#635985", "#443C68");
  menu.addButton("aim_bot", "Aim Bot", {
    on: () => toggleFeature("aimbot", true),
    off: () => toggleFeature("aimbot", false)
  });
  menu.addButton("autododge", "Auto Dodge", {
    on: () => toggleFeature("autododge", true),
    off: () => toggleFeature("autododge", false)
  });
  menu.addButton("spinner", "Spinner", {
    on: () => toggleFeature("spinner", true),
    off: () => toggleFeature("spinner", false)
  });
  menu.addButton("killaura", "Killaura", {
    on: () => toggleFeature("killaura", true),
    off: () => toggleFeature("killaura", false)
  });
  menu.addButton("esp", "ESP", {
    on: () => toggleFeature("esp", true),
    off: () => toggleFeature("esp", false)
  });
  menu.addButton("pathbot", "Pathbot", {
    on: () => toggleFeature("pathbot", true),
    off: () => toggleFeature("pathbot", false)
  });
  menu.addLogButton();
  menu.start();
  _guiStarted = true;
  guiLog("ready");
  log("GUI ready");
}
function tryBuildMenu() {
  if (_guiStarted) return;
  _guiRetries++;
  Java.perform(() => {
    Java.scheduleOnMainThread(() => {
      try {
        buildMenu();
      } catch (e) {
        const msg = e && e.message ? e.message : String(e);
        guiLog("attempt " + _guiRetries + " failed: " + msg);
        try {
          send({ type: "ERROR", code: 4, text: "gui: " + msg });
        } catch (_) {
        }
        if (_guiRetries < GUI_MAX_RETRIES) {
          setTimeout(tryBuildMenu, 2e3);
        }
      }
    });
  });
}
function setupGui() {
  if (typeof Java === "undefined" || !Java.available) {
    guiLog("Java not ready, retrying...");
    setTimeout(setupGui, 2e3);
    return;
  }
  tryBuildMenu();
}

// agent/index.js
var _ACTIVE_MASK = FLAG_AIMBOT | FLAG_AUTODODGE | FLAG_ESP | FLAG_SPINNER | FLAG_KILLAURA | FLAG_PATHBOT;
var _AIM_OR_KILL = FLAG_AIMBOT | FLAG_KILLAURA;
function startAgent() {
  libg().then((base) => {
    setupSafe("initFunctions", () => initFunctions(base));
    setupSafe("initCSV", () => initCSV(base));
    setupSafe("initScanner", () => initScanner(base));
    return libc().then((c) => {
      setupSafe("initUtils", () => initUtils(c));
      setupSafe("movement", () => setupMovementHook(base));
      setupSafe("name", () => setupName(base));
      setupSafe("aimbot", () => setupAimbot(base));
      setupSafe("autododge", () => setupAutododge(base));
      setupSafe("killaura", () => setupKillaura(base));
      setupSafe("pathbot", () => setupPathbot(base));
      setupSafe("esp", () => setupESP(base));
      setupSafe("ipgrabber", () => setupIPGrabber(base));
      setupSafe("nativeUI", () => setupNativeUI(base));
      setupGui();
      let lastBM = null;
      Interceptor.attach(base.add(offsets.LogicBattleModeClient_update), {
        onEnter(args) {
          try {
            const bm = args[0];
            if (!bm || bm.isNull()) return;
            if (!lastBM || !lastBM.equals(bm)) {
              lastBM = bm;
              resetAimbot();
              resetAutododge();
              resetPathbot();
              resetESP();
              resetScannerCache();
              notifyBattleModeChanged(bm);
            }
            const f = getFlags();
            if ((f & _ACTIVE_MASK) === 0) return;
            const now = Date.now();
            updateScanner(bm, now);
            if (f & _AIM_OR_KILL) updateAimbot(now);
            if (f & FLAG_KILLAURA) updateKillaura(now);
            if (f & FLAG_PATHBOT) updatePathbot(now);
            if (f & FLAG_AUTODODGE) updateAutododge(now);
            if (f & FLAG_ESP) updateESP();
          } catch (_) {
            try {
              send({ type: "ERROR", code: 3 });
            } catch (__) {
            }
          }
        }
      });
    });
  }).catch(() => {
    try {
      send({ type: "ERROR", code: 1 });
    } catch (_) {
    }
  });
}
var _started = false;
rpc.exports = {
  inithooks() {
    return true;
  },
  start() {
    if (_started) return true;
    _started = true;
    startAgent();
    return true;
  },
  togglefeature(feature, value) {
    const ALLOWED = { aimbot: 1, autododge: 1, esp: 1, name: 1, spinner: 1, killaura: 1, pathbot: 1 };
    if (!ALLOWED[feature]) return;
    setState(feature, !!value);
    if (!value) {
      if (feature === "aimbot") resetAimbot();
      if (feature === "autododge") resetAutododge();
      if (feature === "pathbot") resetPathbot();
      if (feature === "esp") resetESP();
    }
  },
  prepare_unload() {
    resetAimbot();
    resetAutododge();
    resetPathbot();
    resetESP();
  },
  getserverip() {
    return getServerIP();
  },
  setnametag(text) {
    setTag(text);
  },
  setdebug(value) {
    setLoggingEnabled(value);
  }
};
setTimeout(() => {
  try {
    if (!_started) rpc.exports.start();
  } catch (_) {
    try {
      startAgent();
    } catch (__) {
    }
  }
}, 0);
