import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

 /* .light-theme {

    --primary-color: #E89005;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #F9F8F8;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(232, 144, 5, .2);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --subtitle-dark-color: rgba(232, 144, 5, .04);
    --border-pulsate-opacity-full: rgba(232, 144, 5, 1);
} */

/* .light-theme {

--primary-color: #E89005;
--background-dark-color: #F9F8F8;
--background-dark-grey: #e4e4e4;
--border-color: #cbced8;
--background-light-color-2: rgba(232, 144, 5, .2);
--white-color: #151515;
--font-light-color: #313131;
--sidebar-dark-color: #E4E4E4;
--subtitle-dark-color: rgba(232, 144, 5, .04);
--border-pulsate-opacity-full: rgba(232, 144, 5, 1);
}

.dark-theme {
    --primary-color: #007bff;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --subtitle-dark-color: rgb(0,123,255, 0.04);
    --border-pulsate-opacity-full: rgba(0,123,255, 1);
} */
.light-theme {

--primary-color: #002939;
--background-dark-color: #e4cfa9;
--background-dark-grey: #e4e4e4;
--border-color: #E4E4E4;
--background-light-color-2: rgba(232, 144, 5, .2);
--white-color:#157575;
--title-color: #002939;
--font-light-color: #313131;
--sidebar-dark-color: #E4E4E4;
--subtitle-dark-color: rgba(232, 144, 5, .04);
--border-pulsate-opacity-full: rgba(232, 144, 5, 1);
--icons: #e4cfa9;
}

.dark-theme {
    --primary-color: #007bff;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --subtitle-dark-color: rgb(0,123,255, 0.04);
    --border-pulsate-opacity-full: rgba(0,123,255, 1);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;

}

@media screen and (max-width:500px) {
    p{
        font-size: .8rem;

    }
}

body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
position: relative;
}


a {
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
}

h1 {
    font-size: 4rem;
    color: var(--white-color);
    span {
        font-size: 4rem;

    }
}

span {
    color: var(--primary-color);
}

h6 {
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }


//Dark/Light Toggle

.light-dark-mode {
  position: fixed;
  right: 0;
  width: 6.5rem;
  height: 2.5rem;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 2%;
 
  svg {
   display: flex;
   align-items: center;
   font-size: 1.7rem;
   color: var(--white-color);
   margin-top:7px;

   }
}
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;

}
.tsparticles-canvas-el {
    z-index: -1;
}
header {

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

}
//Nav Toggle

.nav-toggle {
    z-index: 99;
    transform: translateY(0);
    left: 5%;

}


.ham-burger-menu {
    display: none;
    z-index: 15;
    svg {
        font-size: 2rem;
    }
}

@media screen and (max-width:1200px) {
    h1 {
        font-size: 2.5rem;
        span {
            font-size: 2.5rem;
        }
    }
    .ham-burger-menu {
    display: block;
}
.light-dark-mode {
    top:5px;
}

} 
h1,h2,h3,h4,h5,h6 {
    text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
@media screen and (max-width:450px) {
    h1 {
        font-size: 1.6rem;
        span {
            font-size: 1.6rem;
        }
    }
}
`;

export default GlobalStyle;