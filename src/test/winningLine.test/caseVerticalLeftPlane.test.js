import winningLine from '../../service/logic/winningLine';
import leftPlane from '../../service/logic/winPlaneСheck/leftPlane';
import rightPlane from '../../service/logic/winPlaneСheck/rightPlane';
import horizontalPlane from '../../service/logic/winPlaneСheck/horizontalPlane';
import verticalPlane from '../../service/logic/winPlaneСheck/verticalPlane';

const symbol = 'X';
const gameRule = 3;

const arrCase = [
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', 'X', 'X', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', 'X', 'X', ' ',],
    [' ', ' ', ' ', 'X', ' ', ' ',]
];
const indexForCheckCase = { rowIndex: 2, collIndex: 3 };

const expectWinningLine = [{ rowIndex: 1, collIndex: 2 }, { rowIndex: 3, collIndex: 4 }, { rowIndex: 3, collIndex: 3 }, { rowIndex: 4, collIndex: 3 }, { rowIndex: 1, collIndex: 3 }, { rowIndex: 2, collIndex: 3 }];
const expectVerticalPlane = [{ rowIndex: 3, collIndex: 3 }, { rowIndex: 4, collIndex: 3 }, { rowIndex: 1, collIndex: 3 }];
const expectLeftPlane = [{ rowIndex: 1, collIndex: 2 }, { rowIndex: 3, collIndex: 4 }];
test('the function should return a winning array of indices', () => {

    expect(leftPlane(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectLeftPlane);
    expect(rightPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(verticalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectVerticalPlane);
    expect(horizontalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(winningLine(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectWinningLine);

});