import React from "react";

const List = React.createClass({
  getInitialState() {
    return { showChildren: false };
  },

  hasChildren() {
    return this.props.list.sections.length > 0;
  },

  handleClick() {
    if (this.hasChildren()) {
      this.setState({ showChildren: !this.state.showChildren });
    }
  },

  mapPropsListToHTML() {
    return this.props.list.sections.map(item => (
      <List key={item.id} list={item}/>
    ));
  },


  render() {
    var children;
    if (this.hasChildren()) {
      children = (
        <ul className="list">
          {this.state.showChildren && this.mapPropsListToHTML()}
        </ul>
      );
    }

    var classes = "list-item-text";
    if (this.hasChildren()) {
      classes += " " + "clickable";
    }
    if (this.state.showChildren) {
      classes += " " + "children-showing";
    }

    return (
        <li className="list-item">
          <div className={classes} onClick={this.handleClick}>
            {this.props.list.name}
          </div>
          {children}
        </li>
    );
  }

});

export default List;
