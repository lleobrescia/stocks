import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props => {
  const { t } = props;

  return (
    <div className="not-found" >
      <h2 className="not-found__title">
        { t('pageNotFound') }
      </h2>
    </div>
  );
};

NotFound.propTypes = {
  t: PropTypes.func
};

export default NotFound;
