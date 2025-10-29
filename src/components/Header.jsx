import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImage from '../assets/profile.jpg';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
     <Box id="home" component="header" sx={{ 
      py: { xs: 8, md: 10 }, // 增加垂直内边距
      pt: { xs: 12, md: 16 }, // 特别增加上边距
      position: 'relative' 
    }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        direction={isMobile ? 'column-reverse' : 'row'}
        px={isMobile ? 2 : 5}
      >
        {/* 左边（或下方）文字区域 */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {/* 名字标题部分 */}
            <Box sx={{ maxWidth: '80%' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontSize: { xs: '2.3rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                Wong Sim Bao
              </Typography>

              <Typography
                variant="h4"
                color="#fff"
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 2,
                }}
              >
                Full Stack Developer
              </Typography>

              <Typography
                variant="h6"
                color="#fff"
                sx={{
                  fontWeight: 300,
                  textAlign: 'left',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  mb: 2,
                }}
              >
                I had basic programming knowledge, experience in web development, and a strong passion for learning new technologies.
              </Typography>
            </Box>

            {/* 联系信息 */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={2}>
                  {/* Email */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.primary.main}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="#fff">
                        Email
                      </Typography>
                      <Link
                        href="mailto:simbaowong@gmail.com"
                        underline="hover"
                        sx={{ display: 'block', color: '#b9f7ff' }}
                      >
                        simbaowong@gmail.com
                      </Link>
                    </Box>
                  </Stack>

                  {/* Phone */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.primary.main}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PhoneIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="#fff">
                        Phone
                      </Typography>
                      <Typography color="#b9f7ff">011-37414860</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack spacing={2}>
                  {/* Location */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.primary.main}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationOnIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="#fff">
                        Location
                      </Typography>
                      <Typography color="#b9f7ff">Ipoh, Perak</Typography>
                    </Box>
                  </Stack>

                  {/* LinkedIn */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.primary.main}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LinkedInIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="#fff">
                        LinkedIn
                      </Typography>
                      <Link
                        href="https://www.linkedin.com/in/wong-sim-bao-52aa43375"
                        target="_blank"
                        underline="hover"
                        sx={{ display: 'block', color: '#b9f7ff' }}
                      >
                        View Profile
                      </Link>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>

        {/* 右边或上方：头像 + 背景装饰圆 */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: isMobile ? 4 : 0,
            position: 'relative',
          }}
        >

          {/* 头像 */}
          <Avatar
            alt="Wong Sim Bao"
            src={ProfileImage}
            sx={{
              width: 250,
              height: 250,
              border: `4px solid ${theme.palette.background.paper}`,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              position: 'relative',
              zIndex: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Decorative divider */}
      <Box
        sx={{
          mt: 6,
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, 
            ${theme.palette.primary.main} 20%, 
            ${theme.palette.secondary.main} 50%, 
            ${theme.palette.primary.main} 80%, 
            transparent 100%)`,
          opacity: 0.3,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default Header;
