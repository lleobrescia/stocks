import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider, withTranslation } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18n from 'components/i18n';
import { Route, Switch } from 'react-router';
import * as urls from 'utils/constants/urls';

import Header from 'components/Header';
import Home from 'views/Home';

class App extends PureComponent {
  render() {
    const { history, t } = this.props;

    return (
      <I18nextProvider i18n={ i18n }>
        <ConnectedRouter history={ history }>
          <section className='site-body'>
            <Header t={ t } />
            <Switch>
              <Route exact path={ urls.HOME } component={ () => {
                return <Home t={ t } />;
              }
              } />
            </Switch>
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

export default withTranslation()(App);
