import React, { Component } from "react";
import data from "../groceryList";
import List from "./list";

const App = () => (
      <div className="app">
        <header className="header"><h1>Lyst</h1></header>
        <ul className="list-container">
          {data.map(list =>
            list.sections.length > 0 ?
            <List key={list.id} list={list} /> :
            <li className="list-item-text" key={list.id}>{list.name}</li>
          )}
        </ul>
      </div>
    );

export default App;
