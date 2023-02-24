import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByDocument, getUsers } from "../../redux/actions/actionIndex";
import s from "../introDNI/introDni.module.css";
import { toast } from "react-toastify";
import UserForm from "../UserForm/UserForm";
import { Backdrop } from "@mui/material";

///////  valida el DNI ingresado  //////
function validate(input, allUsers) {
  const error = {};
  const isBlankSpace = new RegExp("^\\s+$");
  const isDNI = /^[0-9]{6,10}$/;
  if (!input.numDocumento || isBlankSpace.test(input.numDocumento))
    error.numDocumento = "Ingrese su n° de documento";
  else if (!isDNI.test(input.numDocumento))
    error.numDocumento = "Ingrese un documento valido";
  return error;
}

export default function IntroDNI({ handleClose }) {
  const [err, setErr] = useState({});
  const allUsers = useSelector((state) => state.allUsers);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  let dispatch = useDispatch();

  useEffect(() => {
    !allUsers.length && dispatch(getUsers());
  }, [allUsers, dispatch]);

  const [input, setInput] = useState({
    numDocumento: "",
  });

  var yaExiste = allUsers.find((u) => u.numDocumento == input?.numDocumento);

  const isButtonDisabled = () => {
    if (Object.keys(err).length || !input.numDocumento) return true;
    else if (!yaExiste) return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByDocument(Number(input.numDocumento)));
    const validacion = validate(input, allUsers, yaExiste);
    setErr(validacion);
    if (yaExiste && !Object.keys(err).length) {
      localStorage.setItem("user", JSON.stringify(yaExiste));
      window.location.reload();
    } else {
      toast.warn("Usted no está registrado, haga click en Únete Ahora");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    const validacion = validate(input, allUsers);
    setErr(validacion);
  };

  return (
    <>
      <div className={s.dniContainer}>
        <h3 onClick={handleClose}>X</h3>
        <div className={s.dniBody}>
          <h2>Ingresa tu cédula</h2>
          <label onSubmit={handleSubmit} className={s.dniForm}>
            <input
              value={input.numDocumento}
              name="numDocumento"
              onChange={handleChange}
              type="text"
              maxLength="10"
            />
            {err.numDocumento && (
              <span className={s.formerror}>{err.numDocumento}</span>
            )}

            {isButtonDisabled() ? (
              <>
                {!err.numDocumento && !yaExiste ? (
                  <>
                    <a onClick={handleToggle} style={{ cursor: "pointer" }}>
                      O regístrate <u>AQUÍ</u>
                    </a>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={open}
                    >
                      <UserForm handleClose={() => setOpen(false)} />
                    </Backdrop>
                  </>
                ) : null}
              </>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isButtonDisabled()}
                type="submit"
              >
                INGRESAR
              </button>
            )}
          </label>
        </div>
      </div>
    </>
  );
}
