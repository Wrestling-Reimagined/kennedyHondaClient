import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        color: 'white',
        py: { xs: 10, md: 15 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      data-label="hero-section"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2.5rem', md: '4rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
          data-label="hero-title"
        >
          Find Your Perfect Honda with Robert Kennedy
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            opacity: 0.95,
            maxWidth: '900px',
            mx: 'auto',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            lineHeight: 1.6,
          }}
          data-label="hero-subtitle"
        >
          Your trusted Honda expert dedicated to helping you find the vehicle that fits your life, 
          your budget, and your dreams. New or used, Robert is here to make your car buying experience exceptional.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            opacity: 0.95,
            fontWeight: 500,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
          }}
          data-label="hero-tagline"
        >
          Quality • Reliability • Personalized Service
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;

