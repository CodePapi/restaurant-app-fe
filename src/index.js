import 'antd/dist/antd.css'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store';
import Routes from './Routes';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'))
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
