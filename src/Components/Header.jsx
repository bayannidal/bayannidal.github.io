// import React from 'react'
import styled from 'styled-components';
import SwitchUI from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';

import React, { useState, useEffect } from 'react'


function Header() {
    const [theme, setTheme] = useState('dark-theme');
    const [checked, setChecked] = useState(false);
    const [navToggle, setNavToggle] = useState(false);

    useEffect(() => {
        document.documentElement.className = theme;

    }, [theme])

    const themeToggler = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
            setChecked(false)
        }
        else {
            setTheme('light-theme')
            setChecked(true)
        }
    }

    return (
        <div>
            <header>
                <div className='menu'>
                    <div className='ham-burger-menu'>
                        <IconButton onClick={() => {
                            setNavToggle(!navToggle);
                        }}>
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div className='light-dark-mode'>
                        <div className='left-content'>
                            <Brightness4Icon />
                        </div>
                        <div className='right-content'>
                            <SwitchUI
                                value=""
                                checked={checked}
                                onClick={themeToggler}
                                inputProps={{ 'aria-label': '' }}
                                size='medium'
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
const HeaderStyle = styled.header`

`;
export default Header
