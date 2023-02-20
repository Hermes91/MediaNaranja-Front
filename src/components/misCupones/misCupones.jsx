import { Backdrop } from "@mui/material";
import  React,{ useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {getUserTickets
} from '../../redux/actions/actionIndex.js'
import {useDispatch , useSelector} from 'react-redux'
import CodeRegister from '../Code/code'
import s from '../misCupones/misCupones.module.css'


export default function MisCupones( {handleClose}) {

    const tickets = useSelector(state => state.filterTickets)
    const dispatch = useDispatch();
    let { code } = useParams();
   const user = JSON.parse(localStorage.getItem("user"))
  /*const user = {
    nombre: 'test',
    email: 'hola@gmail.com'
   }*/
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        dispatch(getUserTickets(user.email))
        console.log('me actualice')
    }, [tickets])


    return (
        
        <>
    {    
   !code ? 
    <div className={s.content}> 
    <h3 onClick={handleClose}>
                    X
                </h3>
        <h1>Hola, {user.nombre}!</h1>
        <h2>Tienes {tickets.length} Cupones!</h2>
    </div>
    : 
    <div className={s.content}>
        <h3 onClick={handleClose}>
                    X
                </h3>
        <h1>Hola, {user.nombre}!</h1>
        <h2>Tienes {tickets.length} Cupones!</h2>
        <div className={s.newT}>
        <h2>Tienes 1 cupón disponible para cargar</h2>
        <h2 className={s.link} onClick={handleToggle}>Hacé click aquí para cargarlo</h2>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}>
                        <CodeRegister
                            handleClose={() => setOpen(false)}
                            code
                        />
                    </Backdrop>
        </div>
     
        
        
    </div>
    }
        </>
    )

}