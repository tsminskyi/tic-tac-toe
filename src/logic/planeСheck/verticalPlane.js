

function verticalPlane(props, index, symbol) {
    const indArr = [];
    for (let i = 1; i < props.gameRule; i++) {


        if (index.rowIndex + i < props.playingField.length) {

            if (props.playingField[index.rowIndex + i][index.collIndex] === symbol) {

                indArr.push({ rowIndex: index.rowIndex + i, collIndex: index.collIndex })

            } else break;

        }

    }

    for (let i = 1; i < props.gameRule; i++) {

        if (index.rowIndex - i >= 0) {
            if (props.playingField[index.rowIndex - i][index.collIndex] === symbol) {

                indArr.push({ rowIndex: index.rowIndex - i, collIndex: index.collIndex })

            } else break;

        }

    }

    return indArr;
}

export default verticalPlane