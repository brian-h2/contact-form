import { useState } from "react"

const Query = ({label, type, onValueChecked}) => {

    const [checked,setChecked] = useState(true)

    const handleValueQuery = (e) => {
        const nameInput = e.target.value;
        setChecked(e.target.checked)
        onValueChecked({valueInput: nameInput, check: checked})
    }

    //Obtenemos el input de terminos y condiciones
    //Generamos alertas
    //Generamos encuadres cuando una caja se selecciona
    //Mostramos los datos del form al dar submit

    return (
        <div className="query">
            <div className="query-options">
                <label>{label}</label>
                <input type={type} name="radio" value={label} onClick={handleValueQuery}></input>
            </div>
           <div>
                <label>Support Request</label>
                <input type="radio" name="radio" value="Support Request" onClick={handleValueQuery}></input>
           </div>
        </div>
    )
}

export default Query;