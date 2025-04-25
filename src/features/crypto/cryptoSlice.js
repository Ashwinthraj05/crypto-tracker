import { createSlice } from '@reduxjs/toolkit';
import { sampleAssets } from '../../data/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleAssets
  },
  reducers: {
    updateAssets(state, action) {
      state.assets = action.payload;
    }
  }
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
