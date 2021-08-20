import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyle>
            <MainLayout>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <ProgressBar title={'HTML5'} width={'70%'} text={'70%'} />
                </InnerLayout>
            </MainLayout>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.section`


`;

export default Skills
