import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";


function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout/>
      </Route>
    </Switch>
  );
}

export default App;
