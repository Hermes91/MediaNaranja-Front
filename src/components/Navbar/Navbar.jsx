import React, { useRef } from "react";
import s from './Navbar.module.css'
import MNlogo from '../../assets/logo-2020.png'
import CountDownTimer from './CountDownTimer'


export default function NavBar() {

    return <>
        <div className={s.topnav} id="myTopnav">
            <a href="#home" >
                <img src={MNlogo} alt="La Media Naranja" />
            </a>
            <div className={s.timers}>
                <CountDownTimer date="03/24/2023" />
            </div>
            <div className={s.userProfile}>
                <a >User Name</a>
            </div>
        </div>
    </>
}