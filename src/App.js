import React, { Component } from 'react';
import './App.css';
import InputText from '../src/components/InputText'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SimpleAppBar from "./components/SimpleAppBar";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <SimpleAppBar/>
            <p className="App-intro">
              Summarize any text
            </p>
          <InputText />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
