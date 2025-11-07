import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Paper } from '@mui/material';

const CarShowcase = () => {
  const cars = [
    {
      id: 1,
      model: 'Honda Civic',
      image: 'https://images.unsplash.com/photo-1606664515524-eb61d6cf4a0c?w=800&h=600&fit=crop',
      description: 'Reliable, fuel-efficient, and perfect for daily commutes',
    },
    {
      id: 2,
      model: 'Honda Accord',
      image: 'https://images.unsplash.com/photo-1606664515523-eb61d6cf4a0c?w=800&h=600&fit=crop',
      description: 'Sophisticated sedan with premium features and spacious interior',
    },
    {
      id: 3,
      model: 'Honda CR-V',
      image: 'https://images.unsplash.com/photo-1606664515522-eb61d6cf4a0c?w=800&h=600&fit=crop',
      description: 'Versatile SUV perfect for families and adventures',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }} data-label="car-showcase">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 2, fontWeight: 700 }}
          data-label="showcase-title"
        >
          Explore Our Honda Selection
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}
          data-label="showcase-subtitle"
        >
          From compact cars to spacious SUVs, we have the perfect Honda for every lifestyle
        </Typography>
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item xs={12} md={4} key={car.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
                data-label={`car-card-${car.id}`}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={car.image}
                  alt={car.model}
                  sx={{ objectFit: 'cover' }}
                  data-label={`car-image-${car.id}`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {car.model}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CarShowcase;

