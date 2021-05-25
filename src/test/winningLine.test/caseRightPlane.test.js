import winningLine from '../../service/logic/winningLine';
import leftPlane from '../../service/logic/winPlaneСheck/leftPlane';
import rightPlane from '../../service/logic/winPlaneСheck/rightPlane';
import horizontalPlane from '../../service/logic/winPlaneСheck/horizontalPlane';
import verticalPlane from '../../service/logic/winPlaneСheck/verticalPlane';

const symbol = 'X';
const gameRule = 3;

const arrCase = [
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', 'X', ' ',],
    [' ', ' ', ' ', 'X', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',]
];
const indexForCheckCase = { rowIndex: 0, collIndex: 5 };

const expectWinningLine = [{ rowIndex: 1, collIndex: 4 }, { rowIndex: 2, collIndex: 3 }, { rowIndex: 0, collIndex: 5 }];
const expectRightPlane = [{ rowIndex: 1, collIndex: 4 }, { rowIndex: 2, collIndex: 3 }];
test('the function should return a winning array of indices', () => {

    expect(leftPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(rightPlane(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectRightPlane);
    expect(verticalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(horizontalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(winningLine(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectWinningLine);

});