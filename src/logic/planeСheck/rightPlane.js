function rightPlane(props, index, symbol) {

    const indArr = [];

    for (let i = 1; i < props.gameRule; i++) {


        if (index.rowIndex - i >= 0
            && index.collIndex + i < props.playingField[index.rowIndex - i].length) {

            if (props.playingField[index.rowIndex - i][index.collIndex + i] === symbol) {

                indArr.push({ rowIndex: index.rowIndex - i, collIndex: index.collIndex + i })

            } else break;

        }

    }

    for (let i = 1; i < props.gameRule; i++) {

        if (index.rowIndex + i < props.playingField.length
            && index.collIndex - i >= 0) {

            if (props.playingField[index.rowIndex + i][index.collIndex - i] === symbol) {

                indArr.push({ rowIndex: index.rowIndex + i, collIndex: index.collIndex - i })

            } else break;

        }

    }

    return indArr;
}

export default rightPlane