
//controller
function playerAttack() {

    let physicalCrit = randomNumber(1, 100);
    
    if (physicalCrit > 100 - playerCritChance) currentPlayerDamage = playerDamage * 2;
    else currentPlayerDamage = playerDamage;

    monsterHealth = physicalAttack(monsterHealth, currentPlayerDamage, playerDamageModifier);
    currentPlayerHealth = lifeSteal(currentPlayerHealth, currentPlayerDamage, playerLifeSteal);

    monsterHealth = checkHealth(monsterHealth);
    monsterAttack();
}

function monsterAttack() {

    let physicalMiss = randomNumber(1, 100);

    if (physicalMiss > 100 - playerDodgeChance) currentMonsterDamage = 0;
    else currentMonsterDamage = monsterDamage;

    currentPlayerHealth = physicalAttack(currentPlayerHealth, currentMonsterDamage, monsterDamageModifier);

    currentPlayerHealth = checkHealth(currentPlayerHealth);
    combatStatus();
}



function calculateBossExperience() {
    if (bossStatus == 1) currentPlayerExp = currentPlayerExp + 100;
    if (bossStatus == 2) currentPlayerExp = currentPlayerExp + 100;

    else return;
}

function checkCharacterExperience() {

    if(disableExperience == true) {
        currentPlayerExp == "Max";
        requiredPlayerExp == "";
    }

    if(playerLevel >= 3) {
        playerLevel = 3;
        disableExperience = true;
        unlockFinalBoss();   
    }

    if(currentPlayerExp >= requiredPlayerExp) {
        playerLevel++;
        currentPlayerExp = currentPlayerExp - requiredPlayerExp;
    }

    else return;
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
        document.getElementById(button.innerHTML).style.display == "none" ? "flex" : "none"
    ); 
}
