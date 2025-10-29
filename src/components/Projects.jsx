import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Goalify from '../assets/goalify.png';
import Johor from '../assets/johor.png';
import FYP from '../assets/mobile.jpg';

const projects = [
  {
    title: 'Satu Malaysia',
    description: 'A tourism promotion website for Malaysia, showcasing tourist attractions in various states.',
    image: Johor,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    githubUrl: 'https://github.com/liang-lui/Satu-Malaysia.git',
    liveUrl: 'https://github.com/liang-lui/Satu-Malaysia.git'
  },
  {
    title: 'Goalify',
    description: 'A website for personal goal management, integrating four key modules: exercise tracking, habit tracker, diary journal, and financial management, to help users comprehensively manage their personal life goals.',
    image: Goalify,
    technologies: ['PHP', 'HTML', 'Bootstrap', 'CSS'],
    githubUrl: 'https://github.com/JeremyLing04/Goalify',
    liveUrl: 'https://github.com/JeremyLing04/Goalify'
  },
  {
    title: 'Android Online Music Video Media Player',
    description: 'An Android-based music video streaming application that provides ad-free, subscription-free access to music videos, features biometric recognition and an AI chatbot.',
    image: FYP,
    technologies: ['Java', 'Firebase', 'AWS'],
    githubUrl: 'https://github.com/liang-lui/Music-Video-Player.git',
    liveUrl: 'https://drive.google.com/file/d/1ePIRkl4QXLEs5aOvIjbVrj7GPn6-lmYl/view?usp=drive_link'
  }
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 改为 md 断点

  return (
    <Box id="projects" sx={{ 
      mt: { xs: 8, md: 16 },  // 响应式上边距
      mb: { xs: 6, md: 10 }   // 响应式下边距
    }}>
      {/* Section Title */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' } // 响应式字体
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }} // 响应式间距
        justifyContent="center"
        sx={{
          px: { xs: 2, md: 4 }, // 响应式内边距
          marginLeft: { xs: 0, md: -4 }, // 只在桌面端使用负边距
          marginRight: { xs: 0, md: -4 }
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: { xs: '100%', sm: '400px', md: '450px' }, // 响应式最大宽度
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: { xs: 'translateY(-5px)', md: 'translateY(-10px)' }, // 手机端移动幅度小
                  boxShadow: { 
                    xs: '0 6px 12px rgba(0,0,0,0.1)', 
                    md: '0 10px 20px rgba(0,0,0,0.1)' 
                  }
                },
                borderRadius: { xs: 2, md: 3 }, // 响应式圆角
                overflow: 'hidden',
              }}
            >
              {/* 封面图片 */}
              <CardMedia
                component="img"
                height={isMobile ? "160" : "200"} // 手机端图片高度小一点
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = project.image;
                  e.target.onerror = null;
                }}
              />

              {/* 内容 */}
              <CardContent sx={{ 
                flexGrow: 1,
                p: { xs: 2, md: 3 } // 响应式内边距
              }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.25rem' } // 响应式字体
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ 
                    fontSize: { xs: '0.875rem', md: '0.9rem' }, // 响应式字体
                    lineHeight: 1.5
                  }}
                >
                  {project.description}
                </Typography>
                <Stack 
                  direction="row" 
                  spacing={1} 
                  flexWrap="wrap" 
                  useFlexGap 
                  sx={{ 
                    mb: 2,
                    gap: { xs: 0.5, md: 1 } // 响应式间距
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        color: 'white',
                        m: 0.5,
                        fontSize: { xs: '0.7rem', md: '0.8rem' }, // 响应式字体
                        height: { xs: 24, md: 32 } // 响应式高度
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>

              {/* 按钮 */}
              <CardActions sx={{ 
                px: { xs: 2, md: 2 }, 
                pb: { xs: 2, md: 2 } 
              }}>
                <Button
                  startIcon={<GitHubIcon />}
                  color="secondary"
                  href={project.githubUrl}
                  target="_blank"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    fontSize: { xs: '0.8rem', md: '0.9rem' } // 响应式字体
                  }}
                >
                  Code
                </Button>
                <Button
                  startIcon={<LaunchIcon />}
                  href={project.liveUrl}
                  color="secondary"
                  target="_blank"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    fontSize: { xs: '0.8rem', md: '0.9rem' } // 响应式字体
                  }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;