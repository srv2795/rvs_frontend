import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter you line");

    const handleOnChange = (event) => {
        console.log("On change clicked")
        setText(event.target.value)
    }

    const handleOnClick = () => {
        console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange= {handleOnChange} value = {text} rows="8">Enter your text here...</textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick} >Convert to uppercase</button>
        </div>
    )
}