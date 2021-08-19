import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard'
import Title from './Title'
import js from '../img/js.svg'
import css from '../img/css.svg'
import html from '../img/html.svg'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyle>
                <Title title={'Services'} span={'services'}></Title>
                <div className="services">
                    <ServiceCard image={js} title={'JavaScript'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                    <div className="mid-card">
                        <ServiceCard image={css} title={'Css'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                    </div>
                    <ServiceCard image={html} title={'Html'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                </div>
            </ServicesSectionStyle>
        </InnerLayout>
    )
}

const ServicesSectionStyle = styled.section`
margin-top: 5rem;
.services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card {
        margin: 0 1.2rem;
    }
}

`;

export default ServicesSection
