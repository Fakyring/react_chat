import React from "react";
import {useLocation, useParams} from "react-router-dom";

function Dialog(props) {
    const user = useLocation().state.user;
    let params = useParams();
    return (
        <div style={{paddingTop: '10px'}}>
            <span className='centered chatUser'>{params.dialogId}: {[user.surname, ' ', user.name]}</span>
            <textarea rows='40' cols='100'></textarea>
        </div>
    )
}

export default Dialog;