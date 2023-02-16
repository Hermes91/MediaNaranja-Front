import { React, useEffect, useState } from "react";
import bannerImg from '../../assets/bannerSorteo.png'
import bannerMobil from '../../assets/bannerMobil.png'
import s from '../Home/Home.module.css'


export default function Banner() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    return (
        <div className={s.bannImg}>
            {isDesktop ? (
                <img src={bannerImg} alt="banner concurso La Media Naranja" />
            ) : (
                <img src={bannerMobil} alt="banner La Media Naranja mobil" />
            )}
        </div>
    )


}