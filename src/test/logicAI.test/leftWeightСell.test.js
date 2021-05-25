import logicAI from '../../service/logic/AI/logicAI';
import horizontalWeightСell from '../../service/logic/AI/horizontalWeightСell';
import verticalWeightСell from '../../service/logic/AI/verticalWeightСell';
import leftWeightСell from '../../service/logic/AI/leftWeightСell';
import rightWeightСell from '../../service/logic/AI/rightWeightСell';
import filledCellsNearby from '../../service/filledCellsNearby';

const playingField = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'O', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'O', 'X', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
const props = { gameRule: 5, playingField };

const symbol = 'X';
const gameRule = 5;
const expectReturnCase = { rowIndex: 7, collIndex: 6, weigh: 63 };
test('the function should return a best index for the move - X', () => {

    expect(filledCellsNearby(expectReturnCase, playingField)).toBe(true);
    expect(horizontalWeightСell(playingField, expectReturnCase, symbol, gameRule)).toEqual(21);
    expect(verticalWeightСell(playingField, expectReturnCase, symbol, gameRule)).toEqual(0);
    expect(leftWeightСell(playingField, expectReturnCase, symbol, gameRule)).toEqual(63);
    expect(rightWeightСell(playingField, expectReturnCase, symbol, gameRule)).toEqual(21);
    expect(logicAI(props, symbol)).toEqual(expectReturnCase);

});