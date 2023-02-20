import { useSelect } from "@mui/base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import validate from '../UserForm/validate'
import s from '../Code/code.module.css'
import {getStores, postTicket, getTickets, searchByCode} from "../../redux/actions/actionIndex"


function validate(input, ticketsRegistrados) {
    const error = {}
    const isBlankSpace = new RegExp("^\\s+$")
    var yaExiste = ticketsRegistrados.find((t) => t.code == input.code)
    if (!input.code || isBlankSpace.test(input.code)) { error.code = 'Ingrese un código válido' }
    //else if (input.code.trim().length > 9) error.code = `(${input.code.trim().length}/13)`
    //else if (allTickets.find((t) => t.code === input.code)) { error.code = 'Este código ya fue registrado' }
    else if (yaExiste) { error.code = 'Este código ya fue registrado' }
    return error;
}

export default function CodeRegister({ handleClose, code}) {

    const dispatch = useDispatch();
    const allStores = useSelector(state => state.allStores)
    const ticketsRegistrados = useSelector(state => state.filterTickets)
    const user = JSON.parse(localStorage.getItem("user"))
    const [selected, setSelected] = useState("")
    const [err, setErr] = useState({})
    const [input, setInput] = useState({  //llamar email usuario registrado
        code: code,
        email: user.email,
    })
    
    
    useEffect(() => {
        !ticketsRegistrados.length && dispatch(getTickets())
    })

    const isButtonDisabled = () => {
        if (!Object.keys(err).length && selected) return false
        return true
    }

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
            almacen: "",
            email: "",
        })
    }


    const handleSelect = (e) => {
        setSelected(e.target.value)
        const validacion = validate(input, ticketsRegistrados)
        setErr(validacion)
      }

    return (
        <>
            <div className={s.codeContainer}>
                <h3 onClick={handleClose}>
                    X
                </h3>
                <div className={s.codeBody}>
                    <h2>Elige el almacén donde realizaste la compra</h2>
                    <form onSubmit={handleSubmit} className={s.codeForm}>
                        <input hidden defaultValue={input.code} name="code" type="number" maxLength="13" />
                        {err.code && <span className={s.formerror}>{err.code}</span>}
                        <select onChange={handleSelect} defaultValue='DEFAULT'>
                        <option value="DEFAULT" disabled>--seleccionar almacen--</option>
                        {allStores.map((store, index) => <option name="store" onChange={handleSelect} value={store} key={index}>{store}</option>)}
                        </select>
                        <button disabled={isButtonDisabled()} onClick={handleClose} type='submit'>Subir mi Código</button>
                    </form>
                </div>
            </div>
        </>
    )
}

