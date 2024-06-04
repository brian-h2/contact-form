import Message from "../form-components/message-text/message";
import Query from "../form-components/query-field/query";
import Dates from "../form-components/text-field/dates";
import Button from "../form-components/button/Button";
import ValueInput from '../form-components/value-input/value-input';
import './form.css'
import { useState } from "react";
import Profile from "../form-components/profile/profile";

const Form = () => {

    const [isClicked, setIsClicked] = useState(false)

    //Values of txt
    const [values, setValue] = useState()
    const [valueInputName,setValueInput] = useState({})
    const [textValue, setTextValue] = useState('')
    const [checkLastValue, setCheckLastValue] = useState()
    
    //Generamos encuadres cuando una caja se selecciona
    //Revisar que mensaje se muestra aunque esta vacio

    const handleEventChange = ({ name, value }) => {
        setValue({
            ...values,
            [name] : value
        })
    };

    //Group Inputs
    const handleEventChecked = ({ valueInput, check }) => {
        setValueInput({
            [valueInput]: check
        });
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
        evaluateInputs() ? alert("Mensaje enviado correctamente") : false
    }

    const evaluateInputs = () => {

        //Extraemos el valor del objeto
        const valueInputs = Object.keys(valueInputName)

        if(valueInputs == '') {
            alert("Seleccione una opcion")
            setIsClicked(false)
            return;
        }  else {
            setValueInput(valueInputs)
            setIsClicked(true)
        }
        
        
        if(textValue.length < 5 || textValue == '') {
            Toastify({
                text: "Verifique el mensaje, debe contener al menos 10 letras", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
            }).showToast();
            setIsClicked(false)
            return;
        } 
        else {
            setTextValue(textValue)
            setIsClicked(true)
        }

        if(values.name == "" || values.surname == "" || values.email == undefined) {
            Toastify({
                text: "Verifique los datos ingresados", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
            }).showToast();
            setIsClicked(false)
            return;
        } else {
            setValue(values)
            setIsClicked(true)   
        }

        if(checkLastValue == true) {
            setCheckLastValue(checkLastValue)
            setIsClicked(true)
        } else {
            Toastify({
                text: "Verifique los terminos", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
            }).showToast();
            setIsClicked(false)
            return;
        }
        return true;     
      
    }
    

    return (
        <form onSubmit={handleSubmit} className="form" >
            <h1>Contact Us</h1>
                <div className="form-components">
                    <div className="form-components-date">
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
                    </div>
                    <div className="form-components-date-email">
                        <Dates 
                        label = "Email Address"
                        name="email"
                        type="text" 
                        onChangeEvent= {handleEventChange}
                        className="form-components-date-email"
                        />
                    </div>
                    

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
                    
                    <Button 
                    onClick={handleSubmit} 
                    />

                    {isClicked && <Profile datosPersonales={values} textMessage={textValue}/> }
                </div>
        </form>
       
        
    )
}

export default Form;