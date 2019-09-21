import React, { Component } from 'react';
import axios from 'axios';
import ErrorPage from './components/ErrorPage';
import LoadedApp from './components/LoadedApp';
import './App.css';

//import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = {};
// createMuiTheme({
//   palette: {
//     primary: { main: '#a840c5' },
//     secondary: { main: '#414542' },
//   },
// });

class App extends Component {
  state = {
    data: null,
    showError: false,
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/data.json`).then(
      response => {
        this.setState({ data: response.data });
      },
      () => this.setState({ showError: true })
    );
  }

  render() {
    const { data, showError } = this.state;
    const isLoading = data === null;
    let PageComponent = null;

    if (showError) {
      PageComponent = <ErrorPage data-test='error' data-cy='error' />;
    } else if (isLoading) {
      PageComponent = <div data-test='loading'>Loading...</div>;
    } else {
      PageComponent = <LoadedApp data={data} data-test='loaded' />;
    }

    return (
      <div className='App'>
        <ThemeProvider theme={theme}>
          {PageComponent}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
