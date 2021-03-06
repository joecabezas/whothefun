import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  // TODO replace any with a deck type
  deckObject: any,
  flippable: boolean,
  onCardClick?: (cardIndex: number) => void,
};

type CardData = {
  imageUrl: string;
  label: string;
}

const Board = ({
  deckObject,
  flippable,
  onCardClick,
}: Props) => {
  const createCards = () => {
    const cards: React.ReactNode[] = [];

    console.log(deckObject);
    if (!deckObject?.cards) return cards;

    deckObject.cards.forEach((card: CardData, index: number) => {
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
