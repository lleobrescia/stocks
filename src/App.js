import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18n from 'components/i18n';

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render () {
    const { history } = this.props;

    return (
      <I18nextProvider i18n={ i18n }>
        <ConnectedRouter history={ history }>
          <div className="App">
            <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </ConnectedRouter>
      </I18nextProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
