import gameMode from '../../../enum/gameMode';
import logicAI from './logicAI';
import registrationMove from '../../event/registrationMove';
import isMove from '../../isMove';

const moveAI = (props) => {

    const {
        mode, isFirstPlayer,
        playerFirstSymbol, playerSecondSymbol,
        victoryCells
    } = props;

    if (mode === gameMode.eve) {

        const currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol;

        const move = logicAI(props, currentSymbol);
        if (isMove(props.playingField) && victoryCells == null) {

            registrationMove(props, move);

        }

    }
    if (mode === gameMode.pve) {

        if (!isFirstPlayer) {

            const move = logicAI(props, playerSecondSymbol);
            if (isMove(props.playingField) && victoryCells == null) {

                registrationMove(props, move);

            }

        }

    }

};
export default moveAI;
