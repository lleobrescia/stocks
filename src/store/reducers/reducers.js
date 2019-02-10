import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../store';

import SearchReducer from './SearchReducer';

const Reducers = () => {
  return appReducer();
};

const appReducer = () => combineReducers({
  router: connectRouter(history),
  SearchReducer
});

export default Reducers;
