import * as React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AppRouter  from './routes/AppRouter';
import { Box, CssBaseline} from '@material-ui/core';
import {ContextProvider} from './Context';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: "#FFFFFF"
      },
    },
  },
});

const App : React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <ContextProvider>
            <Box>
              <AppRouter/>
            </Box>
          </ContextProvider>
        </BrowserRouter>
      </React.Fragment>
    </MuiThemeProvider>

  );
}

export default App;
