import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchByDocument, getUsers } from '../../redux/actions/actionIndex'
import s from '../introDNI/introDni.module.css'
import { toast } from 'react-toastify';


///////  valida el DNI ingresado  //////
function validate(input, allUsers) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    const isDNI = /^[0-9]{6,11}$/
    if (!input.numDocumento || isBlankSpace.test(input.numDocumento)) error.numDocumento = 'Ingrese su n° de documento'
    else if (!isDNI.test(input.numDocumento)) error.numDocumento = 'Ingrese un documento valido'
    return error;
}

export default function IntroDNI({ handleClose }) {

    const [err, setErr] = useState({})
    const allUsers = useSelector(state => state.allUsers)
  

    let dispatch = useDispatch()

    useEffect(() => {
        !allUsers.length && dispatch(getUsers())
    }, [allUsers, dispatch])


    const [input, setInput] = useState({
        numDocumento: "",
    })

    var yaExiste = allUsers.find(u => u.numDocumento === input?.numDocumento)

    const isButtonDisabled = () => {
        if (Object.keys(err).length || !input.numDocumento) return true
        else return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchByDocument(input.numDocumento))
        const validacion = validate(input, allUsers)
        setErr(validacion)
        if (yaExiste && !Object.keys(err).length) {
            localStorage.setItem("user", JSON.stringify(yaExiste));
            window.location.reload()
        } else {
            toast.warn("Usted no está registrado, haga click en Únete Ahora")
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: Number(e.target.value) })
        const validacion = validate(input, allUsers)
        setErr(validacion)
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
                        <button onClick={handleClose} disabled={isButtonDisabled()} type='submit'>Acceder</button>
                        {!err.numDocumento && !yaExiste ? <a onClick={handleClose} href="#user_form">Regístrece aquí</a> : null}
                    </form>
                </div>
            </div>

        </>
    )
}

