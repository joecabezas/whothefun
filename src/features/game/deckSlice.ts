import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type DeckPayload = {
  deckObject: object
};

const deckSlice = createSlice({
  name: 'deck',
  initialState: {deckObject: null},
  reducers: {
    setDeckObject: (state, action: PayloadAction<DeckPayload>) => {
      state.deckObject = action.payload.deckObject;
    },
  },
});

export const {setDeckObject} = deckSlice.actions;
export default deckSlice.reducer;
export {DeckPayload};

