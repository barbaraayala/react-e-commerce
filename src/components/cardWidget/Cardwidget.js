
import { BsFillCartCheckFill } from "react-icons/bs";

const CardWidget = (props) => {
    return (
        <header>
         
            <p><BsFillCartCheckFill/> {props.cantidad} </p>
        </header>
    )

}

export default CardWidget