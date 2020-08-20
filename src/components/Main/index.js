import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Series} />
    </Switch>
  );
};

export default Main;
