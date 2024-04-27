import { createSlice } from '@reduxjs/toolkit';

const baseRequestSlice = createSlice({
  name: 'baseRequest',
  initialState: {
    data: [],
    error: '',
    isFetching: false,
  },
  reducers: {
    requestBaseRequest(state) {
      state.error = '';
      state.isFetching = true;
    },

    requestBaseRequestSuccessful(state, { payload }) {
      state.data = payload;
      state.isFetching = false;
    },

    requestBaseRequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const {
  requestBaseRequest,
  requestBaseRequestSuccessful,
  requestBaseRequestFailed,
} = baseRequestSlice.actions;

export default baseRequestSlice.reducer;
