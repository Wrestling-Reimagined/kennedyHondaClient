import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleIcon from '@mui/icons-material/People';

const AboutRob = () => {
  const features = [
    {
      icon: <LocalCarWashIcon sx={{ fontSize: 50 }} />,
      title: 'Expert Knowledge',
      description: 'Years of experience helping customers find their perfect Honda match',
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 50 }} />,
      title: 'Honest & Transparent',
      description: 'No pressure, no surprises. Just honest advice and fair deals',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 50 }} />,
      title: 'Customer First',
      description: 'Your satisfaction is my priority. I believe in building lasting relationships',
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: 'background.default',
        background: 'linear-gradient(to bottom, #F9FAFB 0%, #FFFFFF 100%)',
      }}
      data-label="about-rob-section"
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
              }}
              data-label="about-rob-card"
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
                data-label="about-title"
              >
                Meet Robert Kennedy
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ mb: 3, lineHeight: 1.8, opacity: 0.95 }}
                data-label="about-description"
              >
                Hi, I'm Robert, and I'm passionate about helping people find the perfect Honda vehicle. 
                For me, this isn't just about selling cars—it's about understanding your needs, 
                your lifestyle, and your dreams.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
                data-label="about-passion"
              >
                Whether you're looking for a reliable daily commuter, a spacious family SUV, or 
                a fuel-efficient hybrid, I take pride in matching you with a vehicle that you'll 
                love driving for years to come. My commitment is to make your car buying experience 
                stress-free, transparent, and enjoyable.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, opacity: 0.95 }}
                data-label="about-commitment"
              >
                Let's find your perfect Honda together!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                    }}
                    data-label={`feature-card-${index}`}
                  >
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 70,
                        height: 70,
                      }}
                      data-label={`feature-icon-${index}`}
                    >
                      {feature.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutRob;

