import { useState } from "react"

const ValueInput = ({label,type,onValueInput}) => {

    const handleClickCheck = (e) => {
        onValueInput(e.target.checked)
    }

    return (
        <div className="terms-conditions">
            <label>{label}</label>
            <input type={type} name="radio" value={label} onClick={handleClickCheck}></input>
        </div>
    )
}

export default ValueInput;