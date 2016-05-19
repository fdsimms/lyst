import React, { Component } from "react";
import data from "../data";
import List from "./list";

export default class App extends Component {
  render() {
    return(
      <div className="app">
        <header className="header">Lyst</header>
        <List list={data} />
      </div>
    );
  }
}
