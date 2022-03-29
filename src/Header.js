import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import bunny from './../src/keai.jpeg';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input placeholder='Search mail' type="text"/>
                <ArrowDropDownIcon />
            </div>
            <div className="header_right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar alt="test" src="/keai.jpeg" />
            </div>
        </div>
    )
}

export default Header;
