// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, {useState} from 'react'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  
  const [write, setWrite] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,   
      type : type
    })
    setTimeout(() => {
      setAlert('') //('') can be replaced by (null)
    }, 1500);

  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#000'
      setWrite('Disable Dark Mode')
      showAlert(' Dark Mode has been enabled!', 'success')

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setWrite('Enable Dark Mode')
      showAlert(' Dark Mode has been disabled!', 'success')
    }
  }
  
  return (
    <>
      <Router>
            {/* <Navbar title="TextUtils" aboutText="About" mode={mode} write={write} toggleMode={toggleMode} />*/
           <Alert alert={alert}/>}
           <Navbar title="TextUtils" aboutText="About" mode={mode} write={write} toggleMode={toggleMode}/>  
        <div className="container my-3">

         <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter Text to Analyze" showAlert={showAlert} mode={mode}/>} >
            </Route>
         </Routes>
        </div>
    </Router>
   </>
  )
}

export default App;
