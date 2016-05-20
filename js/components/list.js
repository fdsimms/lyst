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

    var classes = "item__text";
    if (this.hasChildren()) {
      classes += " " + "item--clickable";
    }
    if (this.state.showChildren) {
      classes += " " + "item--children-showing";
    }

    var plusOrMinus;
    if (this.hasChildren() && this.state.showChildren) {
      plusOrMinus = <i className="fa fa-minus-square" />;
    } else if (this.hasChildren()) {
      plusOrMinus = <i className="fa fa-plus-square" />;

    }

    return (
        <li className="item">
          <div className={classes} onClick={this.handleClick}>
            {plusOrMinus}
            {this.props.list.name}
          </div>
          {children}
        </li>
    );
  }

});

export default List;
