import { useState } from "react";

const Dates = ({label, name, type, onChangeEvent}) =>  {

    const [value,setValue] = useState('')

    const handleEvenSubmit = (e) => {
        const newValue = e.target.value;
        const newName = e.target.name;
        setValue(newValue)
        onChangeEvent({ name: newName, value: newValue })
    }

    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} name={name} onChange={handleEvenSubmit}/>
        </div>
    )
}

export default Dates;