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
font-size: 3.8rem;
font-weight: 600;
text-transform: uppercase;
span {
    font-weight: 900;
    color: rgba(25,29,43,.43);
    font-size: 5rem;
}
}
`;

export default Title
