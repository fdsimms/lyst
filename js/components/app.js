import React from "react";
import groceries from "../groceryList";
import data from "../data";
import challenge from "../challengeResponses";
import List from "./list";

const App = React.createClass({
  getInitialState() {
    return { view: "challenge" };
  },

  setView(view) {
    return () => {
      this.setState({ view });
    };
  },

  data() {
    var returnVal;
    if (this.state.view === "challenge") {
      returnVal = challenge;
    } else if (this.state.view === "classic") {
      returnVal = data;
    } else {
      returnVal = groceries;
    }

    return returnVal;
  },

  challengeButton() {
    var classes = "button";
    var clickHandler;
    if (this.state.view === "challenge") {
      classes += " " + "button--disabled";
    } else {
      clickHandler = this.setView("challenge");
    }

    return (
      <button onClick={clickHandler}
              className={classes}>Responses</button>
    );
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
          {this.challengeButton()}
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
