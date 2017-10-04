import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';


/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
const initialState = window.__INITIAL_STATE__; // eslint-disable-line

function pageState(state = [], action) {
  switch (action.type) {
    case 'PAGE':
      return state.concat([action.text]);
    default:
      return state;
  }
}
const store = createStore(pageState, initialState);

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}

// module.hot.accept('./reducers', () => {
//   // eslint-disable-next-line
//   const nextRootReducer = require('./reducers/index');
//   store.replaceReducer(nextRootReducer);
// });
