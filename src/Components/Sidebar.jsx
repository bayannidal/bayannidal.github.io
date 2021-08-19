import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar() {
    return (
        <SidebarStyle>
            <Navigation></Navigation>
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
width: 16rem;
position: fixed;
height: 100vh;
background-color: var(--sidebar-dark-color);

`

export default Sidebar