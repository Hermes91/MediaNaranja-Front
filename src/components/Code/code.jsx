import { useSelect } from "@mui/base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import validate from '../UserForm/validate'
import s from '../Code/code.module.css'
import {getStores, postTicket, getTickets} from "../../redux/actions/actionIndex"


function validate(input, allTickets) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    if (!input.code || isBlankSpace.test(input.code)) { error.code = 'Ingrese un código válido' }
    else if (input.code.trim().length > 9) error.code = `(${input.code.trim().length}/13)`
    else if (allTickets.find(t => t.code === input.code)) { error.code = 'Este código ya fue registrado' }
    return error;
}


export default function CodeRegister({ handleClose }) {

    const dispatch = useDispatch();
    const allStores = useSelector(state => state.allStores)
    const allTickets = useSelector(state => state.allTickets)
    const user = useSelector(state => state.user)
    const [selected, setSelected] = useState("")
    const [err, setErr] = useState({})
    const [input, setInput] = useState({  //llamar email usuario registrado
        code: "",
        email: "",
    })
    
    useEffect(() => {
        !allTickets.length && dispatch(getTickets())
    })

    const isButtonDisabled = () => (!!Object.keys(err).length || !input.code.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        const ticketInfo = {
            code: input.code,
            almacen: selected,
            email: input.email
        }
        dispatch(postTicket(ticketInfo))
        setInput({
            code: "",
            almacen: '',
            email: "",
        })
    }


    const handleChange = (e) => {
        setInput({ ...input, code: e.target.value})
        const validacion = validate(input, allTickets)
        setErr(validacion)
    }

    const handleSelect = (e) => {
        setSelected(e.target.value)
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
                        <input value={input.code} name="code" onChange={handleChange} type="number" maxLength="13" />
                        {err.code && <span className={s.formerror}>{err.code}</span>}
                        <select onChange={handleSelect} defaultValue='DEFAULT'>
                        <option value="DEFAULT" disabled>--seleccionar almacen--</option>
                        {allStores.map((store, index) => <option value={store} key={index}>{store}</option>)}
                        </select>
                        <button disabled={isButtonDisabled()} type='submit'>Subir mi Código</button>
                    </form>
                </div>
            </div>
        </>
    )
}

