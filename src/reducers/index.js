import {combineReducers} from 'redux'
import blogs from './blogs'
import {reducer as form} from 'redux-form'

import {FETCH_BLOGS, POST_ERROR} from '../actions'
const errorMsg = (state=null, action) => {
  switch (action.type) {
      case (FETCH_BLOGS):
          return (action.error) ? action.payload.message : state;
      default:
          return state;
  }
};

const RootReducer = combineReducers({blogs, form, errorMsg});

export default RootReducer;