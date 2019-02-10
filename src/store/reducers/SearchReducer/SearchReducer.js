import { updateObject } from 'utils/utility';
import * as actions from 'utils/constants/actions';

const initialState = {
  selectedStock: {
    name: '',
    logo: '',
    stock: []
  }
};

const setStock = (state, action) => {

  return updateObject(state, {
    selectedStock: {
      ...action.selectedStock
    }
  });
};

export default function searchReducer(stateParam, action) {
  const state = stateParam ? stateParam : initialState;

  switch (action.type) {
    case actions.SET_STOCK_END: return setStock(state, action);
    default: return state;
  }
}
