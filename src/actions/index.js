import * as actionTypes from './types';
const { SET_USER, CLEAR_USER } = actionTypes;

export const setUser = user => {
  return {
    type: SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
