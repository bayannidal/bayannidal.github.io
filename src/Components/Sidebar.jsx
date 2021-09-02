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
background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
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