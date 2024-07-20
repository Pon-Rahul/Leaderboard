import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

ReactDOM.render(
  <Provider store={store}>
    <LeaderBoard />
  </Provider>,
  document.getElementById("root")
);
