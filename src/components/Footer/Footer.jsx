import React from "react";
import ReactDOM from 'react-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinDropIcon from '@mui/icons-material/PinDrop';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom'
import s from './Footer.module.css'




export default function Footer() {

    return <>
        <div className={s.footerContainer}>
            <div className={s.sociales}>
                <Link to={"https://api.whatsapp.com/send/?phone=573154923722&text&type=phone_number&app_absent=0"}>
                    <WhatsAppIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://lamedianaranja.com.co/"}>
                    <StoreIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://www.facebook.com/almaceneslamedianaranja/"}>
                    <FacebookIcon className={s.linkIcon} />
                </Link>
                <Link to={"https://www.instagram.com/almaceneslamedianaranja/"}>
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

        </div>
    </>
}