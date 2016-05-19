import React, { PropTypes } from "react";
import data from "../data";

function mapPropsListToHTML(list) {
  return list.map(item => {
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
}

const List = ({ list }) => (
  <ul className="list">
    {mapPropsListToHTML(list)}
  </ul>
);

List.propTypes = {
  list: PropTypes.array.isRequired
};

export default List;
