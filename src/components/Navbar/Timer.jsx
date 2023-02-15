import { React, useState, useEffect } from "react";

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000);
    }, [time])

    const getFormattedTime = (milliseconds) => {
        let total_sec = parseInt(Math.floor(milliseconds / 1000))
        let total_min = parseInt(Math.floor(total_sec / 60))
        let total_hour = parseInt(Math.floor(total_min / 60))
        let days = parseInt(Math.floor(total_hour / 24))

        let seconds = parseInt(total_sec % 60)
        let minutes = parseInt(total_min % 60)
        let hours = parseInt(total_min % 24)

        return `${days}:${hours}:${minutes}:${seconds}`
    }


    return <div>
        {getFormattedTime(time)}
    </div>
}


export default Timer;


//  <Timer duration={2 * 24 * 60 * 60 * 1000} />