import React, { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';



const DarkModeToggle = () => {
    
    const mode =localStorage.getItem('darkMode')==='true';
    
  const [isDarkMode, setIsDarkMode] = useState(mode);

  useEffect(() => {
      localStorage.setItem('darkMode',isDarkMode.toString());
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* {isDarkMode && <DarkModeIcon />} */}
      <Switch onClick={toggleDarkMode}  />
      {isDarkMode ? <p className="text-center" >Light</p>:
      
      <p className="text-center">Dark</p>}
      <IconButton />
    </>
  );
};

export default DarkModeToggle;
