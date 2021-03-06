import gameRules from '../../enum/gameRules';
import gameMode from '../../enum/gameMode';
import filledCellsNearby from '../filledCellsNearby';
import registrationMove from './registrationMove';

const clickWithRules = (event, props) => {

    const {
        isFirstPlayer, gameRule, victoryCells, mode, isFirstClick
    } = props;
    const { playingField } = props;

    if (victoryCells == null) {

        const [row, coll] = event.target.id.split('.');
        const indexObj = { rowIndex: Number(row), collIndex: Number(coll) };

        if (mode === gameMode.pvp) {

            if (filledCellsNearby(indexObj, playingField) || gameRule === gameRules.classic || isFirstClick) {

                registrationMove(props, indexObj);

            }

            return true;

        }
        if (mode === gameMode.pve) {

            if (isFirstPlayer) {

                if (filledCellsNearby(indexObj, playingField) || gameRule === gameRules.classic || isFirstClick) {

                    registrationMove(props, indexObj);

                }

            }

            return true;

        }

    }

    return false;

};
export default clickWithRules;
