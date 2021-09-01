import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
function Navigation() {
    return (
        <NavigationStyle>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/' replace activeClassName='active-class' exact><HomeRoundedIcon /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' replace activeClassName='active-class' exact><InfoRoundedIcon /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/resume' replace activeClassName='active-class' exact><ImportContactsRoundedIcon /></NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to='/blogs' replace activeClassName='active-class' exact><CreateRoundedIcon /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' replace activeClassName='active-class' exact><ChatBubbleOutlineRoundedIcon /></NavLink>
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
            flex-direction: row;
            align-items: center;
            height: 100%;
            width: 100%;
            position: relative;
            
    
            .avatar {
            width: 10%;
            text-align: center;
            @media screen and (max-width:1200px) {
                display: none;
            }
            img {
            width: 100%;
            max-width: 70px;
            margin-top: 9px;
            border-radius: 50%;
            border:3px solid var(--border-color);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);
            transition: ease-in-out 0.4s;
    }
            img:hover {
                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            animation: border-pulsate 2s infinite;

    }
}

            .nav-items {
            text-align: center;
            display: flex;
            .active-class {
                background-color: var(--primary-color);
                color: var(--icons);
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                &:hover::before {
                width: 0%;
                height: 0%;
                transition: none;
            }

        }
            li {
                display: block;

            a {
            display: block;
            padding: 0.45rem 2rem;
            margin: 0 1rem;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            font-weight: 600;
            transition: ease-in-out 0.4s all;
            @media screen and (max-width:750px) {
            padding: 0.45rem .9rem;
            margin: 0 .9rem;
              

            @media screen and (max-width:489px) {
            padding: 0.45rem .7rem;
            margin: 0 .7rem;
                
            }
             
            }
            
            @media screen and (max-width:427px) {
            padding: 0.45rem .5rem;
            margin: 0 .5rem;
                
            }
            &:hover {
                cursor: pointer;
            color: var(--icons);

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

            z-index: -1;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

                    
                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }

        @media screen and (max-width:1200px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .nav-item {
                svg {
                    font-size: 1rem;
                }
            }
            }
    }
            footer {
                width: 15%;
                @media screen and (max-width:1200px) {
                display: none;
            }
            p {
            padding: 2rem 1rem;
            font-size: .6rem;
            text-align: center;
         
    }
}

            @keyframes border-pulsate {
            0% { border-color:var(--border-pulsate-opacity-full)}
            50%  {border-color: var(--subtitle-dark-color)}
            100% {border-color:var(--border-pulsate-opacity-full)}
}

            `;
export default Navigation
