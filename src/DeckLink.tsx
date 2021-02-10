import React from 'react';
import pako from 'pako';

import {Link} from 'react-router-dom';

type Props = {
  deckObject: any
};

const serialize = (input: object) => {
  const compressed = pako.deflate(JSON.stringify(input), {to: 'string'});
  const urlBase64 = btoa(String.fromCharCode.apply(null, compressed));
  return encodeURIComponent(urlBase64);
};

const getDeckLink = (deck: object) => {
  return '/deck/' + serialize(deck);
};

const DeckLink = ({deckObject}: Props) => {
  const deckPath = getDeckLink(deckObject);

  return (
    <>
      <Link to={deckPath}>
        {deckPath}
      </Link>
    </>
  );
};

export default DeckLink;
