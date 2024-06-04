import { useState } from "react";
import './message.css'
const Message = ({label, onChangeTextArea}) => {

    const [text,setText] = useState('')

    const handleEventText = (e) => {
        setText(e.target.value)
        onChangeTextArea({text})
    }

    return (
        <div className="message-body">
            <label>{label} *</label>
            <textarea value={text} onChange={handleEventText}> </textarea>
        </div>
        
    )
}

export default Message;