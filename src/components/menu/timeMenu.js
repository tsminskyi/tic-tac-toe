import { useState } from "react"
const TimeMenu = (props) => {
    const { victory, emptyСells } = props;
    const [time, setTime] = useState(0);
    const [startTime] = useState(new Date().getTime());
    
    setTimeout(() => {
        if (emptyСells && !victory) {
            setTime(new Date().getTime() - startTime)
        }

    }, 1000);

    return (
        <div> Time: {new Date(time).getMinutes()}min {new Date(time).getSeconds()}sec</div>
    );
}
export default TimeMenu;