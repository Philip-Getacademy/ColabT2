function choseMap() {

    // mock model
    // playerName = "Fritjof";
    // playerClass = "Warrior";

    let hideFinalBoss = true;

    currentMonsterHealth = monsterHealth;

    
    let disableAction = chosenMap == "castle" || chosenMap == "cove" ? "" : "disabled";
    hideFinalBoss = hideFinalBoss == true ? 'hidden' : '';

    let choseMapScreen = `
        <div id="playerInfo">   
                <h5>${playerName}</h5><h6>${playerClass}</h6><h6>Level : ${playerLevel}</h6><h6>${currentPlayerExp} / ${requiredPlayerExp}</h6>
        </div>
        <div id="chooseMap">
            <div id="mapOverview">
                <div id="map1" onclick="chosenMap = 'castle', choseMap()"><sup>Castle</sup></div>
                <div id="map2" onclick="chosenMap = 'cove', choseMap()"><sup>Cove</sup></div>
                <div id="map3" onclick="chosenMap = 'finalBoss', choseMap()"style="display: ${hideFinalBoss};" ><sup>FinalBoss</sup></div>
            </div>
            <button ${disableAction} id="nextGame" onclick="combatStatus()">${gameInit}</button>
        </div>
    `;

    shortApp.innerHTML = choseMapScreen;
}