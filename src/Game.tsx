import React from 'react';
import {connect} from 'react-redux';

import {RootState} from './index';

import SelectCard from './SelectCard';
import GameScene from './GameScene';

import cardSelectedIndexSelector
  from './features/game/CardSelectedIndexSelector';

type Props = {
  cardSelectedIndex: number
};

const Game = ({cardSelectedIndex}: Props) => {
  return (
    <>
      {(cardSelectedIndex === null) ? <SelectCard /> : <GameScene />}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cardSelectedIndex: cardSelectedIndexSelector(state),
});

export default connect(mapStateToProps)(Game);
