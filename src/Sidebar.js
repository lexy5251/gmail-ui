import React from 'react';
import './Sidebar.css';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    const handleOnclick = () => {
        dispatch(openSendMessage());
    }
    return (
        <div className='sidebar'>
            <Button 
                startIcon={<EditIcon />}
                className="sidebar_compose"
                onClick={handleOnclick}
            >
                Compose
            </Button>
            <SidebarOption
                Icon={InboxIcon}
                title="Inbox"
                number={54}
                selected
            />
            <SidebarOption
                Icon={StarIcon}
                title="Starred"
                number={22}
            />
            <SidebarOption
                Icon={AccessTimeIcon}
                title="Snoozed"
                number={1}
            />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number={1}
            />
            <SidebarOption
                Icon={SendIcon}
                title="Sent"
                number={1}
            />
            <SidebarOption
                Icon={NoteIcon}
                title="Drafts"
                number={1}
            />
            <SidebarOption
                Icon={ExpandMoreIcon}
                title="More"
                number={54}
            />
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <LocalPhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;