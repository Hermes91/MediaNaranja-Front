import React, { useEffect, useState } from "react";



function CountDownTimer({ date }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [timeUp, setTimeUp] = useState(false)

    useEffect(() => {
        setInterval(() => {
            let eventDate = +new Date(date);
            let difference = eventDate - +new Date();
            if (difference < 1) {
                setTimeUp(true)
            } else {
                let days = Math.floor(difference / (1000 * 60 * 60 * 24));
                let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

                let minutes = Math.floor((difference / (1000 * 60)) % 60);
                let seconds = Math.floor((difference / (1000)) % 60);

                hours > 9 ? setHours(hours) : setHours(`0${hours}`);
                minutes > 9 ? setMinutes(minutes) : setMinutes(`0${minutes}`);
                seconds > 9 ? setSeconds(seconds) : setSeconds(`0${seconds}`);
                setDays(days)
            }
        }, 1000)
    })

    // const { days, hours, minutes, seconds, timeUp } = this.state;

    const dayString = days === 1 ? 'día' : 'días';
    return (
        timeUp ?
            <p>Buena Suerte!</p>
            :
            <p>{`${days} ${dayString} ${hours} horas ${minutes}  minutos ${seconds} segundos`}</p>
    );

}
export default CountDownTimer;