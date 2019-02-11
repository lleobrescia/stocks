import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Stock from 'components/Stock';
import IcNoSrarch from 'assets/icons/ic-no-search.svg';

class Home extends PureComponent {

  render() {
    const { t, stock } = this.props;

    return (
      <section className='home'>
        {
          stock.stock.length === 0 ?
            (<div className="no-search">
              <div className="text-center">
                <img src={ IcNoSrarch } alt="" />
                <p>{ t('home.noSearch') }</p>
              </div>
            </div>) :

            (<div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="search-title">{ t('home.searchResult') }</h2>
                  {
                    stock.stock.map(item => (
                      <Stock t={ t } key={ item.name } info={ item } logo={ stock.logo } title={ stock.name } />
                    ))
                  }
                </div>
              </div>
            </div>)
        }

      </section>

    );
  }
}

const mapStateToProps = ({ SearchReducer }) => {
  return {
    stock: SearchReducer.selectedStock
  };
};

Home.propTypes = {
  t: PropTypes.func,
  stock: PropTypes.object
};

export default connect(mapStateToProps, null)(Home);
