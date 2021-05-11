import gameSymbols from "../../enum/gameSymbols"
function GameSymbol(props) {
    return (
        <div>
            <p>Select symbol</p>
            <button id={gameSymbols.cross}>{gameSymbols.cross}</button>
            <button id={gameSymbols.zero}>{gameSymbols.zero}</button>
        </div>
    );

}

export default GameSymbol;