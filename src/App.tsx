import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/router";
import './styles/globals.css'
const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
