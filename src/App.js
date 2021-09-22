import React, { useState, useEffect } from 'react'
//Components
import Sidebar from "./Components/Sidebar";
//Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { Switch, Route } from 'react-router'
//MaterialUi
import SwitchUI from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';

//Style
import styled from "styled-components";
import ThanksYou from './Pages/ThanksYou';
function setThemeFromLocalStorage() {
  if (localStorage.getItem('theme') != null) {
    return localStorage.getItem('theme')
  }
  return 'light-theme';
}

function setInputChecked() {
  if (localStorage.getItem('theme') === 'light-theme') {
    return true;
  }
  return false;
}


function App() {

  const [theme, setTheme] = useState(setThemeFromLocalStorage());
  const [checked, setChecked] = useState(setInputChecked());
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;

  }, [theme])

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
      setChecked(false)
      localStorage.setItem('theme', 'dark-theme')
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#3A4531')

    }
    else {
      setTheme('light-theme')
      setChecked(true)
      localStorage.setItem('theme', 'light-theme')
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#157575')

    }
  }

  return (
    <div className="app">
      <Sidebar navToggle={navToggle} />
      <header>
        <div className='menu'>
          <div className='ham-burger-menu'>
            <IconButton onClick={() => {
              setNavToggle(!navToggle);
            }}>
              <MenuIcon />
            </IconButton>
          </div>

          <div className='light-dark-mode'>
            <div className='left-content'>
              <Brightness4Icon />
            </div>
            <div className='right-content'>
              <SwitchUI
                value=""
                checked={checked}
                color={'default'}
                onClick={themeToggler}
                inputProps={{ 'aria-label': '' }}
                size='medium'
                style={{ transition: 'ease-in-out .3s' }}
              />
            </div>
          </div>
        </div>
      </header>

      <MainContentStyle>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/thanks" exact>
            <ThanksYou />
          </Route>


        </Switch>

      </MainContentStyle>
    </div>
  );
}

const MainContentStyle = styled.main`
position: relative;
min-height: 100vh;
@media screen and (max-width:1200px) {
    padding-bottom: 2.5rem;

}


`;
export default App;
