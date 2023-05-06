import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [colorMode, setColorMode] = useState("#ffffff");

  const [alert, setAlert] = useState(null);

  const setColor = (event) => {
    setColorMode(event.target.value);
    document.body.style.backgroundColor = colorMode;
  }

  const showAlert = (meesage, type) => {
    setAlert({
      msg: meesage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
      // document.title = "TextUtil - LightMode";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#433f6c';
      showAlert("dark mode enabled", "success");
      // document.title = "TextUtil - DarkMode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} colorMode={colorMode} setColor={setColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes >
          <Route exact path="/about" element={<About  mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Try TextUtils : Word Counter|Character Counter|Change Word|Captalize Text" mode={mode} showalert={showAlert} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
