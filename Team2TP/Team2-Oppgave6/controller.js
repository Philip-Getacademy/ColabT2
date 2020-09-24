
//controller
function playerAttack() {

    let physicalCrit = randomNumber(1, 100);
    
    if (physicalCrit > 100 - playerCritChance) currentPlayerDamage = playerDamage * 2;
    else currentPlayerDamage = playerDamage;

    monsterHealth = physicalAttack(monsterHealth, currentPlayerDamage, playerDamageModifier);
    playerHealth = lifeSteal(playerHealth, currentPlayerDamage, playerLifeSteal);

    monsterHealth = checkHealth(monsterHealth);
    monsterAttack();
}

function monsterAttack() {

    let physicalMiss = randomNumber(1, 100);

    if (physicalMiss > 100 - playerDodgeChance) currentMonsterDamage = 0;
    else currentMonsterDamage = monsterDamage;

    playerHealth = physicalAttack(playerHealth, currentMonsterDamage, monsterDamageModifier);

    playerHealth = checkHealth(playerHealth);
    combatStatus();
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
