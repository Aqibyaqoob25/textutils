import React,{useState} from 'react'

export default function Textfrom(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
      let newText = ('');
      setText(newText)
      props.showAlert("Text cleared","success");
  }
  const handleCopy=()=>{
    const text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard   ","success");
}
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces remove","success");
}

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] =useState("");
  return (
     <>
    <div className='container' style={{ color: props.mode ==="dark" ? "white" : "#042743"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} rows="8"></textarea>
      </div>
    </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Extra Spaces Remove</button>
    <div className="container my-3"style={{ color: props.mode ==="dark" ? "white" : "#042743"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read  </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here.."}</p>
    </div>
</>
  )
}

