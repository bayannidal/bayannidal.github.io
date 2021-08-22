import React from 'react'
import styled from 'styled-components'

function SmallTitle({ icon, title }) {
    return (
        <SmallTitleStyle>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyle>
    )
}
const SmallTitleStyle = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg {
            font-size: 1.8rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 1.8rem;
    }
`;
export default SmallTitle
