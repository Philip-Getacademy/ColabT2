function drawIntro() {
    let introScreen = `

    <div class="preGame" id="preGame" style="height: 20%; width: 20%;">
        <div id="gameHeadingH1">
            <h1 style="margin-bottom: 10%;">${gameName}</h1>
        </div>
        <div id="trapez"></div>
        <button onclick ="drawSettings()">Play</button>
    </div>

    `;

shortApp.innerHTML = introScreen;

}
