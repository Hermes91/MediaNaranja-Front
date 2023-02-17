import { React, useState } from "react";
import s from './Navbar.module.css'
import MNlogo from '../../assets/logo-2020.png'
import CountDownTimer from './CountDownTimer'
import { Backdrop } from "@mui/material";
import UserForm from "../UserForm/UserForm";

export default function NavBar() {

    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open)
    };

    return (<>
        <div className={s.topnav} id="myTopnav">
            <div >
                <img src={MNlogo} alt="La Media Naranja" />
            </div>
            <div className={s.timers}>
                <CountDownTimer date="03/23/2023" />
            </div>
            <div className={s.userProfile} onClick={handleToggle}>
                <h3>Ingresar mis cupones</h3>
            </div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <UserForm handleClose={() => setOpen(false)} />
            </Backdrop>
        </div>
    </>)
}


