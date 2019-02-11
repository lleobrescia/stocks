import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider, withTranslation } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18n from 'components/i18n';
import { Route, Switch } from 'react-router';
import * as urls from 'utils/constants/urls';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Home from 'views/Home';
import NotFound from 'views/NotFound';

class App extends PureComponent {
  render() {
    const { history, t, urlPathname } = this.props;

    return (
      <I18nextProvider i18n={ i18n }>
        <ConnectedRouter history={ history }>
          <section className='site-body'>
            <Header t={ t } hasSearch={ urlPathname === urls.HOME } />
            <Switch>
              <Route exact path={ urls.HOME } component={ () => {
                return <Home t={ t } />;
              }
              } />
              <Route component={ () => {
                return <NotFound t={ t } />;
              }
              } />
            </Switch>
          </section>
        </ConnectedRouter>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = ({ router }) => {
  return {
    urlPathname: router.location.pathname
  };
};

App.propTypes = {
  history: PropTypes.object,
  t: PropTypes.func,
  urlPathname: PropTypes.string
};

export default connect(mapStateToProps, null)(withTranslation()(App));
