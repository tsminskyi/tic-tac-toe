import gameSymbols from "../../enum/gameSymbols"
import gameMode from "../../enum/gameMode"
function GameSymbol(props) {

    const displayModifier = props.mode === gameMode.eve ? 'none' : 'block'
    if (displayModifier === 'none') {
        document.querySelector(`#${gameSymbols.cross}`).classList.remove("btn-info")
        document.querySelector(`#${gameSymbols.zero}`).classList.remove("btn-info")
    }
    return (
        <div style={{ display: displayModifier }}>
            <p className="text-uppercase">Select symbol</p>
            <div className="btn-group">
                <button id={gameSymbols.cross} type="button" className="btn btn-secondary">{gameSymbols.cross}</button>
                <button id={gameSymbols.zero} type="button" className="btn btn-secondary">{gameSymbols.zero}</button>
            </div>
        </div>

    );

}

export default GameSymbol;