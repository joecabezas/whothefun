import React from 'react';
import styled from 'styled-components';

import ReactCardFlip from 'react-card-flip';

import CardFront from './CardFront';
import CardBack from './CardBack';

const StyledContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
`;

type Props = {
  imageUrl: string;
  flipTime: number;
};

const Card = ({imageUrl, flipTime}: Props) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const onClickHandler = (e: any) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledContainer onClick={onClickHandler}>
      <ReactCardFlip
        flipSpeedBackToFront={flipTime}
        flipSpeedFrontToBack={flipTime}
        isFlipped={isFlipped}>
        <CardFront />
        <CardBack />
      </ReactCardFlip>
    </StyledContainer>
  );
};

Card.defaultProps = {
  imageUrl: null,
  flipTime: 0.3,
};

export default Card;
