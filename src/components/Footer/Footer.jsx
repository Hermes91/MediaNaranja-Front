import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinDropIcon from '@mui/icons-material/PinDrop';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom'
import s from './Footer.module.css'
import Logout from "../LogOut/LogOut";



export default function Footer() {
    const user = localStorage.getItem("user")
    return <>
        <div className={s.footerContainer}>
            <div className={s.sociales}>
                <Link to={"https://api.whatsapp.com/send/?phone=573154923722&text&type=phone_number&app_absent=0"} target= '_blanck'>
                    <WhatsAppIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://lamedianaranja.com.co/"} target= '_blanck'>
                    <StoreIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://www.facebook.com/almaceneslamedianaranja/"} target= '_blanck'>
                    <FacebookIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://www.instagram.com/almaceneslamedianaranja/"} target= '_blanck'>
                    <InstagramIcon className={s.linkIcon} />
                </Link>
            </div>
            <div className={s.generalInfo}>
                <div className={s.ubicaciones}>
                    <PinDropIcon />
                    <span>Medellín • Bello • Itagui • Pereira • Apartadó •Envigado</span>
                </div>
                <div><span>© 2023 La Media Naranja</span> </div>
            </div>
            {
            user ? 
             <Logout/>
             : 
             ''
            }
       
        </div>
    </>
}