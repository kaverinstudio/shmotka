import React, {useState} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem , Menu} from "@mui/material";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HomeIcon from '@mui/icons-material/Home';
import SmsIcon from '@mui/icons-material/Sms';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "./Logo";
import {useDispatch} from "react-redux";
import {logout} from "../assets/api/user";

const Sidebar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(logout())
    }

    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
            className='sidebar__menu'
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Настройки</MenuItem>
            <MenuItem onClick={handleLogout}>Выход</MenuItem>
        </Menu>
    );

    return (
        <Box className='sidebar'>
            <Box>
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
            <Box>
                <List>
                    <ListItem>
                        {renderMenu}
                        <ListItemButton
                            onClick={handleProfileMenuOpen}
                            aria-controls={menuId}
                        >
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary="Еще" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;