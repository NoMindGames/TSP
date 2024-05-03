import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ALERT_DELAY = 1500;

export const addAlert = createAsyncThunk(
  'alerts/addAlert',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, ALERT_DELAY));
  }
);

const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    alerts: []
  },
  extraReducers: (builder) => {
    builder.addCase(addAlert.pending, (state, action) => {
      state.alerts.push({ ...action.meta.arg, id: Date.now() });
    });
    builder.addCase(addAlert.fulfilled, (state) => {
      state.alerts.shift();
    });
  }
});


export default alertSlice.reducer;
