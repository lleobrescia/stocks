import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../store';

const Reducers = () => {
  return appReducer();
};

const appReducer = () => combineReducers({
  router: connectRouter(history)
});

export default Reducers;
