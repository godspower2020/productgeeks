import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import store from '../src/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="251708576444-coslmhk3uo51v36gjf74r6h4oshcg1ab.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
