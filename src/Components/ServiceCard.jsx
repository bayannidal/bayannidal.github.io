import React from 'react'
import styled from 'styled-components'

function ServiceCard({ image, title, paragraph }) {
    return (
        <ServiceCardStyle className='service-card'>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>

            </div>
        </ServiceCardStyle>
    )
}


const ServiceCardStyle = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color-2);
    border-right: 1px solid var(--border-color-2);
    border-top: 8px solid var(--border-color-2);
    border-bottom: 1px solid var(--border-color-2);
    border-radius: 10px;
    transition: .4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    
    
    @media screen and (min-width: 1000px) {
        :not(:last-child){
    margin-right: 1.2rem;
   };
    }

    
   @media screen and (max-width: 1000px) {
   


    :not(:last-child){
    margin-bottom: 1.2rem;
   };
    }
    &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);

    }
    .container {
        padding: 1.2rem;
        text-align: center;
        img {
            width: 50%;
        }
        h4 {
           color: var(--white-color);
           font-size: 1.6rem;
           padding: 1rem 0;
           position: relative;

           &::after {
               content: '';
               width: 100%;
               background-color: var(--border-color-2);
               height: 3px;
               position: absolute;
               left: 0;
               bottom: 0;
               border-radius: 10px;
           }
        }
        p {
            padding-bottom: .8rem 0;
        }
    }
`;
export default ServiceCard
