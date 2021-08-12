import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyle>
                <Title title={'About me'} span={'About'} />
            </AboutStyle>
        </MainLayout>
    )
}


const AboutStyle = styled.section`

`;
export default AboutPage
