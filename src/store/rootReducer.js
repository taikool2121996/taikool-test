import { combineReducers } from '@reduxjs/toolkit';
// add reducers here
import baseRequestReducer from './reducers/baseRequest/baseRequest.slice';
import aRequestReducer from './reducers/aRequest/aRequest.slice';


const rootReducer = combineReducers({
  baseRequest: baseRequestReducer,
  aRequest: aRequestReducer,
});

export default rootReducer;