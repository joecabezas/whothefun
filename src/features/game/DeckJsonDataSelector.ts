import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../index';

const selectDeckJsonObject = (state: RootState) => state.deck.jsonObject;

const deckJsonObjectSelector = createSelector(
    [selectDeckJsonObject],
    (selectDeckJsonObject) => selectDeckJsonObject,
);

export default deckJsonObjectSelector;

