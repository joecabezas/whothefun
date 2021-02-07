import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 140px;
  height: 140px;

  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.4);
  }

  border-radius: 5px;
`;

const StyledImage = styled.div.attrs(() => {})`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 85%;

  border-radius: 5px 5px 0px 0px;
`;

const StyledLabel = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background: lavender;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  imageUrl: string,
  label: string
};

const CardFront = ({
  imageUrl,
  label,
}: Props) => {
  return (
    <StyledContainer>
      <StyledImage imageUrl={imageUrl} />
      <StyledLabel>
        {label}
      </StyledLabel>
    </StyledContainer>
  );
};

CardFront.defaultProps = {
  imageUrl: 'http://placehold.it/200x400',
  label: null,
};

export default CardFront;
