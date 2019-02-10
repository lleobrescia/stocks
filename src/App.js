import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider, withTranslation  } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18n from 'components/i18n';

import Header from 'components/Header';

class App extends Component {
  render() {
    const { history, t } = this.props;

    return (
      <I18nextProvider i18n={ i18n }>
        <ConnectedRouter history={ history }>
          <section className='site-body'>
            <Header t={ t } />
          </section>
        </ConnectedRouter>
      </I18nextProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  t: PropTypes.func
};

export default withTranslation ()(App);
