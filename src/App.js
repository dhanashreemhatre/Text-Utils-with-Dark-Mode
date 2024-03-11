import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import TextForm from './Components/Main/TextForm';
import sun from './darkmode/sun.svg';
import moon from './darkmode/moon-night-rainy.svg';

function App() {
  const [theme, setTheme] = useState('dark'); // Initially set to dark theme

  const handleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
 
  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar darkmodebutton={theme === 'dark' ? moon : sun} handleDarkMode={handleDarkMode} whichtheme={theme} />
      <TextForm head='Transform The text as you want' />
    </div>
  );
}

export default App;
