import React,{useState} from 'react'

 
export default function TextForm(props) {
    const handleUpClick=()=>{
     //   console.log("Uppercase was clicked"+text); 
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
     // console.log("Lowercase was clicked"+text); 
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert(" Converted to LowerCase","success");

  }
  const handleClearClick=()=>{
    // console.log("Lowercase was clicked"+text); 
     let newText='';
     setText(newText);
     props.showAlert(" Clear Text","success");
 }
    const handleOnChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      console.log("I am Copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to Clipboard ","success");
    }
    const handleExtarSpaces=()=>{
      let newText=text.split(/[" "]+ /);
      setText(newText.join(" "));
      props.showAlert(" Remove Extra Spaces","success");
    }
     
    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>  
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtarSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text summary</h2>
        <p> {text.split(" ").length } words and {text.length} characters </p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
     <p>{text.length>0?text:"Enter Something in textarea above to preview"}</p>
    </div>
    </>
  )
}
