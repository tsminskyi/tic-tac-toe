

function horizontalPlane(props, index, symbol) {
    const indArr = [];

    for (let i = 1; i < props.gameRule; i++) {


        if (index.collIndex + i < props.playingField.length) {

            if (props.playingField[index.rowIndex][index.collIndex + i] === symbol) {

                indArr.push({ rowIndex: index.rowIndex, collIndex: index.collIndex + i })

            } else break;

        }

    }

    for (let i = 1; i < props.gameRule; i++) {

        if (index.collIndex - i >= 0) {
            if (props.playingField[index.rowIndex][index.collIndex - i] === symbol) {

                indArr.push({ rowIndex: index.rowIndex, collIndex: index.collIndex - i })

            } else break;

        }

    }

    return indArr;
}

export default horizontalPlane