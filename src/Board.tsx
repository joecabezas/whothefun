import React from 'react';

import Card from './Card';

type Props = {
};

const Board = ({}: Props) => {
  const cardNumber = 9;

  const createCards = () => {
    const cards = [];
    for (let i = 0; i < cardNumber; i++) {
      cards.push(<Card />);
    }
    return cards;
  };

  return <>{createCards()}</>;
};

Board.defaultProps = {
};

export default Board;
