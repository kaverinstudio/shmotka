import {Box} from "@mui/material";
import './assets/scss/app.scss';
import Sidebar from "./components/Sidebar";
import Main from "./components/pages/Main";
import User from "./components/pages/user/User";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./assets/api/user";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(auth())
    },[])

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        return <User />;
    }


    return (
        <Box className='wrapper'>

            <Sidebar/>
            <Main/>
        </Box>
    );
}

export default App;
