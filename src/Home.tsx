import React from 'react';

import {Link} from 'react-router-dom';

type Props ={
};

const Home = ({}: Props) => {
  return (
    <>
      <div>
        <h2>Step 1: Select Deck</h2>
        <div>
          <h3>Select a Community Deck</h3>
          (comming soon)
          <h3>Or <Link to="/createdeck">create your own</Link></h3>
        </div>
      </div>
    </>
  );
};

export default Home;
