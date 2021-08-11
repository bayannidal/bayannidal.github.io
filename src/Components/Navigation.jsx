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
                    <NavLink to='/home' activeClassName='active-class'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' activeClassName='active-class'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/resume' activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portofolios' activeClassName='active-class'>Portofolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blogs' activeClassName='active-class'>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' activeClassName='active-class'>Contact</NavLink>
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
        width: 70%;
        border-radius: 50px;
        border:8px solid var(--border-color);
    } 
}

.nav-items {
        width: 100%;
        text-align: center;
        .active-class {
            background-color: rebeccapurple;
        }
        li {
            display: block;
            a {
                display: block;
                padding: 0.2rem 0;
                position: relative;
                z-index: 10;
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
                    background-color: rebeccapurple;
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

`;
export default Navigation
