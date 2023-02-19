import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchByDNI } from '../../redux/actions/actionIndex'
import s from '../introDNI/introDni.module.css'

///////  valida el DNI ingresado  //////
function validate(input) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    const isDNI = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/
    if (!input.numDocumento || isBlankSpace.test(input.numDocumento)) error.numDocumento = 'Ingrese su n° de documento'
    else if (!isDNI.test(input.numDocumento)) error.numDocumento = 'Ingrese un documento valido'
    return error;
}

export default function IntroDNI({ handleClose }) {
    const [err, setErr] = useState({})
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(searchByDNI())
    }, [dispatch])



    const [input, setInput] = useState({
        numDocumento: "",
    })

    const isButtonDisabled = () => (!!Object.keys(err).length || !input.numDocumento.length)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        const validacion = validate(input)
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
                        <input value={input.numDocumento} name="numDocumento" onChange={handleChange} type="text" maxLength="10" />
                        {err.numDocumento && <span className={s.formerror}>{err.numDocumento}</span>}
                        <button disabled={isButtonDisabled()} type='submit'>Acceder</button>
                    </form>
                </div>
            </div>
        </>
    )
}

