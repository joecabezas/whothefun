import React from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

type Props = {
  imageUrl: string;
};

const Card = ({imageUrl}: Props) => {
  const [active, setActive] = React.useState(true);

  const onClickHandler = (e: any) => {
    setActive(!active);
  };

  return (
    <div onClick={onClickHandler}>
      {active ? <CardFront /> : <CardBack />}
    </div>
  );
};

Card.defaultProps = {
  imageUrl: null,
};

export default Card;
