import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
      data-label="footer"
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center" data-label="footer-text">
          © {new Date().getFullYear()} Robert Kennedy - Honda Sales. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

