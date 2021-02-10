import React from 'react';
import {connect} from 'react-redux';

import {RootState} from './index';

import cardSelectedIndexSelector
  from './features/game/CardSelectedIndexSelector';
import deckJsonObjectSelector
  from './features/game/DeckJsonObjectSelector';

import Board from './Board';

type Props = {
  cardSelectedIndex: number;
  deckObject: any,
};

const GameScene = ({
  cardSelectedIndex,
  deckObject,
}: Props) => {
  return (
    <>
      <h1>Card selected index: {cardSelectedIndex}</h1>
      <Board
        deckObject={deckObject}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cardSelectedIndex: cardSelectedIndexSelector(state),
  deckObject: deckJsonObjectSelector(state),
});

export default connect(mapStateToProps)(GameScene);
