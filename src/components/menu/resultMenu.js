import React from 'react';

const ResultMenu = (props) => {

    const { victory, emptyCells, turn } = props;
    let result = '';
    if (victory) {

        result = `WIN ${turn}`;

    }
    if (!emptyCells) {

        result = 'nobody won';

    }
    const getClassName = () => {

        const baseClass = 'conteiner__resultMenu';
        if (victory || !emptyCells) return baseClass;
        return `${baseClass} hidden`;

    };

    return (

        <div className={getClassName()}>
            <p className='text-uppercase'>{result}</p>
            <button id='back_from_result' type='button' className='btn btn-secondary'>Menu</button>
        </div>

    );

};
export default ResultMenu;
