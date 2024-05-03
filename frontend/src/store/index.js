import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page-slice.js';

export default configureStore({
  reducer: {
    pages: pageReducer
  }
});
