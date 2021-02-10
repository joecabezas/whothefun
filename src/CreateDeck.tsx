import React from 'react';
import {connect} from 'react-redux';

import Board from './Board';
import DeckLink from './DeckLink';

import {setDeckJsonData} from './features/game/deckSlice';
import {DeckPayload} from './features/game/deckSlice';

import DeckExample from '../data/deck_example.json';

type Props = {
  setDeckJsonData: (jsonObject: DeckPayload) => void
};

const CreateDeck = ({setDeckJsonData}: Props) => {
  const [deckObject, setDeckObject] = React.useState(DeckExample);
  const [value, setValue] = React.useState(
      JSON.stringify(DeckExample, null, 2),
  );

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
    try {
      setDeckObject(JSON.parse(e.target.value));
    } catch (e) {
      // TODO: warn user
    }
  };

  const onClickHandler = (_e: any) => {
    setDeckJsonData({jsonObject: deckObject});
  };

  return (
    <>
      <textarea
        cols={100}
        rows={50}
        value={value}
        onChange={onChangeHandler}
      />
      <div>
        <button onClick={onClickHandler}>
          Set Deck
        </button>
      </div>
      <DeckLink
        deckObject={deckObject}
      />
      <h3>preview:</h3>
      <Board
        deckObject={deckObject}
        flippable={true}
      />
    </>
  );
};

export default connect(
    null,
    {setDeckJsonData},
)(CreateDeck);
