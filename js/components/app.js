import React from "react";
import grocery from "../groceryList";
import data from "../data";
import List from "./list";

const App = React.createClass({
  getInitialState() {
    return { view: "classic" };
  },

  data() {
    return this.state.view === "classic" ? data : grocery;
  },

  render() {
    return (
      <div className="app">
        <header className="header"><h1>Lyst</h1></header>
        <div className="buttons">
          <button className="button-classic">Classic</button>
          <button className="button-groceries">Groceries</button>
        </div>
        <ul className="list-container">
          {this.data().map(list =>
            list.sections.length > 0 ?
            <List key={list.id} list={list} /> :
            <li className="list-item-text" key={list.id}>{list.name}</li>
          )}
        </ul>
      </div>
    );
  }
});


export default App;
