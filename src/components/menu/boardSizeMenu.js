import boardSizeEnum from "../../enum/gameBoardSize"

function BoardSize() {
    return (
        <div>
            <p>Select the board size</p>
            <button id={boardSizeEnum.small}> {boardSizeEnum.small} X {boardSizeEnum.small}</button>
            <button id={boardSizeEnum.medium}>{boardSizeEnum.medium} X {boardSizeEnum.medium}</button>
            <button id={boardSizeEnum.large}>{boardSizeEnum.large} X {boardSizeEnum.large}</button>
        </div>
    );

}

export default BoardSize;