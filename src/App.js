import React, { useState } from 'react'
import About from './components/About';
import Navbar from'./components/Navbar'; 
import Textfrom from'./components/Textfrom'; 
import Alert from'./components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode ,setMode] = useState("light");
  const [alert, setAlert]=useState("null");

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";

      /* setInterval(() => {
        document.title="TextUtils is Amazing Mode";
        
      },2000);
      setInterval(() => {
        document.title="Install TextUtils Now";
      },1500); */
    }else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }

  }
  return (
     <>
     <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
        <Route path="/" element={<Textfrom showAlert={showAlert} heading='Enter Text Here' mode={mode}></Textfrom>} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </Router>
</>
  );
}

export default App;
