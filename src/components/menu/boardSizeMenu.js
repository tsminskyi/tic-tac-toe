import gameBoardSize from "../../enum/gameBoardSize"

const BoardSizeMenu = () => {
    return (
        <div>
            <p className="text-uppercase">Select the board size</p>
            <div className="btn-group">
                <button id={gameBoardSize.small} type="button" className="btn btn-secondary"> {gameBoardSize.small} X {gameBoardSize.small}</button>
                <button id={gameBoardSize.medium} type="button" className="btn btn-secondary">{gameBoardSize.medium} X {gameBoardSize.medium}</button>
                <button id={gameBoardSize.large} type="button" className="btn btn-secondary">{gameBoardSize.large} X {gameBoardSize.large}</button>
            </div>
        </div>

    );

}

export default BoardSizeMenu;