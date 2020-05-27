import React from "react";
import { Provider } from "react-redux";
import App from "./containers/App";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScreenLoader from "./components/LoadScreen";

export const IndexComposition = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
				<Navbar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/loadscreen" component={ScreenLoader} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
