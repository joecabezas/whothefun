import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import DeckExample from '../data/deck_example.json';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  flippable: boolean;
  onCardClick?: (cardIndex: number) => void;
};

type CardData = {
  imageUrl: string;
  label: string;
}

const Board = ({
  flippable,
  onCardClick,
}: Props) => {
  const createCards = () => {
    const cards: React.ReactNode[] = [];
    DeckExample.cards.forEach((card: CardData, index: number) => {
      cards.push(
          <Card
            flippable={flippable}
            imageUrl={card.imageUrl}
            index={index}
            key={index}
            label={card.label}
            onClick={onCardClick}
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
  flippable: true,
};

export default Board;
