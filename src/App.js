import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import React from 'react'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import PortofoliosPage from "./Pages/PortofolioPage";

import { Switch, Route } from 'react-router'


function App() {
  return (
    <div className="app">
      <Sidebar />
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

.lines {
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .line-1, .line-2, .line-3, .line-4 {
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);

  }
}
`;
export default App;
