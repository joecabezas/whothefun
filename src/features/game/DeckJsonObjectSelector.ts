import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../index';

const selectDeckObject = (state: RootState) => state.deck.deckObject;

const deckObjectSelector = createSelector(
    [selectDeckObject],
    (selectDeckObject) => selectDeckObject,
);

export default deckObjectSelector;

