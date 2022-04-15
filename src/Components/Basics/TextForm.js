import { useState } from "react";

export const TextForm = (props) => {
    const [text, setText] = useState('your text here!');
    //setText('changed');
    const uppercase = ()=>{
        //console.log('uppercase', text);
        let newText = text;
        //console.log('newText : ',newText);
        newText = newText.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const lowercase = ()=>{
        //console.log('uppercase', text);
        let newText = text;
        //console.log('newText : ',newText);
        newText = newText.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const clearText = ()=>{
        setText('');
        props.showAlert("text cleared", "success");
    }
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success");
    }
    const onchangeHandler = (event)=>{
        //console.log('onchange');
        setText(event.target.value);
    }
    const copy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied", "success");
    }
    return (
        <>
            <div className="mb-3 container my-5" style={{color: props.mode === 'dark'?'white':'black'}}>
                <label htmlFor="myBox" className="form-label">{props.title}</label>
                <textarea className="form-control" id="myBox" rows="4" value={text} onChange={onchangeHandler} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <div className="mb-3 container my-1">
                <button type="button" className="btn btn-primary mx-1" onClick={uppercase}>Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={lowercase}>Convert to lowercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={removeSpace}>Remove extra spaces</button>
                <button type="button" className="btn btn-primary mx-1" onClick={copy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-1"onClick={clearText}>Clear text</button>

            </div>

            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h4>your text summary</h4>
                <p>{text.split(' ').length-1} words and {text.length} characters</p>
                <p>{Math.round(0.4*text.split(' ').length)} minutes read</p>
            </div>
        </>
    );
}