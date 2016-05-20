import React, { Component } from "react";
import data from "../data";
import List from "./list";

const App = () => (
      <div className="app">
        <header className="header"><h1>Lyst</h1></header>
        <main>
          <ul className="list-container">
            {data.map(list =>
              list.sections.length > 0 ?
              <List key={list.id} list={list} /> :
              <li key={list.id}>{list.name}</li>
            )}
          </ul>
        </main>
      </div>
    );

export default App;
