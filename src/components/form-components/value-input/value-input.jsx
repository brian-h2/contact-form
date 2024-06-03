import './valueInput.css'

const ValueInput = ({label,type,onValueInput}) => {

    const handleClickCheck = (e) => {
        onValueInput(e.target.checked)
    }

    return (
        <div className="terms-conditions">
            <label>{label} *</label>
            <input className="terms-conditions-input" type={type} name="radio" value={label} onClick={handleClickCheck}></input>
        </div>
    )
}

export default ValueInput;