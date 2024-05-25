import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/theme';
import GlobalStyles from './shared/styles/GlobalStyles';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);
