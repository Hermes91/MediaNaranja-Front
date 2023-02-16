import React, { useState } from "react";
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //
import { searchByCode } from '../../redux/actions/actionIndex.js'

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");


    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(searchByCode(name));
        setName("");
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
                        value={name}
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