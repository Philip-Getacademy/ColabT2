function combatStatus() {

    
    

    let executeTarget = warriorExecute > mageExecute ? warriorExecute : mageExecute;

    let disableAction = currentMonsterHealth <= 0 || currentPlayerHealth <= 0 ? "disabled" : "";
    let enableAction = currentMonsterHealth <=0 || currentPlayerHealth <= 0 ? "" : "disabled";
    let enableExecute = currentMonsterHealth <= (monsterHealth / 100) * executeTarget ? "" : "disabled";






    let attackName = playerClass == "mage" ? "Fireball" : "Swing";

    if(currentMonsterHealth <= 0) enableExecute = "disabled";

    // let timeOut = timeOut(function(){}, 3000);

    
    if (chosenMap === "castle") {

        bossStatus = 1;
        let drawView = `
        <div id="playerInfo">   
                    <h5>${playerName}</h5><h6>${playerClass}</h6><h6>Level : ${playerLevel}</h6><h6>${currentPlayerExp} / ${requiredPlayerExp}</h6>
            </div>
            <!-- cove and caste = row -->
            <div id="castle">          
                <div id="player">
                    <p id="HP">Player Health: ${currentPlayerHealth}</p>
                    <img id="classImage" src="Pictures/${playerClass}.png">
                    <div>Damage ${strength}<br> Crit Chance ${agility * 2}<br> Dodge Chance ${agility}<br></div>

                    <button ${disableAction} onclick="playerAttack()">${attackName}</button>   
                    <button ${enableExecute} onclick="playerExecute()">Execute</button>   
                </div>

                <div id="action">
                    <div id="combatlog">
                        <div id="playerLog">
                            ${playerLog}
                        </div>

                        <div id="monsterLog">
                            ${monsterLog}
                        </div>
                    </div>
                </div>
                
                <div id="computer">
                    <p id="HP">Monster Health: ${currentMonsterHealth}</p>
                    <img id="classImage" src="Pictures/${chosenMap}Boss.png">

                    <div>Health ${monsterStats[0]} <br> Armor ${currentMonsterArmor} <br> Damage ${monsterStats[2]}</div>

                    <button ${enableAction} onclick="combatStats()">Show stats...</button>
                </div>
            </div>   
        `;

        shortApp.innerHTML = drawView;
    }

    else if (chosenMap === "cove") {

        bossStatus = 2;
        let drawView = `
        <div id="playerInfo">   
                    <h5>${playerName}</h5><h6>${playerClass}</h6><h6>Level : ${playerLevel}</h6><h6>${currentPlayerExp} / ${requiredPlayerExp}</h6>
            </div>
            <!-- cove and caste = row -->
            <div id="castle">          
                <div id="player">
                    <p id="HP">Player Health: ${currentPlayerHealth}</p>
                    <img id="classImage" src="Pictures/${playerClass}.png">
                    <div>Damage ${strength}<br> Crit Chance ${agility * 2}<br> Dodge Chance ${agility}<br></div>

                    <button ${disableAction} onclick="playerAttack()">Attack</button>   
                    <button ${enableExecute} onclick="playerExecute()">Execute</button>   
                </div>

                <div id="action">
                    <div id="combatlog">
                        <div id="playerLog">
                            ${playerLog}
                        </div>

                        <div id="monsterLog">
                            ${monsterLog}
                            
                        </div>
                    </div>
                </div>
                
                <div id="computer">
                    <p id="HP">Monster Health: ${currentMonsterHealth}</p>
                    <img id="classImage" src="Pictures/${chosenMap}Boss.png">
                    <div>Health ${monsterStats[0]} <br> Armor ${currentMonsterArmor} <br> Damage ${monsterStats[2]}</div>
                    <button ${enableAction} onclick="combatStats()">Show stats...</button>
                </div>
            </div>   
        `;

        shortApp.innerHTML = drawView;
    }

    else return choseMap(); 
}

