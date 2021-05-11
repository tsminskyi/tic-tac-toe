import gameMode from "../../enum/gameMode"
function GameModes() {
    return (
        <div>
            <p>Select the game mode</p>
            <button id={gameMode.pve}>Player vs computer</button>
            <button id={gameMode.pvp}>Player vs player</button>
            <button id={gameMode.eve}>computer vs computer</button>
        </div>
    );

}

export default GameModes;