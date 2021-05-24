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

        if (isMove(props.playingField) && victoryCells == null) {

            const move = logicAI(props, currentSymbol);
            registrationMove(props, move);

        }

    }
    if (mode === gameMode.pve) {

        if (!isFirstPlayer) {

            if (isMove(props.playingField) && victoryCells == null) {

                const move = logicAI(props, playerSecondSymbol);
                registrationMove(props, move);

            }

        }

    }

};
export default moveAI;
