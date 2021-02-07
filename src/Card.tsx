import React from 'react';
import styled from 'styled-components';

import ReactCardFlip from 'react-card-flip';

import CardFront from './CardFront';
import CardBack from './CardBack';

const StyledContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
`;

const flipTime = 0.3;

type Props = {
  imageUrl: string;
  label: string;
};

const Card = ({imageUrl, label}: Props) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const onClickHandler = (_e: any) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledContainer onClick={onClickHandler}>
      <ReactCardFlip
        flipSpeedBackToFront={flipTime}
        flipSpeedFrontToBack={flipTime}
        isFlipped={isFlipped}>
        <CardFront
          imageUrl={imageUrl}
          label={label}
        />
        <CardBack />
      </ReactCardFlip>
    </StyledContainer>
  );
};

Card.defaultProps = {
  imageUrl: null,
};

export default Card;
