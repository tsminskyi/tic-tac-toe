import circle from "../../img/circle-regular.svg"
import times from "../../img/times-solid.svg"
import gameSymbols from "../../enum/gameSymbols"

const FieldCell = (props) => {
    const { style, value, index } = props;
    const img = value === gameSymbols.zero ? circle : times;
    const id = `${index.rowIndex}.${index.collIndex}`;

    if (value !== gameSymbols.emptiness) {


        return (
            <div id={id} style={{ width: style.size, height: style.size, backgroundColor: style.backgroundColor }} >
                <img src={img} alt="" />
            </div>)
    }

    return (
        <div id={id} style={{ width: style.size, height: style.size }}>

        </div>
    )


}

export default FieldCell;