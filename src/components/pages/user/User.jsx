import React, {useState} from 'react';
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from "./Login";
import Registration from "./Registration";
import Logo from "../../Logo";

const User = () => {
    const [value, setValue] = useState('1');

    const onRegister = () => {
        setValue('2')
    }
    const onLogin = () => {
        setValue('1')
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='wrapper'>
            <Box className='user'>
                <Logo/>
                <Box sx={{ width: '100%', typography: 'body1' }} component='div'>
                    <TabContext value={value}>
                        <Box component='div'>
                            <TabList onChange={handleChange} centered>
                                <Tab label="Войти в приложение" value="1" />
                                <Tab label="Зарегистрироваться" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Login onRegister={onRegister} />
                        </TabPanel>
                        <TabPanel value="2">
                            <Registration onLogin={onLogin} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default User;