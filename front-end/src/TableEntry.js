import React from "react";

import Moment from 'react-moment';

function TableEntry(props) {
    return(
        <tr>
            <td>{props.index}</td>
            <td>{props.appname}</td>
            <td>{props.api}</td>
            <td><Moment format="DD MM YYYY"></Moment></td>
            <td>3 days</td>
            <td>copy and delete button group</td>
        </tr>
    );
}

export default TableEntry;