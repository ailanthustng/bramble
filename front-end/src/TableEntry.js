import React from "react";

import Moment from 'react-moment';

function TableEntry(props) {
  const currKey = props.currentKeyEntry;
  return (
    <tr>
      <td>{props.index}</td>
      <td>{currKey["app"]}</td>
      <td>{currKey["api_key"]}</td>
      <td><Moment format="DD MM YYYY"></Moment></td>
      <td>3 days</td>
      <td>copy and delete button group</td>
    </tr>
  );
}

export default TableEntry;