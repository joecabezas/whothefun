import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SelectCardPayload = {
  selectedCardIndex: number
};

const gameSlice = createSlice({
  name: 'game',
  initialState: {selectedCardIndex: null},
  reducers: {
    selectCard: (state, action: PayloadAction<SelectCardPayload>) => {
      state.selectedCardIndex = action.payload.selectedCardIndex;
    },
  },
});

export const {selectCard} = gameSlice.actions;
export default gameSlice.reducer;
export {SelectCardPayload};
