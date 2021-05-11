import gameMode from "../../enum/gameMode"
function GameModes() {
    return (
        <div>
            <p className="text-uppercase">Select the game mode</p>
            <div className="btn-group">
                <button id={gameMode.pve} type="button" className="btn btn-secondary">Player vs computer</button>
                <button id={gameMode.pvp} type="button" className="btn btn-secondary">Player vs player</button>
                <button id={gameMode.eve} type="button" className="btn btn-secondary">Computer vs Computer</button>
            </div>
        </div>

    );

}

export default GameModes;