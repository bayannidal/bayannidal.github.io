import React from 'react'
import styled from 'styled-components'
import A from '../img/img04.jpg'
import B from '../img/img02.jpg'
import C from '../img/img05.jpg'
import D from '../img/img03.jpg'
import PrimaryButton from './PrimaryButton'

function ImageSection() {
    return (
        <ImageSectionStyle>
            <div className="left-content">
                <img src={A} alt="" />
                <img src={B} alt="" />
                <img src={C} alt="" />
                <img src={D} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Nidal Bayan</span></h4>
                <p className="pargraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nulla similique reiciendis voluptatibus doloremque aperiam ipsam asperiores dignissimos quaerat consequuntur.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Occupation</p>
                        <p>Location</p>
                    </div>

                    <div className="info">
                        <p>: Nidal Bayan</p>
                        <p>: 21</p>
                        <p>: Romanian</p>
                        <p>: English, Romanian</p>
                        <p>: Student</p>
                        <p>: Cluj-Napoca, Romania</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />

            </div>

        </ImageSectionStyle>
    )
}

const ImageSectionStyle = styled.div`
margin-top: 5rem;
display: flex;
@media screen and (max-width: 1200px) {
    flex-direction: column;
    .left-content{
            margin-bottom: 2rem;

        }
    }
    @media screen and (max-width: 500px) {
    .left-content {
    text-align: center;
    }
    }
.left-content {
    margin-right: 1rem;
    width: 50%;
    img {
        height: 100px;
        width: 95%;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

        transition: ease-in-out 0.4s;
        transition-delay:100ms ;
        object-fit: cover;
    }
    img:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        animation: border-pulsate 2s infinite;
        border:5px solid var(--border-color);

    }
}
.right-content {
    padding-bottom: 1.4rem;
    width: 100%;
   
    h4 {
        font-size: 2rem;
        color: var(--white-color);
        text-align: center;
        span {
           font-size: 2rem;
        }
    }
    .pargraph {
        padding: 1rem 0;
    }
    .about-info {
        display: flex;
        padding-bottom: 1.4rem;
    
        .info-title {
            padding-right: 3rem;

            p {
                font-weight: 600;
                position: relative;
                
            }

        }
       

        .info-title, .info {
        text-align: left;

            p{
                padding: .3rem 0
            }
        }
    }
 
}

@media screen and (max-width: 1200px) {
    flex-direction: column;
    text-align: center;

    .left-content{
            margin-bottom: 2rem;
            width: 100%;
            text-align: center;

        }
    }
  

    @keyframes border-pulsate {
    0%   { border-color:var(--border-pulsate-opacity-full)}
    50%  { border-color: var(--subtitle-dark-color)}
    100% { border-color:var(--border-pulsate-opacity-full)}
}
`

export default ImageSection
