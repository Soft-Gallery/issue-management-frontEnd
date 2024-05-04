import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/theme';

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
