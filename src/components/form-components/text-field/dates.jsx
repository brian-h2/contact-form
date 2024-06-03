import { useState } from "react";
import './dates.css'

const Dates = ({label, name, type, onChangeEvent}) =>  {

    const [value,setValue] = useState('')
    

    const handleEvenSubmit = (e) => {
        const newValue = e.target.value;
        const newName = e.target.name;
        setValue(newValue)
        onChangeEvent({ name: newName, value: newValue })
       
    }

    return (
        <div className="box-dates">
            <label>{label} *</label>
            <input type={type} value={value} name={name} onChange={handleEvenSubmit}/>
        </div>
    )
}

export default Dates;