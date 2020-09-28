function drawTown() {

    checkCharacterExperience();

    if(playerClass === "warrior") {
        selectedStats = warriorBaseStats;
        talents = warriorTalents;
    } 
    else {
        selectedStats = mageBaseStats;
        talents = mageTalents;
    }

    currentMonsterHealth = monsterHealth;
    currentPlayerHealth = playerHealth;
    currentMonsterArmor = monsterArmor;
    
    playerLog = monsterLog = '';
    
    let disableStats = statsAvailable >= 1 ? '' : 'disabled';
    let disableTalents = talentsAvailable >= 1 ? '' : 'disabled';

    let talentOneDescription = talents == mageTalents ? "Fireball" : "Swing";
    let talentTwoDescription = talents == mageTalents ? "Pyroignition" : "Execute";
    
    let talentOne = talents == mageTalents ? mageAttack : warriorAttack;
    let talentTwo = talents == mageTalents ? mageExecute : warriorExecute;
    
    let playerOverviewScreen = `
    <div id="playerInfo">   
                <h5>${playerName}</h5><h6>${playerClass}</h6><h6>Level : ${playerLevel}</h6><h6>${currentPlayerExp} / ${requiredPlayerExp}</h6>
        </div>
        <div id="playerOverview">  
            <div id="statsContainer">
                <button onclick="showThis(this)" value="false">stats</button>
                <div id="stats" style="display: none">
                    <div>Agility ${agility} <button ${disableStats} onclick="increaseStats(0)">${statsAvailable}</button></div>
                    <div>Strength ${strength} <button ${disableStats} onclick="increaseStats(1)">${statsAvailable}</button></div>
                    <div>Intelligence ${intelligence} <button ${disableStats} onclick="increaseStats(2)">${statsAvailable}</button></div>
                </div>
            </div>
            <div id="talentsContainer">
                <button onclick="showThis(this)" value="false">talents</button>
                <div id="talents" style="display: none">
                    <div>${talentOneDescription} ${talentOne} <button ${disableTalents} onclick="increaseTalent(0)">${talentsAvailable}</button></div>
                    <div>${talentTwoDescription} ${talentTwo} <button ${disableTalents} onclick="increaseTalent(1)">${talentsAvailable}</button></div>
                </div>
            </div>
            
            <button id="nextGame" onclick="choseMap()">${gameInit}</button>
        </div>
        <div id="square"></div>
    `;

shortApp.innerHTML = playerOverviewScreen;
}
