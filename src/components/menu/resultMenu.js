
function ResultMenu(props) {
    const { victory, emptyСells, turn } = props
    let result = "";
    let visible = 'none';
    if (victory) {
        visible = 'block'
        result = "WIN " + turn;
    }
    if (!emptyСells) {
        visible = 'block'
        result = "nobody won"
    }


    return (
        <div className="conteiner__resultMenu" style={{ display: visible }}>
            <p className="text-uppercase">{result}</p>
            <button id="back_from_result" type="button" className="btn btn-secondary">Menu</button>
        </div >
    )

}
export default ResultMenu