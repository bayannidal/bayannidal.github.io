import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from '../Components/Header';

function HomePage() {
    return (
        <HomePageStyle>

            <div className="p-particles-js">
                {/* <Particle /> */}
            </div>
            <div className="typography">
                <h1> Hi, I'm <span>Nidal Bayan</span></h1>
                <p>Welcome to my home! Here I present my creativity and presonality.</p>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/nidal-bayan-417481198/' target="_blank" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a >
                    <a href='https://www.instagram.com/bayannidal/' target="_blank" className="icon i-instagram">
                        <InstagramIcon />
                    </a >
                    <a href='https://github.com/bayannidal' target="_blank" className="icon i-github">
                        <GitHubIcon />
                    </a >
                </div>
            </div>

        </HomePageStyle>

    )
}
const HomePageStyle = styled.div`
width: 100%;
height: 100vh;
position: relative;

.p-particles-js {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
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
                border: 2px solid #007bff;
                color: #007bff;
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
                border: 2px solid #461738;
                color: #461738;
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
