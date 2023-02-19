import { React, useState } from "react";
import s from './Navbar.module.css'
import MNlogo from '../../assets/logo-2020.png'
import CountDownTimer from './CountDownTimer'
import { Backdrop } from "@mui/material";
import CodeReg from "../Code/code";
import UserForm from "../UserForm/UserForm";
import IntroDNI from "../introDNI/introDni";
import MisCupones from "../misCupones/misCupones";



export default function NavBar() {

    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
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
            {user? 
            <>
            <div className={s.userProfile} onClick={handleToggle}>
            <h3>Ingresar mis cupones</h3>
        </div>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <MisCupones handleClose={() => setOpen(false)} />
        </Backdrop>
        </>
        :
        <>
        <div className={s.userProfile} onClick={handleToggle}>
            <h3>Acceder</h3>
        </div>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <IntroDNI handleClose={() => setOpen(false)} />
        </Backdrop>
        </>
        }
            
        </div>
    </>)
}


