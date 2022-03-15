import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#EEEEEE',
            },
            '&.Mui-selected': {
              backgroundColor: '#EEEEEE',
            },
            '&.Mui-selected:hover': {
              backgroundColor: '#EEEEEE',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
