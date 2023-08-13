import {Box} from "@mui/material";
import './assets/scss/app.scss';
import Sidebar from "./components/Sidebar";
import Main from "./components/pages/Main";
import User from "./components/pages/user/User";

function App() {
    const isAuthenticated = false

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
