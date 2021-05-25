import winningLine from '../../service/logic/winningLine';
import leftPlane from '../../service/logic/winPlaneСheck/leftPlane';
import rightPlane from '../../service/logic/winPlaneСheck/rightPlane';
import horizontalPlane from '../../service/logic/winPlaneСheck/horizontalPlane';
import verticalPlane from '../../service/logic/winPlaneСheck/verticalPlane';

const symbol = 'X';
const gameRule = 3;

const arrCase = [
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', 'X', ' ', ' ', ' ', ' ',],
    [' ', ' ', 'X', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',]
];
const indexForCheckCase = { rowIndex: 0, collIndex: 0 };

const expectWinningLine = [{ rowIndex: 1, collIndex: 1 }, { rowIndex: 2, collIndex: 2 }, { rowIndex: 0, collIndex: 0 }];
const expectLeftPlane = [{ rowIndex: 1, collIndex: 1 }, { rowIndex: 2, collIndex: 2 }];
test('the function should return a winning array of indices', () => {

    expect(leftPlane(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectLeftPlane);
    expect(rightPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(verticalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(horizontalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(winningLine(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectWinningLine);

});