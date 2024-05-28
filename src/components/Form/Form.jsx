import Message from "../form-components/message-text/message";
import Query from "../form-components/query-field/query";
import Dates from "../form-components/text-field/dates";
import Button from "../form-components/button/Button";
import './form.css'
import { useState } from "react";

const Form = () => {

    const [values, setValue] = useState('')

    const handleEventChange = ({ name, value }) => {
        setValue(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleEventChecked = ({valueInput,check}) => {
        console.log(valueInput,check)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <form onSubmit={handleSubmit}  >
            <h1>Contact Us</h1>
            <Dates 
            label="First Name"
            name="name"  
            type="text" 
            values={values.name} 
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
            />

            <Dates 
            label="I consent to being contacted by the team"
            type= "checkbox"
            onChangeEvent= {handleEventChange} 
            />
            
            <Button onClick={handleSubmit}/>
    
        </form>
    )
}

export default Form;