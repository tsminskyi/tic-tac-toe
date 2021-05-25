import winningLine from '../../service/logic/winningLine';
import leftPlane from '../../service/logic/winPlaneСheck/leftPlane';
import rightPlane from '../../service/logic/winPlaneСheck/rightPlane';
import horizontalPlane from '../../service/logic/winPlaneСheck/horizontalPlane';
import verticalPlane from '../../service/logic/winPlaneСheck/verticalPlane';

const symbol = 'X';
const gameRule = 3;

const arrCase = [
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ',]
];
const indexForCheckCase = { rowIndex: 2, collIndex: 3 };

const expectWinningLine = null
test('the function should return null(Winning Line not faund)', () => {

    expect(leftPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(rightPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(verticalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(horizontalPlane(arrCase, indexForCheckCase, symbol, gameRule)).toHaveLength(0);
    expect(winningLine(arrCase, indexForCheckCase, symbol, gameRule)).toEqual(expectWinningLine);

});