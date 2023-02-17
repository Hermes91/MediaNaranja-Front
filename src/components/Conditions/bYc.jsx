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
                    <li> NO PARTICIPAN EMPLEADOS HASTA TERCER GRADO DE CONSANGUINIDAD</li>

                    <li>   NO PARTICIPAN MENORES DE 18 AÑOS* EL PREMIO NO SE CANJEA POR DINERO BAJO NINGUNA CONDICION</li>

                    <li>   SE DEBE PRESENTAR LA CEDULA ORIGINAL PARA LA ENTREGA DEL MISMO EN CASO DE SER COLOMBIANO, Y PARA EXTRANJEROS EL PASAPORTE Y/O CEDULA DE EXTRANJERIA.</li>

                    <li>  LA EMPRESA NO SE HACE RESPONSABLE POR LOS DATOS INFORMATIVOS A LAS CAJERAS Y/O DIGITADORAS DE CUPONES, POR ESTE MOTIVO SE LE RECOMIENDA VERIFICARLO AL MOMENTO DE COMPRA.</li>

                    <li>  CONSULTA  GANADORES  EN LA PAGINA DE BENEDAN.</li>

                    <li> LA ENTREGA DEL PREMIO DEBE SER PRESENCIAL</li>

                    <li> LA EMPRESA NO REALIZA ENVIOS DEL PREMIO EN CASO QUE EL GANADOR ESTE EN OTRA CIUDAD</li>

                    <li> EL PREMIO SOLO SE ENTREGA AL GANADOR CON SU CEDULA FISICA, EN CASO DE QUE EL GANADOR NO PUEDA DIRIGIRSE A LAS INTALACIONES ESTE DEBERA ENVIAR UNA CARTA DE AUTORIZACION NOTARIADA CO EL PODER PARA QUE OTRA PERSONA PUEDA RECLAMARLO.</li>

                    <li> UN UNICO GANADOR POR PUNTO DE VENTA.</li>

                    <li> LA TIENDA DONDE EL CLIENTE SE REGISTRE ESA SERA SU SEDE DE PARTICIPACION</li>

                    <li>  FECHA DE CIERRE 23 DE MARZO. 2023</li>

                    <li> FECHA DE SORTEO 24 DE MARZO 2023</li>
                </div>
            </div>

        </>
    )


}