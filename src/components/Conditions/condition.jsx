import { React } from "react";
import s from '../Conditions/condition.module.css'

export default function Condition() {


    return (
        <>
            <section className={s.content}>
                <div className={s.ByC}>
                    <h2>Lee las Bases y Condiciones</h2>
                    <div className={s.textByC}>
                        <li> *NO PARTICIPAN EMPLEADOS HASTA TERCER GRADO DE CONSANGUINIDAD</li>

                        <li>  * NO PARTICIPAN MENORES DE 18 AÑOS* EL PREMIO NO SE CANJEA POR DINERO BAJO NINGUNA CONDICION</li>

                        <li>  * SE DEBE PRESENTAR LA CEDULA ORIGINAL PARA LA ENTREGA DEL MISMO EN CASO DE SER COLOMBIANO, Y PARA EXTRANJEROS EL PASAPORTE Y/O CEDULA DE EXTRANJERIA.</li>

                        <li> * LA EMPRESA NO SE HACE RESPONSABLE POR LOS DATOS INFORMATIVOS A LAS CAJERAS Y/O DIGITADORAS DE CUPONES, POR ESTE MOTIVO SE LE RECOMIENDA VERIFICARLO AL MOMENTO DE COMPRA.</li>

                        <li> * CONSULTA  GANADORES  EN LA PAGINA DE BENEDAN.</li>

                        <li> *LA ENTREGA DEL PREMIO DEBE SER PRESENCIAL</li>

                        <li> *LA EMPRESA NO REALIZA ENVIOS DEL PREMIO EN CASO QUE EL GANADOR ESTE EN OTRA CIUDAD</li>

                        <li> *EL PREMIO SOLO SE ENTREGA AL GANADOR CON SU CEDULA FISICA, EN CASO DE QUE EL GANADOR NO PUEDA DIRIGIRSE A LAS INTALACIONES ESTE DEBERA ENVIAR UNA CARTA DE AUTORIZACION NOTARIADA CO EL PODER PARA QUE OTRA PERSONA PUEDA RECLAMARLO.</li>

                        <li> *UN UNICO GANADOR POR PUNTO DE VENTA.</li>

                        <li> *LA TIENDA DONDE EL CLIENTE SE REGISTRE ESA SERA SU SEDE DE PARTICIPACION</li>

                        <li>  *FECHA DE CIERRE 23 DE MARZO. 2023</li>

                        <li> *FECHA DE SORTEO 24 DE MARZO 2023</li>
                    </div>
                </div>
                <div className={s.textParticipar}>
                    <h2>¿Como Participar?</h2>
                    <p>texto sobre como se participar Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc pellentesque vestibulum risus eu blandit.
                        Sed non magna id nunc posuere auctor. Morbi pretium fringilla lobortis.
                        Curabitur vitae porta nisi. Aliquam finibus egestas pharetra.
                        Integer pharetra purus quis tellus consequat ullamcorper.
                        Donec dictum efficitur metus sed molestie. Phasellus cursus non eros ac pulvinar.
                        Mauris id nisl lacinia, hendrerit elit nec, auctor urna. Duis lorem mauris,
                        hendrerit non nisl quis, faucibus lacinia magna. Maecenas sit amet erat faucibus,
                        imperdiet nibh eu, consectetur tellus. Donec a risus vestibulum, hendrerit libero
                        vehicula, vulputate felis.
                    </p>
                    <div className={s.btn_bgstroke}>Únete ahora</div>
                </div>
            </section>
        </>
    )


}