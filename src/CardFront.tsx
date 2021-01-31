import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  width: 120px;

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.4);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const StyledLabel = styled.div`
  background: lavender;
  padding: 0.5em;
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
      <StyledImage src={imageUrl} />
      <StyledLabel>
          Label
      </StyledLabel>
    </StyledContainer>
  );
};

CardFront.defaultProps = {
  imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  label: null,
};

export default CardFront;
