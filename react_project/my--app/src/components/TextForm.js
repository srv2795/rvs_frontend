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

    const handleClear= () => {
        let newtext = ""
        setText(newtext)
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange= {handleOnChange} value = {text} rows="8">Enter your text here...</textarea>
                </div>
                <button className="btn btn-primary" onClick={handleOnClick} >Convert to uppercase</button>
                <button className="btn btn-primary" onClick={handleClear} >Clear text</button>
            </div>
            <div className="container mb-3">Your text summary</div>
            <p>{text.split("").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} minutes needed</p>
        </>
    )
}