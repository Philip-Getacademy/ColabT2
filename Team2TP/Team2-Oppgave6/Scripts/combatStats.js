function combatStats() {

    calculatePlayerExperience();
    
    let enableAction = monsterHealth <=0 || playerHealth <= 0 ? "" : "disabled";


    let drawCombatStatus = `
    <p></p>
    <button onclick="drawTown()">Back to Town</button>
    
    `;

    shortApp.innerHTML = drawCombatStatus;
    

}