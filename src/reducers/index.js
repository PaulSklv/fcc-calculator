import { combineReducers } from 'redux';

composeReducer = (state = [], action) => {
  switch(action.type) {
    case 'COMPOSE_VALUE':
      return [...state, action.payload];
    default:
      return state;
  };
};

export default combineReducers({
  value: composeReducer
});