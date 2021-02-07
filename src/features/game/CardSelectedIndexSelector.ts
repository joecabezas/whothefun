import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../index';

const selectCardIndex = (state: RootState) => state.game.selectedCardIndex;

const cardSelectedIndexSelector = createSelector(
    [selectCardIndex],
    (selectedCardIndex) => selectedCardIndex,
);

export default cardSelectedIndexSelector;
