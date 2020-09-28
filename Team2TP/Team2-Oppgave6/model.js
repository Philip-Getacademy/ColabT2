    
    
    
    
    
    //Changable global vaiables
    let shortApp = document.getElementById('app');
    let gameName = "War Dude";
    let gameInit = "Slay";

    
    
    //model

    let playerName = "";
    let classSelected = "";
    let classObject;

    let agility = 20;
    let strength = 50;
    let intelligence = 20;


    // CLASS ABILITIES
    //////////////////////////////////////////////////////////////////////////////
    // swing
    let warriorAttack = 50;
    // execute, at which precent NPC dies if used
    let warriorExecute = 20;
    
    // fireball
    let mageAttack = 150;
    // pyroignition, at which precent NPC dies if used
    let mageExecute = 20;




    // EXPERIENCE
    //////////////////////////////////////////////////////////////////////////////
    let disableExperience = false;
    let playerLevel = 1;
    let currentPlayerExp = 0;
    let requiredPlayerExp;

    // MAP, BOSS, and COMBAT STATUS
    //////////////////////////////////////////////////////////////////////////////

    let bossStatus; // Unlocking FINAL BOSS
    let chosenMap; // carries the chosen map value

    let playerLog = '';
    let monsterLog = '';



    // Agility = crit & dodge, Strength = physicalDamage, Intelligence = magicalDamage
    // let stats = [agility, strength, intelligence];

    

    let selectedStats;
    let currentStats;


    // POINTER STATS
    //////////////////////////////////////////////////////////////////////////////

    // PLAYER DEFENSIVES
    let playerHealth = 1000; // First: Class, Second: Level
    let playerDodgeChance = 0; // Agility
    const playerLifeSteal = 20; // Any, constant

    // PLAYER OFFENSIVES
    let playerDamageModifier = 1; // Level
    let playerDamage = 50; // Strength || Intelligence
    let playerCritChance = 70; // Agility


    // MONSTER DEFENSIVES
    let monsterHealth = 2000; // Based on map
    let monsterArmor = 1000; // Decaying on additional swing - IGNORED by caster

    // MONSTER OFFENSIVES
    let monsterDamageModifier = 1; // Based on map FirstBoss: 1 (Castle), SecondBoss 2 (Cove), FinalBoss 3.
    const monsterDamage = 70; // Any, constant
    
    let monsterStats = [monsterHealth, monsterArmor, monsterDamage];

    // CONBAT STATS
    //////////////////////////////////////////////////////////////////////////////

    // PLAYER MODIFIED VARIABLES
    let currentPlayerDamage;
    let currentPlayerHealth;

    // MONSTER MODIFIED VARIABLES
    let currentMonsterDamage;
    let currentMonsterHealth;
    let currentMonsterArmor = monsterArmor;


   
    let warriorObject = [
        {'Health'  : playerHealth},
        {'Damage'  : playerDamage},
        {'Dodge'   : playerDodgeChance},
        {'Crit'    : playerCritChance},
        {'Swing'   : warriorAttack},
        {'Execute' : warriorExecute}
        
    ];
    let mageObject = [
        {'Health'       : playerHealth},
        {'Damage'       : playerDamage},
        {'Dodge'        : playerDodgeChance},
        {'Crit'         : playerCritChance},
        {'Fireball'     : mageAttack},
        {'pyroignition' : mageExecute}
    ];

    // TALENTS AND STATS
    //////////////////////////////////////////////////////////////////////////////

    // STATS AND TALENTS MODEL

    let statsAvailable = 0;
    let talentsAvailable = 0;



    // DISPLAYING STATS

    let mageTalents = [mageAttack, mageExecute];
    let warriorTalents = [warriorAttack, warriorExecute];
    
    let mageBaseStats = [playerHealth, agility, strength, intelligence];
    let warriorBaseStats = [playerHealth * 5, playerCritChance, playerDamage + strength, intelligence];
    