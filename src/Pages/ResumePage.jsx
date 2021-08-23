import React from 'react'
import styled from 'styled-components'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layouts'

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />

        </MainLayout>
    )
}
const ResumePageStyle = styled.div`

`;
export default ResumePage
