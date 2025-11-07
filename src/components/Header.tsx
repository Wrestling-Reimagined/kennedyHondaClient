import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{
        bgcolor: 'primary.main',
        borderBottom: '3px solid',
        borderColor: 'secondary.main',
      }}
      data-label="header"
    >
      <Toolbar sx={{ py: 1.5 }}>
        <DirectionsCarIcon sx={{ mr: 2, fontSize: 32 }} data-label="header-icon" />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ fontWeight: 700, lineHeight: 1.2 }} 
            data-label="site-title"
          >
            Robert Kennedy
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ opacity: 0.9, fontWeight: 500 }} 
            data-label="site-subtitle"
          >
            Honda Sales Expert
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

