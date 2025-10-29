import React from 'react';
import {
    ThemeProvider,
    createTheme,
    Box,
    Container,
    useMediaQuery,
} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ce9cf8ff',
        },
        secondary: {
            main: '#72d5e4ff',
        },
        third: {
            main: '#f9f871ff',
        },
        background: {
            default: '#92cbd4ff',
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            marginBottom: '1rem',
        },
        h6: {
            fontWeight: 600,
        },
    },
    paper: {
        backgroundColor: '#ffcdeccc',
    },
});

import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/footer';   
import './styles.css';

function App() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>

            <Box
                sx={{
                    minHeight: '100vh',
                    width: '1905px',
                    overflowX: 'hidden',
                    backgroundImage: "url('/banner-bg.png')",
                    marginTop: -1,
                    marginLeft: -1,
                    marginBottom: -1,
                    padding: 0
                }}
            >
                <Navigation />
                <Container
                    maxWidth="xl"
                    sx={{
                        px: { xs: 2, sm: 3, md: 4 } // 响应式内边距
                    }}
                >
                    <Box component="main" sx={{ py: 4 }}>
                        <Header />
                        <Skills />
                        <Experience />
                        <Projects />
                    </Box>
                </Container>
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;