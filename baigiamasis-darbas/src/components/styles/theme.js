import { createTheme } from '@mui/material/styles';

const themeBase = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1760,
    },
  },
  typography: {
    fontSize: 13,
    fontSizeLg: 15,
  },
});

const theme = createTheme(themeBase, {
  mixins: {
    toolbar: {
      [themeBase.breakpoints.up('sm')]: {
        minHeight: 80,
      },
    },
  },
  palette: {
    primary: {
      main: '#e31238',
      dark: '#e31238',
      light: '#ff6984',
    },
    success: {
      main: '#2e7d32',
      dark: '#1b5e20'
    },
    error: {
      main: '#d32f2f',
      

    }
  },
});

export default theme;