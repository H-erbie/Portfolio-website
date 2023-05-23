import React, { useContext, useEffect, useRef, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || true
  );
  const changeTheme = () => {
    setTheme(!theme);
  };
  const changeActiveLink = (url) => {
    setActiveLink(url);
  };
  const activeOnScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home' 
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        if(window.scrollY >= (section.offsetTop - (section.clientHeight / 3))){
          currentSection = section.id;
          setActiveLink(currentSection)
        }
      });
      
    })
  }
  
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    activeOnScroll();
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        activeLink,
        changeActiveLink,
        theme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
