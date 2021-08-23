import React from 'react'
import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleStyle>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyle>
    )
}
const TitleStyle = styled.div`
position: relative;
text-align: center;
h2 {
 color: var(--white-color);
font-size: 3rem;
font-weight: 600;
text-transform: uppercase;
position: relative;
padding-bottom: .1rem;
@media screen and (max-width: 496px) {
        font-size: 2.4rem;
    }
@media screen and (max-width: 370px) {
        font-size: 1.8rem;
    }
/* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 7.1rem;
    height: .33rem;
    background-color: var(--background-light-color-2);
    border-radius: 15px;
    left:0;
}

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 3.5rem;
    height: .33rem;
    background-color: var(--primary-color);
    border-radius: 15px;
    left: 0;
    opacity: .8;

} */
span {
    font-weight: 900;
    color: var( --subtitle-dark-color);
    font-size: 3.7rem;
    position: absolute;
    left: 10%;
    top: 13%;
    z-index: -1;
    @media screen and (max-width: 620px) {
        font-size: 2.8rem;
    }
    @media screen and (max-width: 496px) {
        font-size: 2.6rem;
    }
    @media screen and (max-width: 370px) {
        font-size: 2rem;
    }
}
}
`;

export default Title
