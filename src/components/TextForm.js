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
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#584d4d',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtarSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters </p>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
