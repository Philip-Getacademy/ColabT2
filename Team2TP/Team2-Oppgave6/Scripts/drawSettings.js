function drawSettings() {

    let settingsScreen = `
        <div class="preGame" id="preGame" style="justify-content: space-between;">
            <div id="gameHeadingH1">
                <h1 style="margin-bottom: 10%;">${gameName}</h1>
            </div>
            <textarea id="enterName" maxlength="20" oninput="playerName = this.value" placeholder="Player name..." value="${playerName}"></textarea>
            <div style="display: flex; justify-content: space-evenly; width: 50%;">
                <label class="container">
                    <input class="classSelector" type="radio" name="class" onchange="playerClass = 'warrior'">Warrior</input>
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input class="classSelector" type="radio" name="class" onchange="playerClass = 'mage'">Mage</input>
                    <span class="checkmark"></span>
                </label>
            </div>
            <button onclick="drawTown()" style="width: 50%; height: 10%; border-radius: 2px;">Confirm</button>
        </div>
        
    `;

shortApp.innerHTML = settingsScreen;
}