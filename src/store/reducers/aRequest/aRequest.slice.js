import { createSlice } from '@reduxjs/toolkit';

const aRequestSlice = createSlice({
  name: 'aRequest',
  initialState: {
    data: [],
    error: '',
    isFetching: false,
  },
  reducers: {
    requestARequest(state) {
      state.error = '';
      state.isFetching = true;
    },

    requestARequestSuccessful(state, { payload }) {
      state.data = payload;
      state.isFetching = false;
    },

    requestARequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const {
  requestARequest,
  requestARequestSuccessful,
  requestARequestFailed,
} = aRequestSlice.actions;

export default aRequestSlice.reducer;
