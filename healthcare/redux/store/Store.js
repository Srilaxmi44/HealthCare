import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './root'; // Update the path

const customMiddleware = store => next => action => {
  // Your custom middleware logic here, if needed
  return next(action);
};

const middleware = [thunk, customMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
