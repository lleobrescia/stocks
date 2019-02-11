import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const { t, title, onClicYes, onClickNo, showModal } = props;

  return (
    <div className={ `modal ${showModal ? 'show' : ''}` } >
      <div className="modal__body">
        <h4 className="modal__title">
          { title }
        </h4>
        <div className="btn-group">
          <button onClick={ () => onClicYes() } type="button" className="btn">
            { t('yes') }
          </button>
          <button onClick={ () => onClickNo() } type="button" className="btn">
            { t('no') }
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
  onClicYes: PropTypes.func,
  onClickNo: PropTypes.func,
  showModal: PropTypes.bool
};

export default Modal;
