import React from "react";
import data from "../data";


const List = React.createClass({
  getInitialState() {
    return { showChildren: false};
  },

  handleClick() {
    this.setState({ showChildren: !this.state.showChildren });
  },

  mapPropsListToHTML() {
    return this.props.list.sections.map(item => {
      var sections;
      if (item.sections.length >= 0) {
        sections = <List list={item}/>;
      }
      return(
        <li key={item.id}>
          {this.state.showChildren && sections}
        </li>
      );
    });
  },

  render() {
    return(
      <ul className="list">
        <li onClick={this.handleClick}>{this.props.list.name}</li>
        {this.mapPropsListToHTML()}
      </ul>
    );
  }

});

export default List;
