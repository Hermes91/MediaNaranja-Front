import React, { useState } from "react";
//import validate from '../UserForm/validate'
import s from '../Code/code.module.css'


function validate(input) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    if (!input.codigo || isBlankSpace.test(input.codigo)) { error.codigo = 'Ingrese un codigo valido' }
    else if (input.codigo.trim().length > 13) error.codigo = `(${input.codigo.trim().length}/13)`
    return error;
}


export default function CodeRegister({ handleClose }) {

    const [err, setErr] = useState({})
    const [input, setInput] = useState({
        codigo: "",
    })



    const isButtonDisabled = () => (!!Object.keys(err).length || !input.codigo.length)

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
            <div className={s.codeContainer}>
                <h3 onClick={handleClose}>
                    X
                </h3>
                <div className={s.codeBody}>
                    <h2>Ingresa tu Código aqui</h2>
                    <form onSubmit={handleSubmit} className={s.codeForm}>
                        <input value={input.codigo} name="codigo" onChange={handleChange} type="text" maxlength="13" />
                        {err.codigo && <span className={s.formerror}>{err.codigo}</span>}

                        <button disabled={isButtonDisabled()} type='submit'>Subir mi Código</button>
                    </form>
                </div>
            </div>
        </>
    )
}

