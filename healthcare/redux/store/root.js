import {combineReducers} from '@reduxjs/toolkit';
import loginApi from '../../redux/reducer/ServiceVisit';

const Reducers = {
  loginApi,
};

const rootReducer = combineReducers({
  ...Reducers,
});

export default rootReducer;
