import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchByDocument, getUsers } from '../../redux/actions/actionIndex'
import s from '../introDNI/introDni.module.css'

///////  valida el DNI ingresado  //////
function validate(input) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    const isDNI = /^((\d{7})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/
    if (!input.numDocumento || isBlankSpace.test(input.numDocumento)) error.numDocumento = 'Ingrese su n° de documento'
    else if (!isDNI.test(input.numDocumento)) error.numDocumento = 'Ingrese un documento valido'
    return error;
}

export default function IntroDNI({ handleClose }) {
    const [err, setErr] = useState({})
    const allUsers = useSelector(state => state.allUsers)
    const user = useSelector(state => state.loggedUser)
    let dispatch = useDispatch()

    useEffect(() => {
        !allUsers.length && dispatch(getUsers())
    }, [allUsers, dispatch])

    const [input, setInput] = useState({
        numDocumento: "",
    })

    const isButtonDisabled = () => {
        if (!!Object.keys(err).length || !input.numDocumento.length) return true
        else if (!user?.email) return true 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(user));
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
        const validacion = validate(input)
        setErr(validacion)
        dispatch(searchByDocument(e.target.value))
    }

    return (
        <>
            <div className={s.dniContainer}>
                <h3 onClick={handleClose}>
                    X
                </h3>
                <div className={s.dniBody}>
                    <h2>Ingresa tu cedula aqui</h2>
                    <form onSubmit={handleSubmit} className={s.dniForm}>
                        <input value={input.numDocumento} name="numDocumento" onChange={handleChange} type="number" maxLength="10" />
                        {err.numDocumento && <span className={s.formerror}>{err.numDocumento}</span>}
                        <button onClick={handleClose}disabled={isButtonDisabled()} type='submit'>Acceder</button>
                        {!err.numDocumento && !user?.email ? <a onClick={handleClose} href="#user_form">Regístrese haciendo click en Únete Ahora</a>: null}
                    </form>
                </div>
            </div>
        </>
    )
}

