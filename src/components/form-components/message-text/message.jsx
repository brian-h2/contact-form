import { useState } from "react";

const Message = ({label, onChangeTextArea}) => {

    const [text,setText] = useState('')

    const handleEventText = (e) => {
        setText(e.target.value)
        onChangeTextArea({text})
    }

    return (
        <div>
            <label>{label}</label>
            <textarea value={text} onChange={handleEventText}> </textarea>
        </div>
        
    )
}

export default Message;