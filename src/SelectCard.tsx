import React from 'react';
import {connect} from 'react-redux';

import Board from './Board';
import {selectCard} from './features/game/gameSlice';
import {SelectCardPayload} from './features/game/gameSlice';

type Props = {
  selectCard: (payload: SelectCardPayload) => void
};

const SelectCard = ({selectCard}: Props) => {
  const onCardClickHandler = (cardIndex: number) => {
    console.log(cardIndex);
    selectCard({selectedCardIndex: cardIndex});
  };

  return (
    <>
      <h1>Select a card</h1>
      <Board
        onCardClick={onCardClickHandler}
        flippable={false}
      />
    </>
  );
};

export default connect(
    null,
    {selectCard},
)(SelectCard);
