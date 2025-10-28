import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = ['Home', 'Skills', 'Experience', 'Projects'];

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (mobileOpen) {
            setMobileOpen(false);
        }
    };

    const drawer = (
        <List>
            {menuItems.map((item) => (
                <ListItem
                    button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                >
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    '&.scrolled': {
                        background: 'var(--nav-scrolled-bg)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)'
                    }
                }}
                className={scrolled ? "scrolled" : ""}
            >
                <Toolbar sx={{ 
                    justifyContent: 'space-between',
                    minHeight: '64px !important'
                }}>
                    {/* Resume 在左边 */}
                    <Typography
                        variant="h5"
                        component="div"
                        className="nav-title"
                        onClick={() => scrollToSection('home')}
                        sx={{
                            cursor: 'pointer',
                            fontWeight: 700,
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.18)'
                        }}
                    >
                        Resume
                    </Typography>
                    
                    {/* 导航按钮在右边 */}
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box className="nav-actions">
                            {menuItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="nav-button"
                                    sx={{
                                        color: '#fff',
                                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        padding: '6px 14px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.06)'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                className="nav-drawer"
                PaperProps={{ className: 'nav-drawer-paper' }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navigation;