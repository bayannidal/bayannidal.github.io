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
    

    &:not(:last-child) {
    margin-bottom: 2rem;
    }

    .left-content {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
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
                width: 85%;
                margin: auto;
             .left-content {
                 padding: 0;
                svg {
                    font-size: 1rem;
                }
             }
          
              
        }
`;
export default ContactItem
