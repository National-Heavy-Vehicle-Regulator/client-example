import {ApolloProvider} from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import React, {FC} from 'react';
import {client} from './apollo/clients';
import appTheme from './App.theme';
import {Router} from './router';

const theme = createMuiTheme(appTheme);

const App: FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
