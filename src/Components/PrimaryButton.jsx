import React from 'react'
import styled from 'styled-components'

function PrimaryButton({ title, link }) {
	return (
		<PrimaryButtonStyle href={link} target="_blank" type='submit'>
			{title}
		</PrimaryButtonStyle>
	)
}
const PrimaryButtonStyle = styled.a`
background-color: var(--primary-color);
padding: .8rem 2.5rem;
color: white;
cursor: pointer;
display: inline-block;
font-size: inherit;
text-transform: uppercase;
position: relative;
transition: all .4s ease-in-out;
border-radius: 10px;
transform: scale(1);
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

&:hover {
	animation: pulse 2s infinite;

}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--primary-color);
        opacity: 0.7;
	}

	70% {
		transform: scale(0.98);
		box-shadow: 0 0 0 10px var(--primary-color);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--primary-color);
	}
}
`
export default PrimaryButton
