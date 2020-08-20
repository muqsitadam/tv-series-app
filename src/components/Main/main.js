import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series/series";
import SingleSeries from "../../containers/SingleSeries/singleSeries";

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Series} />
      <Route path="/series/:id" component={SingleSeries} />
    </Switch>
  );
};

export default Main;
