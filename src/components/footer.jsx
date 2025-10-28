import React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                backgroundColor: '#000',
                color: '#fff',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    spacing={2}
                    alignItems='center'
                    justifyContent="center"
                    textAlign={isMobile ? 'left' : 'center'}
                >
                    <Typography
                        variant={isMobile ? 'body2' : 'h6'} 
                        color="primary"
                        sx={{
                            fontWeight: 500,
                            letterSpacing: '0.5px',
                            px: isMobile ? 10 : 0, 
                        }}
                    >
                        © 2023 Wong Sim Bao. All rights reserved.
                    </Typography>

                    {!isMobile && (
                        <Typography variant="body2" color="white" sx={{ opacity: 0.7 }}>
                            Built with React & Material UI
                        </Typography>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
