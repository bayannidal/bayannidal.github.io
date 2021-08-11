import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'

function HomePage() {
    return (
        <HomePageStyle>
            <div className="p-particles-js">
                <Particle></Particle>
            </div>
        </HomePageStyle>
    )
}

const HomePageStyle = styled.header`
width: 100%;
height: 100vh;
position: relative;
`

export default HomePage
