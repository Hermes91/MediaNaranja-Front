import React from "react";
import s from './Navbar.module.css'
import MNlogo from '../../assets/logo-2020.png'
import CountDownTimer from './CountDownTimer'


export default function NavBar() {

    return <>
        <div className={s.topnav} id="myTopnav">
            <div >
                <img src={MNlogo} alt="La Media Naranja" />
            </div>
            <div className={s.timers}>
                <CountDownTimer date="03/23/2023" />
            </div>
            <div className={s.userProfile}>
                <h3 >Ingresar mis cupones</h3>
            </div>
        </div>
    </>
}