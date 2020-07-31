import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/login";
import Register from "./Register/Register";
import NotFound from "./NotFound/NotFound";
import Layout from "../components/Layout/Layout";
import Player from "../components/Player/Player";

const Root = (props) => {
//   const { id } = props.match.params;
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/player/:id" component={Player} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Root;
