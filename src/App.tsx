import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutRob from './components/AboutRob';
import CarShowcase from './components/CarShowcase';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      data-label="app"
    >
      <Header />
      <Hero />
      <AboutRob />
      <CarShowcase />
      <Box
        sx={{
          py: 10,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <LeadForm />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;

