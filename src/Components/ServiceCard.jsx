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

    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
    
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
