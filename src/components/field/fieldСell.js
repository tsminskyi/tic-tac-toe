import circle from "../../img/circle-regular.svg"
import times from "../../img/times-solid.svg"
import symbolEnum from "../../enum/gameSymbols"

function FieldСell(props) {
    const { style, value, index } = props;
    const img = value === symbolEnum.zero ? circle : times;
    const id = `${index.rowIndex}.${index.collIndex}`;

    if (value !== symbolEnum.emptiness) {


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

export default FieldСell;