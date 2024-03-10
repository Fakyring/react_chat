import {useDispatch, useSelector} from "react-redux";
import {changeStatus} from "../reduxComp/licenseSlice";
import license from "./license";

function License(props) {
    const dispatch = useDispatch();
    const checkboxStatus = useSelector((state)=>state.license.status);
    return(
        <div style={{border: "solid", padding: "5px"}}>
            <div>
                <p>Вы соглашаетесь отправить все деньги по номеру 8(800)555-35-35</p>
                <label htmlFor="agree">Я прочитал(а) всё и согласен(на)</label>
                <input id="agree" type="checkbox" onClick={() => dispatch(changeStatus())}/>
                <input type={"button"} value="Prinyat" disabled={checkboxStatus}/>
            </div>
        </div>
    )
}

export default License;