import React, { useState, useEffect } from 'react'
//Components
import Sidebar from "./Components/Sidebar";
//Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import PortofoliosPage from "./Pages/PortofolioPage";
import { Switch, Route } from 'react-router'
//MaterialUi
import SwitchUI from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';

//Style
import styled from "styled-components";
import Header from './Components/Header';


function App() {

  return (
    <div className="app">
      <Sidebar />
      <Header />

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
          <Route path="/portofolios" exact>
            <PortofoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>

        </Switch>

      </MainContentStyle>
    </div>
  );
}

const MainContentStyle = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
@media screen and (max-width:1200px) {
    margin-left: 0;
}


`;
export default App;
