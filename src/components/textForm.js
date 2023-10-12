import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase! ","success");
    }

    const handleLoClick=()=>{
      console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to Lowercase! ","success");
  }

  const handleClearClick=()=>{
    // console.log("Lowercase was clicked" + text);
    let newText='';
    setText(newText);
    props.showAlert("Text has been cleared! ","success");
}

   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed! ","success");
   }
    
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
const [text, setText]= useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
   <h1 >{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length }Minues read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
