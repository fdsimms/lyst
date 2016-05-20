import React from "react";
import grocery from "../groceryList";
import data from "../data";
import List from "./list";

const App = React.createClass({
  getInitialState() {
    return { view: "classic" };
  },

  toggleView() {
    this.setState({
      view: this.state.view === "classic" ? "groceries" : "classic"
    });
  },

  data() {
    return this.state.view === "classic" ? data : grocery;
  },

  classicButton() {
    var classes = "button-classic";
    var clickHandler;
    if (this.state.view === "classic") {
      classes += " " + "disabled";
    } else {
      clickHandler = this.toggleView;
    }

    return (
      <button onClick={clickHandler}
              className={classes}>Classic</button>
    );
  },

  groceriesButton() {
    var classes = "button-groceries";
    var clickHandler;
    if (this.state.view === "groceries") {
      classes += " " + "disabled";
    } else {
      clickHandler = this.toggleView;
    }

    return (
      <button onClick={clickHandler}
              className={classes}>Groceries</button>
    );
  },

  render() {
    return (
      <div className="app">
        <header className="header"><h1>Lyst</h1></header>
        <div className="buttons">
          {this.classicButton()}
          {this.groceriesButton()}
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
