import React, { Component } from "react";
class CountDownTimer extends Component {
    state = {
        days: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        timeUp: false
    }
    componentDidMount() {
        setInterval(() => {
            let eventDate = +new Date(this.props.date);
            let difference = eventDate - +new Date();
            if (difference < 1) {
                this.setState({ timeUp: true });
            } else {
                let days = Math.floor(difference / (1000 * 60 * 60 * 24));
                let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                let minutes = Math.floor((difference / (1000 * 60)) % 60);
                let seconds = Math.floor((difference / (1000)) % 60);
                this.setState({
                    hours: hours > 9 ? hours : `0${hours}`,
                    minutes: minutes > 9 ? minutes : `0${minutes}`,
                    seconds: seconds > 9 ? seconds : `0${seconds}`,
                    days
                });
            }
        }, 1000)
    }
    render() {
        const { days, hours, minutes, seconds, timeUp } = this.state;
        const dayString = days === 1 ? 'día' : 'días';
        return (
            timeUp ?
                <p>Buena Suerte!</p>
                :
                <p>{`${days} ${dayString} ${hours} horas ${minutes}  minutos ${seconds} segundos`}</p>
        );
    }
}
export default CountDownTimer;