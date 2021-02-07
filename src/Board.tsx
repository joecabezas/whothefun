import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import DeckExample from '../data/deck_example.json';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
};

type CardData = {
  imageUrl: string;
  label: string;
}

const Board = ({}: Props) => {
  const createCards = () => {
    const cards: React.ReactNode[] = [];
    DeckExample.cards.forEach((card: CardData, index: number) => {
      cards.push(
          <Card
            key={index}
            imageUrl={card.imageUrl}
            label={card.label}
          />,
      );
    });
    return cards;
  };

  return (
    <StyledContainer>
      {createCards()}
    </StyledContainer>
  );
};

Board.defaultProps = {
};

export default Board;
