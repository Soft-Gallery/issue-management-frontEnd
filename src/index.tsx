import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/theme';
import GlobalStyles from './shared/styles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
