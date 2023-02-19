import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { putAdminPassword, getAdmin } from "../../redux/actions/actionIndex";

export default function SetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const admin = useSelector(state => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!admin || !Object.keys(admin).length) {
            dispatch(getAdmin())
        }
       }, [dispatch, admin])

    function handleChange(e){
        e.preventDefault()
        setNewPassword(e.target.value)
    }

    function handleOnClick(e){
        e.preventDefault()
        var infoPassword = {
            password: newPassword,
            email: admin.email
        }
        dispatch(putAdminPassword(infoPassword))
        dispatch(getAdmin())
        setNewPassword("")
    }

    return (
        <div>
            <h3>Modificar contraseña</h3>
            <input onChange={handleChange} type="text" value={newPassword} name="password"/>
            <button onClick={handleOnClick}>Confirmar cambio</button>
        </div>
    ) 
    
}