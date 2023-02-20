import React from "react";
import s from '../LogOut/LogOut.module.css'

export default function Logout({className}) {
    const  logout  = () => {
        localStorage.setItem("user", '');
        window.location.reload()
    }
    return (
        <div className={s.container}>
    <div className={s.text} onClick={logout}>[LOGOUT]</div>
    </div>
    )

}