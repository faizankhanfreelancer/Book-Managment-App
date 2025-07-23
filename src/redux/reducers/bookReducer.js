import { SET_BOOKS } from '../actions/bookActions';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;