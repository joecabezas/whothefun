import React from 'react';
import {connect} from 'react-redux';

import {setDeckJsonData} from './features/game/deckSlice';
import {DeckPayload} from './features/game/deckSlice';

import DeckExample from '../data/deck_example.json';

type Props = {
  setDeckJsonData: (jsonObject: DeckPayload) => void
};

const CreateDeck = ({setDeckJsonData}: Props) => {
  const [value, setValue] = React.useState(
      JSON.stringify(DeckExample, null, 2),
  );

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  const onClickHandler = (_e: any) => {
    // TODO: validate JSON
    const jsonObject: object = JSON.parse(value);
    setDeckJsonData({jsonObject: jsonObject});
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
    </>
  );
};

export default connect(
    null,
    {setDeckJsonData},
)(CreateDeck);
