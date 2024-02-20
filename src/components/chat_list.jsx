import Chat_element from "./chat_element";
import React from "react";

function Chat_list(users){
    return(
        <table>
            <caption>Ст*денты</caption>
            <tr>
                <th>ID</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
            </tr>
            <tbody>
            {users.users.map(user => {
                return (
                    <Chat_element user={user}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default Chat_list;