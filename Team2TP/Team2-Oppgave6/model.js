    //model

    let playerName = "";
    let classSelected;

    let agility = 20;
    let strength = 20;
    let intelligence = 20;

    // swing
    let warriorAttack = 50;
    // rend DOT
    let warriorBleed = 10;
    // execute, at which precent NPC dies if used
    let warriorExecute = 20;
    
    // fireball
    let mageAttack = 150;
    // scortch DOT
    let mageBleed = 160;
    // pyroignition, at which precent NPC dies if used
    let mageExecute = 20;

    // EXPERIENCE

    let disableExperience = false;
    let playerLevel = 1;
    let currentPlayerExp = 0;
    let requiredPlayerExp;

    
    let bossStatus; // Unlocking FINAL BOSS
    let chosenMap; // carries the chosen map value


    if (playerLevel == 1) requiredPlayerExp = 100;
    if (playerLevel == 2) requiredPlayerExp = 200;
    if (playerLevel == 3) requiredPlayerExp = 300;



    // Agility = crit & dodge, Strength = physicalDamage, Intelligence = magicalDamage
    let stats = [agility, strength, intelligence];

    let currentStats = classSelected == "warrior" ? 
    
    // DISPLAYING STATS
    let mageTalents = [mageAttack, mageBleed, mageExecute];
    let mageStats = {mageAttack, mageBleed, mageExecute};
    let warriorTalents = [warriorAttack, warriorBleed, warriorExecute];
    let warriorStats = {};


    // POINTER STATS
    //////////////////////////////////////////////////////////////////////////////

    // PLAYER DEFENSIVES
    let playerHealth = 300; // First: Class, Second: Level
    let playerDodgeChance = 0; // Agility
    const playerLifeSteal = 20; // Any, constant

    // PLAYER OFFENSIVES
    let playerDamageModifier = 1; // Level
    let playerDamage = 50; // Strength || Intelligence
    let playerCritChance = 70; // Agility


    // MONSTER DEFENSIVES
    let monsterHealth = 500; // Based on map
    let monsterArmor = 1000; // Decaying on additional swing - IGNORED by caster

    // MONSTER OFFENSIVES
    let monsterDamageModifier = 1; // Based on map FirstBoss: 1 (Castle), SecondBoss 2 (Cove), FinalBoss 3.
    const monsterDamage = 70; // Any, constant
    

    // CONBAT STATS
    //////////////////////////////////////////////////////////////////////////////

    // PLAYER MODIFIED VARIABLES
    let currentPlayerDamage;
    let currentPlayerHealth;

    // MONSTER MODIFIED VARIABLES
    let currentMonsterDamage;
    let currentMonsterHealth;

   

    // TALENTS AND STATS
    //////////////////////////////////////////////////////////////////////////////

    // STATS AND TALENTS MODEL

    let statsAvailable = 0;
    let talentsAvailable = 0;