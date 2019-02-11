import React from 'react';
import PropTypes from 'prop-types';

import Search from 'components/Search';

const Header = props => {
  const { t, hasSearch } = props;

  return (
    <header className="header">
      <h1 className="header__title">
        { t('siteTitle') }
      </h1>

      {
        hasSearch ? (<Search t={ t } />) : null
      }

    </header>
  );
};

Header.propTypes = {
  t: PropTypes.func,
  hasSearch: PropTypes.bool
};

Header.defaultProps = {
  t: () => { },
  hasSearch: true
};

export default Header;
