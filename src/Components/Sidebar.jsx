import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar({ navToggle }) {
    return (
        <SidebarStyle className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation></Navigation>
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
width: 90%;
min-height:90px;
position: fixed;
height: 10vh;
background-color: var(--sidebar-dark-color);
overflow: hidden;
transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
border-radius: 30px;
z-index: 99;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
max-height: 100px;


@media screen and (max-width:1200px) {
    transform: translateY( 150%);
    left: 5%;
    z-index: 99;

}


`

export default Sidebar