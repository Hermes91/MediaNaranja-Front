import { Backdrop } from "@mui/material";
import { React, useState } from "react";
import { useParams } from 'react-router-dom';
import {getUserTickets
} from '../../redux/actions/actionIndex.js'
import CodeRegister from '../Code/code'
import s from '../misCupones/misCupones.module.css'

export default function MisCupones() {
    
    let { code } = useParams();
    const user = JSON.parse(localStorage.getItem("user"))
  /* const user = {
    nombre: 'amparo',
    email: 'hola@gmail.com'
   }*/
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };


    const ticketsOwn = getUserTickets(user.email).length+1

    return (
        <>
    {    
   !code ? 
    <div className={s.content}> 
        <h1>Hola, {user.nombre}!</h1>
        {console.log(getUserTickets(user.email))}
        <h2>Tienes {ticketsOwn} Cupones!</h2>
    </div>
    : 
    <div className={s.content}>
        <h1>Hola, {user.nombre}!</h1>
        <h2>Tienes {ticketsOwn} Cupones!</h2>
        <div className={s.newT}>
        <h2>Tienes 1 cupón disponible para cargar</h2>
        <h2 className={s.link} onClick={handleToggle}>Hacé click aquí para cargarlo</h2>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}>
                        <CodeRegister
                            handleClose={() => setOpen(false)}
                        />
                    </Backdrop>
        </div>
     
        
        
    </div>
    }
        </>
    )

}