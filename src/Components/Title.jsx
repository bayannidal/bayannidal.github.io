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
h2 {
    color: var(--white-color);
font-size: 3.1rem;
font-weight: 600;
text-transform: uppercase;
position: relative;
padding-bottom: .1rem;
&::before {
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
}
span {
    font-weight: 900;
    color: rgba(25,29,43,.43);
    font-size: 5rem;
    position: absolute;
    left: 0;
    top: 30%;
    z-index: -1;
}
}
`;

export default Title
