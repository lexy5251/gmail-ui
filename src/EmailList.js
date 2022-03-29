import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';

function EmailList() {
    return (
      <div className='emailList'>
          <div className='emailList_settings'>
              <div className='emailList_settingsLeft'>
                  <Checkbox />
                  <IconButton>
                      <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton>
                      <RefreshIcon />
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon />
                  </IconButton>
              </div>
              <div className='emailList_settingsRight'>
                  <IconButton>
                      <ChevronLeftIcon />
                  </IconButton>
                  <IconButton>
                      <ChevronRightIcon />
                  </IconButton>
                  <IconButton>
                      <KeyboardIcon />
                  </IconButton>
                  <IconButton>
                      <SettingsIcon />
                  </IconButton>
              </div>
          </div>
          <div className='emailList_sections'>
            <Section Icon={InboxIcon} 
                title='Primary'
                color='#d93025'
                selected
            />
            <Section Icon={PeopleIcon} 
                title='Social'
                color='#1A73E8'
            />
            <Section Icon={InboxIcon} 
                title='Promotions'
                color='green'
            />
          </div>
          <div className='emailList_list'>
            <EmailRow
              title="Twitch"
              subject="Hey fellow streamer"
              description="this is a test description this is a test description this is a test description"
              time="10pm"
            />
            <EmailRow
              title="Twitch"
              subject="Hey fellow streamer"
              description="this is a test description"
              time="10pm"
            />
          </div>
      </div>
    )
}

export default EmailList;