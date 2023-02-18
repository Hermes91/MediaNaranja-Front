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
    const [numDocumento, setNumDocumento] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setNumDocumento(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(filterByUser(numDocumento));
        setNumDocumento("");
    };
  
  return (
    <div>
     <form>
      <input
        onChange={(e) => handleInput(e)}
        placeholder='Search...'
        maxLength="40"
        type="number"
        value={numDocumento}
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

