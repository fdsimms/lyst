import React from "react";
import data from "../data";


const List = React.createClass({
  getInitialState() {
    return { isClosed: true };
  },

  mapPropsListToHTML() {
    return this.props.list.map(item => {
      var sections;
      if (item.sections.length >= 0) {
        sections = <List list={item.sections} />;
      }
      return(
        <li key={item.id}>
        {item.name}
        {sections}
        </li>
      );
    });
  },

  render() {
    return(
      <ul className="list">
      {this.mapPropsListToHTML()}
      </ul>
    );
  }

});

export default List;
