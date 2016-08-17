import React from "react";
import groceries from "../groceryList";
import data from "../data";
import List from "./list";

const App = React.createClass({
  getInitialState() {
    return { view: "classic" };
  },

  setView(view) {
    return () => {
      this.setState({ view });
    };
  },

  data() {
    return this.state.view === "classic" ? data : groceries;
  },

  classicButton() {
    var classes = "button";
    var clickHandler;
    if (this.state.view === "classic") {
      classes += " " + "button--disabled";
    } else {
      clickHandler = this.setView("classic");
    }

    return (
      <button onClick={clickHandler}
              className={classes}>Classic</button>
    );
  },

  groceriesButton() {
    var classes = "button";
    var clickHandler;
    if (this.state.view === "groceries") {
      classes += " " + "button--disabled";
    } else {
      clickHandler = this.setView("groceries");
    }

    return (
      <button onClick={clickHandler}
              className={classes}>Groceries</button>
    );
  },

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="site-title">Lyst</h1>
        </header>
        <div className="buttons">
          {this.classicButton()}
          {this.groceriesButton()}
        </div>
        <ul className="list-container">
          {this.data().map(list =>
            <List key={list.id} list={list} />
          )}
        </ul>
      </div>
    );
  }
});

export default App;
