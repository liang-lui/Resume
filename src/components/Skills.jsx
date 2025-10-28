import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Stack,
    Chip,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const skillCategories = [
    {
        title: 'Frontend Development',
        icon: <CodeIcon />,
        skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Material UI'],
        color: 'primary'
    },
    {
        title: 'Backend & Database',
        icon: <StorageIcon />,
        skills: ['Node.js', 'PHP', 'SQL', 'MongoDB'],
        color: 'secondary'
    },
    {
        title: 'Tools & Technologies',
        icon: <BuildIcon />,
        skills: ['Git', 'GitHub', 'Firebase', 'AWS', 'VS Code'],
        color: 'success'
    }
];

const Skills = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 改为 md 断点

    return (
        <Box id="skills" sx={{ 
            mt: { xs: 8, md: 16 },  // 手机端减少上边距
            mb: { xs: 8, md: 12 }   // 手机端减少下边距
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    px: { xs: 2, md: 0 }, // 手机端添加内边距
                    mx: { xs: 0, md: -4 } // 只在桌面端使用负边距
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, md: 6 }, // 响应式内边距
                        textAlign: 'center',
                        background: '#000',
                        borderRadius: { xs: 2, md: 4 }, // 手机端圆角小一点
                        width: { xs: '100%', md: '75vw' }, // 手机端全宽
                        maxWidth: '1200px', // 添加最大宽度限制
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    }}
                >
                    {/* Enhanced Title */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                mb: 2,
                                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' } // 响应式字体
                            }}
                        >
                            Technical Skills
                        </Typography>
                    </Box>

                    {/* Vertical Skills Layout */}
                    <Stack spacing={3}>
                        {skillCategories.map((category, index) => (
                            <Paper
                                key={category.title}
                                elevation={0}
                                sx={{
                                    p: { xs: 2, md: 4 }, // 响应式内边距
                                    transition: 'all 0.3s ease-in-out',
                                    border: `1px solid ${theme.palette.divider}`,
                                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.third.main}20 100%)`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 4,
                                        background: `linear-gradient(135deg, ${theme.palette[category.color].main}, ${theme.palette.secondary.main})`,
                                    },
                                    '&:hover': {
                                        transform: { xs: 'none', md: 'translateX(8px)' }, // 手机端不移位
                                        boxShadow: { 
                                            xs: '0 4px 12px rgba(0,0,0,0.1)', 
                                            md: '15px 30px 30px rgba(90, 38, 133, 0.54)' 
                                        },
                                    }
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' }, // 手机端垂直布局
                                    alignItems: { xs: 'flex-start', md: 'center' },
                                    gap: { xs: 2, md: 3 } // 手机端间距小一点
                                }}>
                                    {/* Category Header */}
                                    <Box sx={{
                                        minWidth: { xs: '100%', md: 200 },
                                        mb: { xs: 2, md: 0 }
                                    }}>
                                        <Stack 
                                            direction="row" 
                                            spacing={2} 
                                            alignItems="center"
                                            sx={{
                                                justifyContent: { xs: 'flex-start', md: 'flex-start' }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    p: { xs: 1, md: 1.5 }, // 响应式内边距
                                                    borderRadius: 3,
                                                    background: `linear-gradient(135deg, ${theme.palette[category.color].main}, ${theme.palette.secondary.main})`,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    minWidth: { xs: 40, md: 48 }, // 固定图标容器大小
                                                    minHeight: { xs: 40, md: 48 }
                                                }}
                                            >
                                                {React.cloneElement(category.icon, {
                                                    sx: { fontSize: { xs: '1.2rem', md: '1.5rem' } }
                                                })}
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette[category.color].main,
                                                    fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' }
                                                }}
                                            >
                                                {category.title}
                                            </Typography>
                                        </Stack>
                                    </Box>

                                    {/* Skills Chips */}
                                    <Box sx={{ flex: 1, width: '100%' }}>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            flexWrap="wrap"
                                            useFlexGap
                                            sx={{ 
                                                gap: { xs: 0.5, md: 1 },
                                                justifyContent: { xs: 'flex-start', md: 'flex-start' }
                                            }}
                                        >
                                            {category.skills.map((skill) => (
                                                <Chip
                                                    key={skill}
                                                    label={skill}
                                                    variant="filled"
                                                    size={isMobile ? "small" : "medium"}
                                                    sx={{
                                                        borderRadius: 2,
                                                        backgroundColor: `${theme.palette[category.color].main}15`,
                                                        color: theme.palette[category.color].main,
                                                        fontWeight: 500,
                                                        border: `1px solid ${theme.palette[category.color].main}30`,
                                                        transition: 'all 0.2s ease-in-out',
                                                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                                                        height: { xs: 28, md: 32 },
                                                        '&:hover': {
                                                            backgroundColor: theme.palette[category.color].main,
                                                            color: 'white',
                                                            transform: { xs: 'scale(1.02)', md: 'scale(1.05)' },
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            </Paper>
                        ))}
                    </Stack>
                </Paper>
            </Box>
            
            {/* Decorative divider after skills */}
            <Divider
                sx={{
                    my: { xs: 6, md: 10 }, // 响应式间距
                    height: { xs: 2, md: 3 }, // 响应式高度
                    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
                    opacity: 0.3,
                    width: { xs: '90%', md: '80%' }, // 手机端宽度小一点
                    mx: 'auto' // 居中
                }}
            />
        </Box>
    );
};

export default Skills;