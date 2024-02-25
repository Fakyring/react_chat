import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";

function Dialog(props) {
    const user = useLocation().state.user;
    return (
        <div style={{paddingTop: '10px'}}>
            <table>
                <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.surname}</td>
                    <td>{user.name}</td>
                    <td>{user.patronymic}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Dialog;