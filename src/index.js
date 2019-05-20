import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
const store = configureStore();
window.store = store
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();