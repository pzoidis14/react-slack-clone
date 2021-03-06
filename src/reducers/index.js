import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';
const { SET_USER, CLEAR_USER } = actionTypes;

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...initialUserState,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ user: user_reducer });

export default rootReducer;
