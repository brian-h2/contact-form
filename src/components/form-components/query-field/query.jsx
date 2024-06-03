import { useState } from "react"
import './query.css'

const Query = ({label, type, onValueChecked}) => {

    const [checked,setChecked] = useState(true)

    const handleValueQuery = (e) => {
        const nameInput = e.target.value;
        setChecked(e.target.checked)
        onValueChecked({valueInput: nameInput, check: checked})
    }

    return (
        <div className="query">
            <label>Query Type *</label>
            <div className="query-options">
                <label>{label}</label>
                <input type={type} name="radio" value={label} onClick={handleValueQuery}></input>
            </div>
           <div className="query-options">
                <label>Support Request</label>
                <input type="radio" name="radio" value="Support Request" onClick={handleValueQuery}></input>
           </div>
        </div>
    )
}

export default Query;