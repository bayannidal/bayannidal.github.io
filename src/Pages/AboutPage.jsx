import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyle>
                <Title title={'About me'} span={'About me'} />
                <ImageSection />
            </AboutStyle>
        </MainLayout>
    )
}


const AboutStyle = styled.section`

`;
export default AboutPage
