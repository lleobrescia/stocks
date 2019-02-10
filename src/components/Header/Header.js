import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { t } = props;

  return (
    <header className="header">
      <h1 className="header__title">
        { t('siteTitle') }
      </h1>
    </header>
  );
};

Header.propTypes = {
  t: PropTypes.func
};

export default Header;
