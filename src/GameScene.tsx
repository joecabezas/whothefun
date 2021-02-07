import React from 'react';
import {connect} from 'react-redux';

import {RootState} from './index';

import cardSelectedIndexSelector
  from './features/game/CardSelectedIndexSelector';

import Board from './Board';

type Props = {
  cardSelectedIndex: number;
};

const GameScene = ({cardSelectedIndex}: Props) => {
  return (
    <>
      <h1>Card selected index: {cardSelectedIndex}</h1>
      <Board />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cardSelectedIndex: cardSelectedIndexSelector(state),
});

export default connect(mapStateToProps)(GameScene);
