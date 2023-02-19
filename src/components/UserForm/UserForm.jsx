import React, { useState } from "react";
import validate from '../UserForm/validate'
import s from './UserForm.module.css'
import { postUser } from "../../redux/actions/actionIndex";
import { useDispatch } from "react-redux";

export default function UserForm({ handleClose }) {
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: "",
        nombre: "",
        numDocumento: "",
        direccion: "",
        telephone: "",
    })
    const [err, setErr] = useState({})
    const isButtonDisabled = () => (!!Object.keys(err).length || !input.email.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postUser(input))
        setInput({
            email: "",
            nombre: "",
            numDocumento: "",
            direccion: "",
            telephone: "",
        })
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setErr(validate({ ...input, [e.target.name]: e.target.value }))
    }


    return <>
        <div className={s.formContainer}>
            <h3 onClick={handleClose}>
                X
            </h3>
            <div className={s.formBody}>
                <h2>Completa el formulario para cargar tus cupones!</h2>
                <h5>Los campos con * son obligatorios</h5>

                <form onSubmit={handleSubmit} className={s.formulario}>
                    <div className={s.formItem}>
                        <label>Nombre*: </label>
                        <input value={input.nombre} name='nombre' onChange={handleChange} type='text' placeholder='Ingrese su nombre' />
                        {err.nombre && <span className={s.formerror}>{err.nombre}</span>}
                    </div>

                    <div className={s.formItem}>
                        <label>E-mail*: </label>
                        <input value={input.email} name='email' onChange={handleChange} type='text' placeholder='Ingrese su mail' />
                        {err.email && <span className={s.formerror}>{err.email}</span>}
                    </div>

                    <div className={s.formItem}>
                        <label>N° de Documento*: </label>
                        <input value={input.numDocumento} name='numDocumento' onChange={handleChange} type='text' placeholder='Ingrese su cedula' />
                        {err.numDocumento && <span className={s.formerror}>{err.numDocumento}</span>}
                    </div>

                    <div className={s.formItem}>
                        <label>Direccion: </label>
                        <input value={input.direccion} name='direccion' onChange={handleChange} type='text' placeholder='Indique su direccion' />
                    </div>

                    <div className={s.formItem}>
                        <label>Telefono*: </label>
                        <input value={input.telephone} name='telephone' onChange={handleChange} type='text' placeholder='Su número de telefono' />
                        {err.telephone && <span className={s.formerror}>{err.telephone}</span>}
                    </div>
                    <button disabled={isButtonDisabled()} type='submit'>Enviar Formulario</button>
                </form>
            </div>
        </div>
    </>
}