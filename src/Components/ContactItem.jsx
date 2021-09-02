import React from 'react'

import styled from 'styled-components';

function ContactItem({ icon, title, contact }) {
    return (
        <ContactItemStyle>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact}</p>
            </div>
        </ContactItemStyle>
    )
}
const ContactItemStyle = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
    &:not(:last-child) {
    margin-bottom: 2rem;
    }

    .left-content {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2rem;
        svg {
            font-size: 2.3rem;
        }
    }

    .right-content {
    
        p{
        padding:.1rem 0;
        }
    }

    @media screen and (max-width:449px) {
                width: 100%;
                padding: 1.2rem 1.5rem;
             .left-content {
                 padding: 0;
                svg {
                    font-size: 1rem;
                }
             }   
        }
    @media screen and (max-width:375px) {
            width: 100%; 
        }
`;
export default ContactItem
