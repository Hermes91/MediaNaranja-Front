import React, { useState } from "react";
import validate from '../UserForm/validate'
import s from '../Code/code.module.css'

export default function codeRegister({ handleClose }) {


    const [input, setInput] = useState({
        codigo: "",
    })
    const [err, setErr] = useState({})
    const isButtonDisabled = () => (!!Object.keys(err).length || !input.codigo.length)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setErr(validate({ ...input, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <div className={s.codeContainer}>
                <h3 onClick={handleClose}>
                    X
                </h3>
                <div className={s.codeBody}>
                    <h2>Ingresa tu Código aqui</h2>
                    <form onSubmit={handleSubmit} className={s.codeForm}>
                        <input value={input.codigo} name="codigo" onChange={handleChange} type="text" />
                        {err.codigo && <span className={s.formerror}>{err.codigo}</span>}

                        <button disabled={isButtonDisabled()} type='submit'>Subir mi Código</button>
                    </form>
                </div>
            </div>
        </>
    )
}