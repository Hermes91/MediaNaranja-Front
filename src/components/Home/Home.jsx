import { React, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/Banner'
import s from './Home.module.css'

export default function Home() {


    return (
        <>
            <div className={s.nbar}>
                <Navbar />
            </div>
            <div className={s.banner}>
                <Banner />
            </div>

        </>

    )


}