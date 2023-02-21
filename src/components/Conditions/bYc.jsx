import React from "react";
import s from '../Conditions/condition.module.css'


export default function bYc({ handleClose2 }) {

    return (
        <>
            <div className={s.bycContainer}>
                <h3 onClick={handleClose2}>
                    X
                </h3>
                <div className={s.textByC}>
                    <li> No participan empleados, ni sus familiares hasta tercer grado de consanguinidad.</li>

                    <li> No está permitida la participación de menores de 18 años.</li>

                    <li> Se tendrá un único ganador por punto de venta. 12 puntos de venta y 12 ganadores.</li>

                    <li> La tienda donde el cliente haga sus compras y registre sus cupones, será su sede de participación. </li>

                    <li> El premio no se canjea por dinero bajo ninguna circunstancia.</li>

                    <li> Para la entrega del premio si el ganador es de nacionalidad colombiana debe presentar la cédula original y en caso de ser extranjero, debes suministrar el pasaporte y/o cédula de extranjería.</li>

                    <li> El premio solo se entrega al ganador inscrito y no es transferible y en caso tal de que el ganador no pueda presentarse personalmente a las instalaciones de Almacenes La Media Naranja, deberá enviar una carta de autorización notariada con el poder para que otra persona pueda reclamarlo. No realiza envío del premio en caso que el ganador este en otra ciudad.</li>

                    <li> Debe verificar que los datos entregados a las cajeras o digitadores de cupones, si se requirieran, sean correctos y válidos para cuando se haga el sorteo. En caso de presentarse anomalías con los datos suministrados quedará descalificado del sorteo.</li>

                    <li> Almacenes La Media Naranja no se hace responsable de la mala digitación de la información suministrada por el cliente a la hora de registrar sus datos y cupones en la aplicación.</li>

                    <li> Si se detecta intento de fraude o suplantación de identidad al momento de inscribir cupones, automáticamente queda descalificado del sorteo.</li>

                    <li> Se pueden consultar los ganadores en la página de Benedan Colocar URL.</li>

                    <li> La Fecha de cierre del concurso será el 23 de marzo de 2023 a las 00:00 Hora Local y la fecha de sorteo del concurso será el 24 de marzo 2023.
                        los clientes que realicen su compra por medio de la tienda online <a href="www.lamedianaranja.com.co">www.lamedianaranja.com.co</a> quedarán inscritos con los participantes de la tienda de cundinamarca.</li>
                    <hr></hr>
                    <div className={s.letrachica}>
                        <li>*debes <span>conservar tu cupón físico</span> porque si eres uno de los ganadores</li>
                        <li>Debes presentarlo para la entrega del premio. </li>
                        <li>*sin el cupón físico no se hace entrega del premio.</li>
                    </div>
                </div>
            </div>

        </>
    )


}