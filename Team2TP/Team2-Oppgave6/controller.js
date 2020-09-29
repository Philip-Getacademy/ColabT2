//controller

function playerAttack() {

    let physicalCrit = randomNumber(1, 100);
    
    if(playerClass == "mage") {

        playerDamage = playerDamage + mageAttack;;

        if (physicalCrit > 100 - playerCritChance) currentPlayerDamage = playerDamage * 4;
        else currentPlayerDamage = playerDamage;
    

        currentMonsterHealth = physicalAttack(currentMonsterHealth, currentPlayerDamage, playerDamageModifier);
        currentPlayerHealth = lifeSteal(currentPlayerHealth, currentPlayerDamage, playerLifeSteal);
    
        currentMonsterHealth = checkHealth(currentMonsterHealth);
    
        playerLog += `<p>${playerName} does ${currentPlayerDamage} damage </p>`

        monsterAttack();
    }
    else {

        playerDamage = playerDamage + warriorAttack;

        if (physicalCrit > 100 - playerCritChance) currentPlayerDamage = playerDamage * 2;
        else currentPlayerDamage = playerDamage;
    

        currentPlayerDamage = currentPlayerDamage - (currentMonsterArmor / 100);
        currentMonsterArmor -= 100;

        if(currentMonsterArmor <= 0) currentPlayerDamage = currentPlayerDamage * 4;
        
        currentMonsterHealth = physicalAttack(currentMonsterHealth, currentPlayerDamage, playerDamageModifier);
        currentPlayerHealth = lifeSteal(currentPlayerHealth, currentPlayerDamage, playerLifeSteal);
        currentPlayerHealth = Math.floor(currentPlayerHealth)

        currentMonsterHealth = checkHealth(currentMonsterHealth);
    
        playerLog += `<p>${playerName} does ${currentPlayerDamage} damage </p>`
        monsterAttack();


    }
}


function playerExecute() {

    playerLog += `${playerName} exectutes target for ${currentMonsterHealth} damage`;
    currentMonsterHealth = 0;
    enableExecute = "disabled";
    combatStatus();
}



function monsterAttack() {

    elementPlayerLog = document.getElementById('playerLog');
    elementMonsterLog = document.getElementById('monsterLog');

    let physicalMiss = randomNumber(1, 100);

    if (physicalMiss > 100 - playerDodgeChance) currentMonsterDamage = 0;
    else currentMonsterDamage = monsterDamage;

    currentPlayerHealth = physicalAttack(currentPlayerHealth, currentMonsterDamage, monsterDamageModifier);

    currentPlayerHealth = checkHealth(currentPlayerHealth);
    monsterLog += `<p>${chosenMap} boss does ${currentMonsterDamage} damage <br></p>`
    updateScroll();
    combatStatus();
}

// Experience

function calculatePlayerExperience() {

    if(playerLevel < 3) {
        
        if(playerLevel == 1 && bossStatus == 1 || playerLevel == 2 && bossStatus == 1) {
            currentPlayerExp += 100;

        }
        else currentPlayerExp += 200;


        if (currentPlayerExp >= requiredPlayerExp) {
            increaseStatsAndTalents();
            currentPlayerExp = 0;
        }

    }
    else return
 
}

// extra stats for testing
function increaseStatsAndTalents() {

    playerLevel++;
    requiredPlayerExp = 200;
    statsAvailable += 2;
    talentsAvailable += 1;
}

// Incresse Stats & Talents
function increaseStats(statincrease) {

    if(statincrease == 0) agility = agility + 5;
    if(statincrease == 1) strength = strength + 5;

   statsAvailable -= 1;

   playerDamage = strength;
   playerCritChance = agility * 2;
   playerDodgeChance = agility;

   drawTown();
}

function increaseTalent(talentincrease) {
    if (classSelected == "mage") {
        if(talentincrease == 0) mageAttack += 50;
        if(talentincrease == 1) mageExecute += 10;
        talentsAvailable -= 1;
        drawTown();
    }
    else {
        if(talentincrease == 0) warriorAttack += 100;
        if(talentincrease == 1) warriorExecute += 10;
        talentsAvailable -= 1;
        drawTown();
    }
}


function unlockFinalBoss() {
    hideFinalBoss = false;
}


//View helper &/ button disabler
function killingBlow(health, damage) { return health - damage; }

// Controller helpers
function randomNumber(min, max) { return Math.floor((Math.random() * max) + min); }

// Controller COMBAT
function physicalAttack(health, damage, modifier) { return health - damage * modifier; }
function lifeSteal(health, damage, lifeSteal) { return health + (damage / 100) * lifeSteal; }

function checkHealth(health) { return health = health <= 0 ? 0 : health; }

// Controller Show/ Hide <div id="button.innerHTML"/>
function showThis(button) { 
    document.getElementById(button.innerHTML).style.display = (
        document.getElementById(button.innerHTML).style.display == "flex" ? "none" : "flex"
    ); 
}

function updateScroll() {

    elementPlayerLog.scrollTop = elementPlayerLog.scrollHeight;
    elementMonsterLog.scrollTop = elementMonsterLog.scrollHeight;
}
