import boardSizeEnum from "../../enum/gameBoardSize"

function BoardSize() {
    return (
        <div>
            <p className="text-uppercase">Select the board size</p>
            <div className="btn-group">
                <button id={boardSizeEnum.small} type="button" className="btn btn-secondary"> {boardSizeEnum.small} X {boardSizeEnum.small}</button>
                <button id={boardSizeEnum.medium} type="button" className="btn btn-secondary">{boardSizeEnum.medium} X {boardSizeEnum.medium}</button>
                <button id={boardSizeEnum.large} type="button" className="btn btn-secondary">{boardSizeEnum.large} X {boardSizeEnum.large}</button>
            </div>
        </div>

    );

}

export default BoardSize;