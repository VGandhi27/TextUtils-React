import'./App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App(){

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     }) 
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="grey";
    showAlert(" Dark Mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert(" Light Mode has been enabled","success");
  }
}
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the Text here" mode={mode}/>

      </div>
    
    </>
   
  );
}

export default App;
