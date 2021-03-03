import {INCREMENT, DECREMENT} from '../ActionTypes';

export const incrementAction = () => {
  return (dispatch) => {
    dispatch({type: INCREMENT});
  };
};

export const decrementAction = () => {
  return (dispatch) => {
    dispatch({type: DECREMENT});
  };
};
