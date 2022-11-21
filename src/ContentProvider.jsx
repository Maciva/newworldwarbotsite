import './App.css';
import {
    Routes,
    Route,
    useNavigate,
    useLocation,
} from "react-router-dom";
import Home from './pages/home/Home';
import { Box, Container } from '@mui/system';
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import React from 'react';
import TOS from './pages/tos/TOS';

function ContentProvider() {

    let navigator = useNavigate();
    let location = useLocation();
    const tabs = ["/", "/terms"];
    const index = tabs.findIndex(el => el === location.pathname);
    const [value, setValue] = React.useState( index === -1 ? 0 : index);

    const handleChange = (i) => {
        navigator(tabs[i]);
        setValue(i);
    }

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar style={{ minHeight: 42 }} >
                        <Tabs onChange={(_, i) => handleChange(i)} value={value}  >
                            <Tab label="Home" />
                            <Tab label="Terms of Service" />
                        </Tabs>
                    </Toolbar>

                </Container>
            </AppBar>
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 6,
                pb: 6,
            }}>
                <Container>
                    <Routes>
                        <Route key={0} path="/" element={<Home />} />
                        <Route key={0} path="/terms" element={<TOS />} />
                        <Route key={0} path="*" element={<Home />} />
                    </Routes>
                </Container>
            </Box>
        </>


    );
}

export default ContentProvider;
