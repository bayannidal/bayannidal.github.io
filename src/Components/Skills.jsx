import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyle>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar title={'HTML5'} width={'80%'} text={'80%'} />
                    <ProgressBar title={'CSS3'} width={'75%'} text={'75%'} />
                    <ProgressBar title={'JAVASCRIPT'} width={'65%'} text={'65%'} />
                    <ProgressBar title={'JAVA'} width={'30%'} text={'30%'} />
                    <ProgressBar title={'REACT JS'} width={'60%'} text={'60%'} />
                </div>
            </InnerLayout>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }

`;

export default Skills
