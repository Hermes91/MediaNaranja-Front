import { React, useState, useEffect } from "react";
import Banner from '../Banner/Banner'
import Condition from "../Conditions/condition";
import Footer from "../Footer/Footer";
import IntroDNI from "../introDNI/introDni"
import { Backdrop } from "@mui/material";
import NavBar from "../Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actionIndex";


import s from './Home.module.css'

export default function Home() {

    const dispatch = useDispatch()
const allUsers = useSelector(state => state.allUsers)

useEffect(() => {
    dispatch(getUsers())
    console.log('si')
}, [dispatch])

//coment

    const [open, setOpen] = useState(true);
    const user = localStorage.getItem("user")
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(getUsers())
    }, [allUsers, dispatch])


    return (
      
        <>
          <NavBar/>
        {
           !user? 
           <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
           open={open}>
           <div className={s.cedula}>
               <IntroDNI handleClose={() => setOpen(false)} />
           </div>
       </Backdrop>
       :
       ''
        }
          
            <div className={s.banner}>
                <Banner />
            </div>
            <div>
                <Condition />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )


}