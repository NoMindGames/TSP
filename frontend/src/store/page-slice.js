import { createSlice } from '@reduxjs/toolkit';
import { AppRoutes } from '../utils/utils';

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    page: AppRoutes.INITIAL
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload.page;
    }
  }
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
