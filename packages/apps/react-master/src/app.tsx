import React from "react";
import { routes } from "./router/index";
import { BrowserRouter, useRoutes } from "react-router-dom";

const Router = () => useRoutes(routes);

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
