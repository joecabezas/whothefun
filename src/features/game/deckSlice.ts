import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type DeckPayload = {
  jsonObject: object
};

const deckSlice = createSlice({
  name: 'deck',
  initialState: {jsonObject: null},
  reducers: {
    setDeckJsonData: (state, action: PayloadAction<DeckPayload>) => {
      state.jsonObject = action.payload.jsonObject;
    },
  },
});

export const {setDeckJsonData} = deckSlice.actions;
export default deckSlice.reducer;
export {DeckPayload};

