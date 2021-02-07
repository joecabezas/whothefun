import React from 'react';

import Board from './Board';

const SelectCard = () => {
  const onCardClickHandler = (cardIndex: number) => {
    console.log(cardIndex);
  };

  return (
    <Board
      onCardClick={onCardClickHandler}
      flippable={false}
    />
  );
};

export default SelectCard;

