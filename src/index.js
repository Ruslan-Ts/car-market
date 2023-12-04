import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './CommonStyle/CommonStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/car-market">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </>
);
