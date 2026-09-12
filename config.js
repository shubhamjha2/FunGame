/* =========================================================================
   ARENA CLASH — CONFIG / VARIABLES
   Every tunable number, color, and weapon stat lives in this file.
   Edit here — battle-arena.html never hard-codes these values.
========================================================================= */
(function () {
  'use strict';

  // ---- Roster -----------------------------------------------------------
  const PLAYER_COLORS = ['#ff4d5e', '#3fa9ff', '#ffb443', '#3ddc84', '#c46bff', '#ff8fd6'];
  const MAX_PLAYERS   = 6;
  const BASE_HP       = 100;
  const PLAYER_RADIUS = 24;

  // ---- Weapons ------------------------------------------------------------
  // mode: 'melee' (short range, may "throw" if throwRange is set),
  //       'gun'   (fires a bullet/arrow/rocket at range),
  //       'buff'  (no attack — applies an effect while held)
  // bulletSpeed: px/sec the fired round physically travels across the arena (used to
  //   animate a real flying bullet instead of an instant laser line). throwSpeed is the
  //   equivalent travel speed for a thrown melee weapon. pelletCount: number of individual
  //   bullets released in a single trigger pull (e.g. a shotgun sprays several pellets at once,
  //   each doing a fraction of the total damage), spread across spreadDeg degrees.
  const WEAPON_TYPES = [
    { key: 'fist',       label: 'Fists',           icon: '👊', shortIcon: '👊', mode: 'melee', dmg: 4,  range: 34,  cooldown: 620 },
    { key: 'pistol',     label: 'Pistol',          icon: '🔫', shortIcon: '🔫', mode: 'gun',   dmg: 9,  range: 170, cooldown: 550,  bulletSpeed: 900 },
    { key: 'rifle',      label: 'Rifle',           icon: '▄︻̷̿┻̿═━一', shortIcon: '▄︻̷̿┻̿═━一', mode: 'gun',   dmg: 13, range: 230, cooldown: 350,  bulletSpeed: 1050 },
    { key: 'uzi',        label: 'Uzi',             icon: '⌐╦╦═─', shortIcon: '⌐╦╦═─', mode: 'gun',   dmg: 6,  range: 140, cooldown: 150,  bulletSpeed: 1400 },
    { key: 'ak47',       label: 'AK-47',           icon: '︻╦デ╤━─', shortIcon: '︻╦デ╤━─', mode: 'gun',   dmg: 15, range: 220, cooldown: 280,  bulletSpeed: 1050 },
    { key: 'shotgun',    label: 'Shotgun',         icon: '▅︻╦╤─', shortIcon: '▅︻╦╤─', mode: 'gun',   dmg: 24, range: 90,  cooldown: 750,  bulletSpeed: 800, pelletCount: 5, spreadDeg: 26 },
    { key: 'sniper',     label: 'Sniper Rifle',    icon: '🎯', shortIcon: '🎯', mode: 'gun',   dmg: 35, range: 320, cooldown: 1400, bulletSpeed: 2200 },
    { key: 'blade',      label: 'Blade',           icon: '🗡️', shortIcon: '🗡️', mode: 'melee', dmg: 20, range: 46,  throwRange: 150, cooldown: 420, throwSpeed: 560 },
    { key: 'bow',        label: 'Bow',             icon: '🏹', shortIcon: '🏹', mode: 'gun',   dmg: 14, range: 200, cooldown: 520, projectileIcon: '➤', bulletSpeed: 700 },
    { key: 'rocket',     label: 'Rocket Launcher', icon: '🚀', shortIcon: '🚀', mode: 'gun',   dmg: 30, range: 260, cooldown: 1300, projectileIcon: '🚀', bulletSpeed: 480 },
    { key: 'speedboost', label: 'Speed Boost',     icon: '⚡', shortIcon: '⚡', mode: 'buff',  dmg: 0,  range: 0,   cooldown: 999999, speedMultiplier: 1.6 },
  ];

  const FIST = WEAPON_TYPES.find(w => w.key === 'fist');
  const SPAWNABLE_KEYS = WEAPON_TYPES.filter(w => w.key !== 'fist').map(w => w.key);

  // ---- Default dashboard / balance settings --------------------------------
  const DEFAULTS = {
    speed: 130,              // px/sec, base fighter movement speed
    minSpeed: 40,
    maxSpeed: 400,

    maxWeaponsOnField: 5,    // how many weapon pickups can exist at once
    minWeaponsOnField: 1,
    maxWeaponsOnFieldCap: 10,

    spawnIntervalMs: 1200,    // how often we *try* to spawn a new weapon (capped by maxWeaponsOnField)
    weaponHoldMs: 3000,      // a fighter keeps a picked-up weapon for this long, then it reverts to fists
    weaponDespawnMs: 5000,   // a spawned weapon disappears if untouched for this long

    startCircleRadiusFactor: 0.25, // fighters start equally spaced on a circle this fraction of arena radius
    aiDecisionMinMs: 400,
    aiDecisionMaxMs: 700,
    weaponSeekRadius: 220,   // fighters gently steer toward weapons within this distance

    particleCount: 6,
  };

  window.ARENA_CONFIG = {
    PLAYER_COLORS,
    MAX_PLAYERS,
    BASE_HP,
    PLAYER_RADIUS,
    WEAPON_TYPES,
    FIST,
    SPAWNABLE_KEYS,
    DEFAULTS,
  };
})();
