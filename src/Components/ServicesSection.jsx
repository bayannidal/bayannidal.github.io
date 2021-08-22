import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard'
import Title from './Title'
import js from '../img/js.svg'
import css from '../img/css.svg'
import html from '../img/html.svg'
import react from '../img/react.svg'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyle>
                <Title title={'Services'} span={'services'}></Title>
                <div className="services">
                    <ServiceCard image={js} title={'JS'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                    <ServiceCard image={css} title={'CSS'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                    <ServiceCard image={html} title={'HTML'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />
                    <ServiceCard image={react} title={'REACT JS'} paragraph={'Lorem ipsum dolor sit amet consecteur adis'} />

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

}




`;

export default ServicesSection
