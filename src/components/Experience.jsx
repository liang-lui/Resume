import React from 'react';
import {
  Box,
  Typography,
  CardMedia,
  Stack,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const experiences = [
  {
    image: '/resume/unnamed.png',
    title: 'Full Stack Developer',
    company: 'Codex Studio',
    period: '2025 - Present',
    description: [
      'Developed and maintained full-stack web applications using React.js and Node.js',
      'Implemented responsive design principles ensuring mobile-first approach',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'UTAR',
    period: '2023 - 2026',
    details:
      'Relevant coursework: Web Development, Database Systems, Software Engineering, Mobile App Development',
  },
  {
    degree: 'Unified Examination Certificate (UEC)',
    school: 'Shen Jai High School',
    period: '2017 - 2022',
    details: 'Member of the Chinese Orchestra Club',
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="experience"
      sx={{
        mt: isMobile ? 10 : 20,
        mb: isMobile ? 6 : 10,
        px: isMobile ? 2 : 0,
      }}
    >
      {/* Work Experience */}
      <Box sx={{ textAlign: 'center', mb: isMobile ? 4 : 6 }}>
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
            fontSize: { xs: '2rem', md: '2.8rem' },
          }}
        >
          Work Experience
        </Typography>
      </Box>

      <Stack
        spacing={isMobile ? 4 : 6}
        sx={{ alignItems: 'center', width: '100%' }}
      >
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              p: isMobile ? 3 : 5,
              borderRadius: 3,
              width: '100%',
              maxWidth: 1000,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.paper.backgroundColor} 100%)`,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: isMobile ? 'none' : 'translateY(-6px)',
                boxShadow: isMobile
                  ? '0 4px 8px rgba(0,0,0,0.1)'
                  : '0 12px 24px rgba(0,0,0,0.12)',
              },
            }}
          >
            {/* 图片 */}
            <Box
              sx={{
                flex: isMobile ? 'none' : '0 0 40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: isMobile ? 3 : 0,
                mr: isMobile ? 0 : 4,
              }}
            >
              <CardMedia
                component="img"
                image={exp.image}
                alt={exp.title}
                sx={{
                  width: isMobile ? '100%' : '90%',
                  height: 'auto',
                  maxHeight: 220,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
                onError={(e) => {
                  e.target.src = '/unnamed.png';
                  e.target.onerror = null;
                }}
              />
            </Box>

            {/* 文字 */}
            <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: '#020202ff' }}
              >
                {exp.title}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: '#fe119fff' }}
              >
                {exp.company} • {exp.period}
              </Typography>
              <Stack
                spacing={1}
                sx={{
                  alignItems: isMobile ? 'center' : 'flex-start',
                }}
              >
                {exp.description.map((item, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{ color: '#0a0a0aff', fontSize: '1rem' }}
                  >
                    • {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Paper>
        ))}
      </Stack>

      {/* Divider */}
      <Divider
        sx={{
          my: isMobile ? 8 : 12,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
          opacity: 0.5,
          width: '70%',
          mx: 'auto',
        }}
      />

      {/* Education */}
      <Box sx={{ textAlign: 'center', mb: isMobile ? 4 : 6 }}>
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
            fontSize: { xs: '2rem', md: '2.8rem' },
          }}
        >
          Education
        </Typography>
      </Box>

      <Stack spacing={isMobile ? 3 : 5}>
        {education.map((edu, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: isMobile ? 3 : 5,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #ff96d5ff 100%)`,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: isMobile ? 'none' : 'translateY(-4px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              },
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: '#7c0973ff' }}
            >
              {edu.degree}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: theme.palette.primary.main }}
            >
              {edu.school} • {edu.period}
            </Typography>
            <Typography variant="body1" sx={{ color: '#c342b8ff' }}>
              {edu.details}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* 最后一个分隔线 */}
      <Divider
        sx={{
          my: isMobile ? 8 : 12,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
          opacity: 0.5,
          width: '70%',
          mx: 'auto',
        }}
      />
    </Box>
  );
};

export default Experience;
