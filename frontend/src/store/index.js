import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page-slice.js';
import alertReducer from './alert-slice.js';

export default configureStore({
  reducer: {
    pages: pageReducer,
    alerts: alertReducer
  }
});
