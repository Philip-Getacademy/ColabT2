    
    
    let elementPlayerLog = document.getElementById('playerLog');
    let elementMonsterLog = document.getElementById('monsterLog');
    
    
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


    // CLASS ABILITIES
    //////////////////////////////////////////////////////////////////////////////
    // swing
    let warriorAttack = 0;
    // execute, at which precent NPC dies if used
    let warriorExecute = 20;
    
    // fireball
    let mageAttack = 0;
    // pyroignition, at which precent NPC dies if used
    let mageExecute = 20;




    // EXPERIENCE
    //////////////////////////////////////////////////////////////////////////////
    let disableExperience = false;
    let playerLevel = 1;
    let currentPlayerExp = 0;
    let requiredPlayerExp = 100;

    // MAP, BOSS, and COMBAT STATUS
    //////////////////////////////////////////////////////////////////////////////

    let bossStatus; // Unlocking FINAL BOSS
    let chosenMap; // carries the chosen map value

    let playerLog = '';
    let monsterLog = '';



    // Agility = crit & dodge, Strength = physicalDamage,  = magicalDamage
    // let stats = [agility, strength, ];

    

    let selectedStats;


    // POINTER STATS
    //////////////////////////////////////////////////////////////////////////////

    // PLAYER DEFENSIVES
    let playerHealth = 1000; // First: Class, Second: Level
    let playerDodgeChance = agility; // Agility
    const playerLifeSteal = 20; // Any, constant

    // PLAYER OFFENSIVES
    let playerDamageModifier = 1; // Level
    let playerDamage = strength; // Strength || 
    let playerCritChance = agility * 2; // Agility



    // MONSTER DEFENSIVES
    let monsterHealth = 3500; // Based on map
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


    // TALENTS AND STATS
    //////////////////////////////////////////////////////////////////////////////

    // STATS AND TALENTS MODEL

    let statsAvailable = 0;
    let talentsAvailable = 0;



    // DISPLAYING STATS

    let mageTalents = [mageAttack, mageExecute];
    let warriorTalents = [warriorAttack, warriorExecute];
    
    let mageBaseStats = [playerDamage, playerCritChance, playerDodgeChance];
    let warriorBaseStats = [playerDamage, playerCritChance, playerDodgeChance];
    