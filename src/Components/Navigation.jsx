import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'
function Navigation() {
    return (
        <NavigationStyle>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/' replace activeClassName='active-class' exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' replace activeClassName='active-class' exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/resume' replace activeClassName='active-class' exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portofolios' replace activeClassName='active-class' exact>Portofolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blogs' replace activeClassName='active-class' exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' replace activeClassName='active-class' exact>Contact</NavLink>
                </li>
            </ul>
            <footer className='footer'>
                <p>@2021 My Portofolio Website</p>
            </footer>
        </NavigationStyle>
    )
}
const NavigationStyle = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right:1px solid var(--border-color);


.avatar {
    width: 95%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
        width: 60%;
        border-radius: 50%;
        border:8px solid var(--border-color);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        /* transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);
         */
        transition: ease-in-out 0.4s;
    } 
    img:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        animation: border-pulsate 2s infinite;
    }
}

.nav-items {
        width: 100%;
        text-align: center;
        .active-class {
            background-color: var(--primary-color);
            color: var(--white-color);
        }
        li {
            display: block;
            a {
                display: block;
                padding: 0.45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                font-weight: 600;
                transition: ease-in-out 0.4s all;
                letter-spacing: 1px;
                &:hover {
                    cursor: pointer;
                }
                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);
                    z-index: 3;
                    opacity: .25;
                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }
footer {
    border-top: 1px solid var(--border-color);
    p {
        padding: 2rem 0;
        font-size: 1.1rem;
        text-align: center;
    }
}

@keyframes border-pulsate {
    0%   { border-color: rgb(0, 123, 255,0.5)}
    50%  { border-color: rgb(0, 123, 255,0) }
    100% { border-color: rgb(0, 123, 255,0.5) }
}

`;
export default Navigation
