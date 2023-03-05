import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Navbar.module.css'
import MNlogo from '../../assets/logo-2020.png'
import CountDownTimer from './CountDownTimer'
import { Backdrop } from "@mui/material";
import IntroDNI from "../introDNI/introDni";
import MisCupones from "../misCupones/misCupones";
import { getAdmin } from "../../redux/actions/actionIndex";


export default function NavBar() {
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const user = localStorage.getItem("user")
    const handleToggle = () => {
        setOpen(!open)
    };

    const admin = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    function setCountDown() {
        const justDate = admin?.countdown?.split("T")[0];
        const dateFormat = justDate?.match(/\d+/g)
        if (dateFormat) {
            const year = dateFormat[0]
            const month = dateFormat[1]
            const day = dateFormat[2]
            return `"${month}/${day}/${year}"`;
        }
    }
    const newDate = setCountDown()

    useEffect(() => {
        if (!admin || !Object.keys(admin).length) {
            dispatch(getAdmin());
        }
        setTimeout(() => {
            setLoading(false)
        }, "1000")
    }, [dispatch]);


    return (<>
        <div className={s.topnav} id="myTopnav">
            <div >
                <img src={MNlogo} alt="La Media Naranja" />
            </div>
            {loading ? <h4>cargando...</h4> : <div className={s.timers}>

                <CountDownTimer
                    date={newDate}
                />
            </div>
            }
            {user ?
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


