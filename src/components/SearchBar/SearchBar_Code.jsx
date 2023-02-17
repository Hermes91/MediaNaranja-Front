import React, { useState } from "react";
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //
import { searchByCode } from '../../redux/actions/actionIndex.js'

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBarByCode() {
    const dispatch = useDispatch();
    const [ticket, setTicket] = useState("");


    const handleInput = (e) => {
        e.preventDefault();
        setTicket(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(searchByCode(ticket));
        setTicket("");
    };

    return (
        <div className={style.backimg}>
            <div className={style.components}>
                <form className={style.searchBar}>
                    <input
                        className={style.input}
                        onChange={(e) => handleInput(e)}
                        placeholder='Código del ticket...'
                        maxLength="50"
                        value={ticket}
                    />
                    <input
                        onClick={(e) => handleInputSubmit(e)}
                        className={style.submit}
                        type='submit'
                        value='Buscar'
                    />
                </form>
            </div>
        </div>
    )


}