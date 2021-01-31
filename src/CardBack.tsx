import React from 'react';

type Props = {
  imageUrl: string;
};

const CardBack = ({imageUrl}: Props) => {
  return <div>Back</div>;
};

CardBack.defaultProps = {
  imageUrl: null,
};

export default CardBack;
