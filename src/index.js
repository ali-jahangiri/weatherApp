import React from "react";
import ReactDOM from "react-dom";
import "./style/base.scss";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./store/store";
const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
