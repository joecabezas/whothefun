import React from 'react';
import {connect} from 'react-redux';

import Board from './Board';
import {selectCard} from './features/game/gameSlice';
import {SelectCardPayload} from './features/game/gameSlice';

import deckJsonObjectSelector
  from './features/game/DeckJsonObjectSelector';

type Props = {
  deckObject: any,
  selectCard: (payload: SelectCardPayload) => void
};

const SelectCard = ({
  selectCard,
  deckObject,
}: Props) => {
  const onCardClickHandler = (cardIndex: number) => {
    selectCard({selectedCardIndex: cardIndex});
  };

  return (
    <>
      <h1>Select a card</h1>
      <Board
        deckObject={deckObject}
        onCardClick={onCardClickHandler}
        flippable={false}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  deckObject: deckJsonObjectSelector(state),
});

export default connect(
    mapStateToProps,
    {selectCard},
)(SelectCard);
