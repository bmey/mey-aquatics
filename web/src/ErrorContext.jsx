import React, { Component } from 'react';

const ErrorContext = React.createContext();

class ErrorProvider extends Component {
  state = {
    errors: [],
    logs: [],
  };

  handleError = error => {
    this.setState({ errors: [...this.state.errors, error] });
  };

  handleLog = log => {
    this.setState({ logs: [...this.state.logs, log] });
  };

  render() {
    // return (
    //   <ErrorContext.Provider>
    //     {this.props.children}
    //   </ErrorContext.Provider>
    // );
    try {
      const _this = this;
      return (
        <ErrorContext.Provider
          value={{
            errors: [...this.state.errors],
            logs: [...this.state.logs],
            handleError: _this.handleError,
            addLog: _this.handleLog,
          }}
        >
          {this.props.children}
        </ErrorContext.Provider>
      );
    } catch (e) {
      return (
        <div>
          Something went wrong...
          {e}
          {this.state}
        </div>
      );
    }
  }
}

export { ErrorProvider };
export default ErrorContext;
