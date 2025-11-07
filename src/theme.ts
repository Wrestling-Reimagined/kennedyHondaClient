import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3A8A', // Honda blue
      light: '#3B82F6',
      dark: '#1E40AF',
    },
    secondary: {
      main: '#DC2626', // Red accent
      light: '#EF4444',
      dark: '#B91C1C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;

