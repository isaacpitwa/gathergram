import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/router";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
