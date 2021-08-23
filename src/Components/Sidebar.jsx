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
width: 16rem;
position: fixed;
height: 100vh;
background-color: var(--sidebar-dark-color);
overflow: hidden;
transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);

@media screen and (max-width:1200px) {
    transform: translateX(-100%);
}

`

export default Sidebar