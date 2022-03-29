import { IconButton } from '@mui/material';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

function Mail() {
  const navigate = useNavigate();
    return (
      <div className='mail'>
        <div className='mail_tools'>
          <div className='mail_toolsLeft'>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <AddTaskIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          </div>
          <div className='mail_toolsRight'>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
          </div>
        </div>
        <div className='mail_body'>
          <div className='mail_bodyHeader'>
            <h2>Subject</h2>
            <LabelImportantIcon className='mail_important' />
            <p>Title</p>
            <p className='mail_time'>10pm</p>
          </div>
          <div className='mail_message'>
            <p>This is a message</p>
          </div>
        </div>
      </div>
    )
}

export default Mail;