import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import { connect } from 'react-redux';
import { SET_STOCK_START } from 'utils/constants/actions';

import stocks from 'assets/data/stocks.json';

class Search extends PureComponent {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    const { setStock } = this.props;
    this.setState({ selectedOption });

    setStock(selectedOption);
  }

  loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(stocks.market.company.filter(stock =>
        stock.name.toLowerCase().includes(inputValue.toLowerCase())
      ));
    }, 100);
  }

  getOptionLabel = option => {
    return option.name;
  }

  onFocus = () => this.setState({ selectedOption: null })

  noOptionsMessage = value => {
    const { t } = this.props;
    if (value.inputValue) return t('search.notFound');

    return t('search.typeToSearch');
  }

  render() {
    const { t } = this.props;
    const DropdownIndicator = () => null;

    return (
      <div className='search'>
        <AsyncSelect
          blurInputOnSelect={ true }
          className='search-select'
          classNamePrefix='search-select'
          components={ { DropdownIndicator } }
          getOptionLabel={ this.getOptionLabel }
          loadOptions={ this.loadOptions }
          onChange={ this.handleChange }
          onFocus={ this.onFocus }
          openMenuOnClick={ false }
          placeholder={ t('search.placeholder') }
          noOptionsMessage={ value => this.noOptionsMessage(value) }
          value={ this.state.selectedOption }
        />
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStock: (selectedStock) => {
      dispatch({
        type: SET_STOCK_START,
        selectedStock
      });
    }
  };
};

Search.propTypes = {
  t: PropTypes.func,
  setStock: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Search);
