import React from 'react';
import { Navbar } from "./Components/Basics/Navbar";
import { TextForm } from "./Components/Basics/TextForm";
import { useState } from 'react';
import { About } from "./Components/Basics/About";
import { Alert } from './Components/Basics/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = ()=> {

  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '	#696969';
      showAlert('dark mode has been enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success');
    }
  }

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className = 'container my-3'>
    
          <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading = 'Enter the text to analyze below' mode = {mode}/>} />  
          </Routes>
        
    </div>
    </Router>
    </>
  );
}

export default App;
