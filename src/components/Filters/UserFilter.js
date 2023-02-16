import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterByUser,
  getAllTickets
} from "../../redux/actions/actionIndex.js";

// --Importo styles-- //
//import style from "./filters.module.css";

export default function SearchbyUser() {
  // --Handels-- //
  const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(filterByUser(email));
        setEmail("");
    };
  
  return (
    <div>
     <form>
      <input
        onChange={(e) => handleInput(e)}
        placeholder='Search...'
        maxLength="40"
        value={email}
      />
      <button
        onClick={(e) => handleInputSubmit(e)}
        type='submit'
        placeholder="Busca por usuario!"
      >Buscar usuario
      </button>
    </form>
  </div>
  );
}

