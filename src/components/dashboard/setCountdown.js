import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { putAdminCountdown, getAdmin } from "../../redux/actions/actionIndex";

export default function SetCountDown() {
    const [newCountdown, setNewCountDown] = useState("");
    const admin = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const date = admin?.countdown?.split("T").join(" ").slice(0, -5)

    useEffect(() => {
     if (!admin || !Object.keys(admin).length) {
         dispatch(getAdmin())
     }
    }, [dispatch, admin])

    function handleChange(e){
        e.preventDefault()
        setNewCountDown(e.target.value)
    }

    function handleOnClick(e){
        var infoCountDown = {
            countdown: newCountdown,
            email: admin.email
        }
        dispatch(putAdminCountdown(infoCountDown))
        dispatch(getAdmin())
        setNewCountDown("")
    }

    return (
        <div>
            <h1>Fecha concurso: {date}</h1>
            <div>
            <h3>Modificar fecha</h3>
            <input onChange={handleChange} type="text" value={newCountdown} name="countdown"/>
            <button onClick={handleOnClick}>Confirmar cambio</button>
            </div>
        </div>
    ) 
    
}