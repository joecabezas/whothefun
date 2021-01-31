import React from 'react';

type Dimension = {
  width: number;
  height: number;
};

type Props = {
  dimension: Dimension;
};

const Board = ({dimension}: Props) => {
  const [currentDimension, setCurrentDimension] = React.useState<Dimension>(
      dimension,
  );

  return <>Board</>;
};

Board.defaultProps = {
  dimension: {
    width: 1,
    height: 1,
  },
};

export default Board;
