import Message from "../form-components/message-text/message";
import Query from "../form-components/query-field/query";
import Dates from "../form-components/text-field/dates";
import Button from "../form-components/button/Button";
import ValueInput from '../form-components/value-input/value-input';
import './form.css'
import { useState } from "react";

const Form = () => {

    //Values of txt
    const [values, setValue] = useState()
    const [valueInputName,setValueInput] = useState('')
    const [textValue, setTextValue] = useState()
    const [checkLastValue, setCheckLastValue] = useState()
    
    const handleEventChange = ({ name, value }) => {
        setValue(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    //Group Inputs
    const handleEventChecked = ({valueInput,check}) => {
        setValueInput({
            [valueInput]: check,
        })
    }

    //CheckBoxLast
    const handleEventCheckedInput = (checkValue) => {
        setCheckLastValue(checkValue)
    }

    //Message
    const handleEventTextArea = ({text}) => {
        setTextValue(text)
    }

    //Evaluate Inputs
    const handleSubmit = (e) => {
        e.preventDefault()
       textValue.length < 5 ? alert("El text debe ser mayor a 5 caracteres") : true
       console.log(valueInputName)
       console.log(textValue)
       console.log(values)
       console.log(checkLastValue)
    }

    return (
        <form onSubmit={handleSubmit}  >
            <h1>Contact Us</h1>
            <Dates 
            label="First Name"
            name="name"  
            type="text"
            onChangeEvent= {handleEventChange}
            />
            <Dates
            label="Last Name"
            name="surname"  
            type="text" 
            onChangeEvent= {handleEventChange}
            />
            <Dates 
            label = "Email Address"
            name="email"
            type="text" 
            onChangeEvent= {handleEventChange}
            />

            <Query
            label="General Enquiry"
            type="radio"
            onValueChecked= {handleEventChecked}
            />

            <Message 
            label = "Message"
            onChangeTextArea={handleEventTextArea}
            />

            <ValueInput 
            label="I consent to being contacted by the team"
            type= "checkbox"
            onValueInput={handleEventCheckedInput}
            />
            
            <Button onClick={handleSubmit}/>
    
        </form>
    )
}

export default Form;