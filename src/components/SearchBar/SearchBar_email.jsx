import React, { useState } from "react";
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //
import { searchByEmail } from '../../redux/actions/actionIndex.js'

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBarByEmail() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");


    const handleInput = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(searchByEmail(email));
        setEmail("");
    };

    return (
        <div className={style.backimg}>
            <div className={style.components}>
                <form className={style.searchBar}>
                    <input
                        className={style.input}
                        onChange={(e) => handleInput(e)}
                        placeholder='Email del usuario...'
                        maxLength="40"
                        value={email}
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