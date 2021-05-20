import React from 'react';

const ResultMenu = (props) => {

    const { victory, emptyСells, turn } = props;
    let result = '';
    if (victory) {

        result = `WIN ${turn}`;

    }
    if (!emptyСells) {

        result = 'nobody won';

    }
    const getClassName = () => {

        const baseClass = 'conteiner__resultMenu';
        if (victory || !emptyСells) return baseClass;
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
