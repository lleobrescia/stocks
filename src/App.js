import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18n from 'components/i18n';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <I18nextProvider i18n={ i18n }>
        <ConnectedRouter history={ history }>
          <section className='site-body'>

          </section>
        </ConnectedRouter>
      </I18nextProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
