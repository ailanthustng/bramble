import React from "react";

import Moment from 'react-moment';
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";

function TableEntry({index, currentKeyEntry, user, removeKey}) {
  const currKey = currentKeyEntry;

  return (
    <tr>
      <td>{index}</td>
      <td>{currKey["app"]}</td>
      <td>{currKey["api_key"]}</td>
      <td><Moment format="DD MM YYYY">{currKey["date_created"]}</Moment></td>
      <td>3 days</td>
      <td>
        <CopyButton api_key={currKey["api_key"]}/>
      </td>
      <td>
        <DeleteButton
          user={user}
          api_key={currKey["api_key"]}
          removeKey={keyToBeDeleted => removeKey(keyToBeDeleted)}
        />
      </td>
    </tr>
  );
}

export default TableEntry;