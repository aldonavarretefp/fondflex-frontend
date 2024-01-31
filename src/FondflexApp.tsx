import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";

import { store } from "./store";
import { CookiesProvider } from "react-cookie";

const FondFlexApp = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
};

export default FondFlexApp;
