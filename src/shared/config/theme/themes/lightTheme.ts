import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    // background: {
    //   default: '#f5f5f5', // Light background color
    //   paper: '#ffffff', // Background color for paper components
    // },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.17rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '0.83rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.67rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        input: {
          padding: '0.5rem',
        },
      },
    },
  },
})
