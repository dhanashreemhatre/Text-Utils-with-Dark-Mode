import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import TextForm from './Components/Main/TextForm';
import sun from './darkmode/sun.svg';
import moon from './darkmode/moon-night-rainy.svg';
import About from './Pages/About'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('dark'); // Initially set to dark theme

  const handleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
 
  return (
    <BrowserRouter>
    <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
   
      <Navbar darkmodebutton={theme === 'dark' ? moon : sun} handleDarkMode={handleDarkMode} whichtheme={theme} />
      <Routes>
        <Route exact path='/' element={<TextForm head='Transform The text as you want' />} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
