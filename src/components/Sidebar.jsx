import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeIcon from '@mui/icons-material/Home';
import SmsIcon from '@mui/icons-material/Sms';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from "./Logo";

const Sidebar = () => {
    return (
        <Box className='sidebar'>
            <Logo/>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Главная" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FindInPageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Поиск" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SmsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Сообщения" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Профиль" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;