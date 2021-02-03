import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
};

const Board = ({}: Props) => {
  const cardNumber = 20;

  const createCards = () => {
    const cards = [];
    for (let i = 0; i < cardNumber; i++) {
      cards.push(<Card key={i} />);
    }
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
