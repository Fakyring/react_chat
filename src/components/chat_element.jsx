import React from "react";

function Chat_element(props) {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.surname}</td>
            <td>{props.user.name}</td>
            <td>{props.user.patronymic}</td>
        </tr>
    )
}

export default Chat_element;