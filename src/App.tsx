import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';

import SelectCard from './SelectCard';
import {AppDispatch, RootState} from './index';

type Props = {
  cardSelectedIndex: number
};

const App = ({cardSelectedIndex}: Props) => {
  return (
    <SelectCard />
  );
};

const selectCardIndex = (state: RootState) => state.game.selectedCardIndex;

const cardSelectedIndexSelector = createSelector(
    [selectCardIndex],
    (selectedCardIndex) => selectedCardIndex,
);

const mapStateToProps = (state: RootState) => ({
  cardSelectedIndex: cardSelectedIndexSelector(state),
});

export default connect(mapStateToProps)(App);
