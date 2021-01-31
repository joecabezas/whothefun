import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 140px;
  height: 140px;

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.4);
  }

  border-radius: 5px;

  background: dimgray;
`;

type Props = {
  imageUrl: string;
};

const CardBack = ({imageUrl}: Props) => {
  return <StyledContainer />;
};

CardBack.defaultProps = {
  imageUrl: null,
};

export default CardBack;
