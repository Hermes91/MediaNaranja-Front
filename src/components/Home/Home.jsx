import { React, useState } from "react";
import Banner from '../Banner/Banner'
import Condition from "../Conditions/condition";
import Footer from "../Footer/Footer";
import IntroDNI from "../introDNI/introDni"
import { Backdrop } from "@mui/material";
import NavBar from "../Navbar/Navbar";

import s from './Home.module.css'


export default function Home() {

    const [open, setOpen] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"))

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