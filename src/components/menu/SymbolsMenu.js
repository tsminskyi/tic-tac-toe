import gameSymbols from "../../enum/gameSymbols"
import gameMode from "../../enum/gameMode"
const SymbolsMenu = (props) => {

    if (props.mode === gameMode.eve) {
        document.querySelector(`#${gameSymbols.cross}`).classList.remove("btn-info")
        document.querySelector(`#${gameSymbols.zero}`).classList.remove("btn-info")
    }

    const getClassNameConteiner = (mode) => {
        const baseClass = ''
        if (mode === gameMode.eve)
            return baseClass + ' hidden'
        return baseClass
    }
   
    return (
        <div className={getClassNameConteiner(props.mode)}>
            <p className="text-uppercase">Select symbol</p>
            <div className="btn-group">
                <button id={gameSymbols.cross} type="button" className="btn btn-secondary">{gameSymbols.cross}</button>
                <button id={gameSymbols.zero} type="button" className="btn btn-secondary">{gameSymbols.zero}</button>
            </div>
        </div>

    );

}

export default SymbolsMenu;