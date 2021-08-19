import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'
import ServicesSection from '../Components/ServicesSection'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyle>
                <Title title={'About me'} span={'About me'} />
                <ImageSection />
                <ServicesSection>

                </ServicesSection>
            </AboutStyle>
        </MainLayout>
    )
}


const AboutStyle = styled.section`

`;
export default AboutPage
