import { React } from "react";
import Banner from '../Banner/Banner'
import Condition from "../Conditions/condition";
import Footer from "../Footer/Footer";
import s from './Home.module.css'

export default function Home() {


    return (
        <>
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