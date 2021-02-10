import React from 'react';
import pako from 'pako';
import {connect} from 'react-redux';

import {useRouteMatch} from 'react-router-dom';
import Board from './Board';

type Props = {
};

const deserialize = (input: string) => {
  const decoded = decodeURIComponent(input);
  const bin = atob(decoded).split('').map(function(c) {
    return c.charCodeAt(0);
  });
  const inflated = pako.inflate(bin, {to: 'string'});
  return JSON.parse(inflated);
};

const getDeckFromData = (data: string) => {
  try {
    return deserialize(data);
  } catch (e) {
    return null;
  }
};

const DeckImport = ({}: Props) => {
  const {deckData} = useRouteMatch('/deck/:deckData').params as any;
  const deckObject = getDeckFromData(deckData);

  if (!deckObject) return <div>invalid deck</div>;

  return (
    <>
      <div>
        <button>
          Use this deck
        </button>
      </div>
      <div>
        <Board
          deckObject={deckObject}
          flippable={true}
        />
      </div>
    </>
  );
};

export default connect(null)(DeckImport);
