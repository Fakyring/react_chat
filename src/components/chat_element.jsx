import React from "react";
import {Link} from "react-router-dom";

function Chat_element(props) {
    let path = "/dialogs/" + props.user.id;
    return (
        <tr>
            <Link to={path} state={{user: props.user}}>{props.user.id}</Link>
            <td>{props.user.surname}</td>
            <td>{props.user.name}</td>
            <td>{props.user.patronymic}</td>
        </tr>
    )
}

export default Chat_element;