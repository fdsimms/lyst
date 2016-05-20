import React, { Component } from "react";
import data from "../data";
import List from "./list";

const App = () => (
      <div className="app">
        <header className="header"><h1>Lyst</h1></header>
        <div className="list-container">
          {data.map(list =>
            <List key={list.id} list={list} />
          )}
        </div>
      </div>
    );

export default App;
