import React from "react";

const List = React.createClass({
  getInitialState() {
    return { showChildren: false };
  },

  handleClick() {
    this.setState({ showChildren: !this.state.showChildren });
  },

  mapPropsListToHTML() {
    return this.props.list.sections.map(item => (
      <List key={item.id} list={item}/>
    ));
  },

  render() {
    var children;
    if (this.props.list.sections.length > 0) {
      children = (
        <ul className="list">
          {this.state.showChildren && this.mapPropsListToHTML()}
        </ul>
      );
    }

    return (
        <li>
          <div onClick={this.handleClick}>
            {this.props.list.name}
          </div>
          {children}
        </li>
    );
  }

});

export default List;
