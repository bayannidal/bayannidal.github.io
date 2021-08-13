import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function HomePage() {
    return (
        <HomePageStyle>

            <div className='lines'>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
                <div className='line-4'></div>
            </div>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1> Hi, I'm <span>Nidal Bayan</span></h1>
                <p>Welcome to my home! Here I present my creativity and presonality.</p>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/nidal-bayan-417481198/' className="icon i-linkedin">
                        <LinkedInIcon />
                    </a >
                    <a href='https://www.instagram.com/bayannidal/' className="icon i-instagram">
                        <InstagramIcon />
                    </a >
                    <a href='https://github.com/bayannidal' className="icon i-github">
                        <GitHubIcon />
                    </a >
                </div>
            </div>

        </HomePageStyle>

    )
}
const HomePageStyle = styled.header`
width: 100%;
height: 100vh;
position: relative;

.p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
}

.typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 80%;

    .icons {
        display: flex;
        justify-content: center;
        .icon {
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child) {
                margin-right: 1rem ;
            }
            svg {
                margin: .5rem;
            }
        }
        .i-github {
            &:hover {
                border: 2px solid rgb(240,246,251);
                color: rgb(240,246,251);
            }
    
        }
        .i-instagram{
            &:hover {
                border: 2px solid rgb(190,0,157);
                color: rgb(190,0,157);
            }
        }
    }
}


`

export default HomePage
