import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../components/reducers/reducer';

const store = configureStore({
  reducer: rootReducer,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
export default MyApp;
