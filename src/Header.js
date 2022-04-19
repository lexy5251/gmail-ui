import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { selectUser, logout } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser); 
    const dispatch = useDispatch();

    const signOutEmail = () => {
      signOut(auth).then(() => {
        dispatch(logout());
      })
    }
    return (
        <div className="header">
            <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmail-logo"/>
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
                <Avatar onClick={signOutEmail} alt="avatar" src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header;
