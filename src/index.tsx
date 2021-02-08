import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import gameSliceReducer from './features/game/gameSlice';
import deckSliceReducer from './features/game/deckSlice';

import App from './App';
import CreateDeck from './CreateDeck';

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
    deck: deckSliceReducer,
  },
});

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/createdeck" exact>
            <CreateDeck />
          </Route>
          <Route path="/cardselect" exact>
            <App />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>,
    document.getElementById('root'),
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
