import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import MapView from "./MapView/MapView";
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route path="/map-view" component={MapView} />
        <Route path="/list-view" component={ListView} />
        <Route path="/grid-view" component={GridView} />
      </Switch>
    </div>
  );
};

export default Main;
