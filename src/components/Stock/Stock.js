import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import icArrowTop from 'assets/icons/ic-arrow-top.svg';
import icArrowDown from 'assets/icons/ic-arrow-down.svg';
class Stock extends PureComponent {
  state = { isCollapsed: false }

  toggleCollapse = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }
  render() {
    const { t, info, logo, title } = this.props;
    const action = info.openingvalue > info.actualvalue ? 'buy' :
      (info.openingvalue === info.actualvalue ? 'wait' : 'sell');

    return (
      <div className='stock'>
        <div className="card">
          <div className="card-header">
            <img src={ logo } alt="" />
            <h5 className='stock__title'>{ title } - <span>{ info.name }</span></h5>
            <button onClick={ () => this.toggleCollapse() } className="btn btn-link float-sm-right" aria-expanded={ this.state.isCollapsed.toString() } aria-controls="collapseOne">
              {
                this.state.isCollapsed ?
                  <Fragment>
                    { t('stocks.hideDetails') }
                    <img src={ icArrowTop } alt="" />
                  </Fragment>
                  :
                  <Fragment>
                    { t('stocks.showDetails') }
                    <img src={ icArrowDown } alt="" />
                  </Fragment>
              }

            </button>
          </div>

          <div className={ `collapse ${this.state.isCollapsed ? 'show' : ''} ` } >
            <div className="card-body">
              <p className={ `value ${action === 'buy' ? 'value--green' : 'value--red'}` }>
                { t('stocks.opening') }: <span>{ info.openingvalue.replace('.', ',') }</span>
              </p>
              <p className={ `value ${action === 'sell' ? 'value--green' : 'value--red'}` }>
                { t('stocks.actual') }: <span>{ info.actualvalue.replace('.', ',') }</span>
              </p>
              <button type="button" className="btn float-sm-right">
                { t(`stocks.${action}`) }
              </button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

Stock.propTypes = {
  t: PropTypes.func,
  info: PropTypes.object,
  logo: PropTypes.string,
  title: PropTypes.string
};

export default Stock;
