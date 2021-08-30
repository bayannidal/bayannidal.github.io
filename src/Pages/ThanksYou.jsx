import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
function ThanksYou() {
    return (
        <ThankYouPageSyle>
            <MainLayout className="container">
                Thank you!
            </MainLayout>
        </ThankYouPageSyle>
    )
}
const ThankYouPageSyle = styled.div`
color: var(--white-color);
.container {
    animation: 1s ease-out 0s 1 slideInFromLeft;
    font-size: 3rem;
    text-align: center;

}


@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
`
export default ThanksYou
