import React, { useState } from "react";
import validate from "../UserForm/validate";
import s from "./UserForm.module.css";
import { postUser } from "../../redux/actions/actionIndex";
import { useDispatch, useSelector } from "react-redux";

export default function UserForm({ handleClose }) {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  const [input, setInput] = useState({
    email: "",
    nombre: "",
    numDocumento: "",
    direccion: "",
    telephone: "",
  });
  const [err, setErr] = useState({});

  var yaExiste = allUsers.find((u) => u.numDocumento == input.numDocumento);

  const isButtonDisabled = () => {
    if (!!Object.keys(err).length || !input.email.length) return true;
    else if (yaExiste) return true;
    else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: input.email,
      nombre: input.nombre,
      numDocumento: Number(input.numDocumento),
      direccion: input.direccion,
      telephone: Number(input.telephone),
    };
    dispatch(postUser(newUser));
    localStorage.setItem("user", JSON.stringify(newUser));
    handleClose();
    setInput({
      email: "",
      nombre: "",
      numDocumento: "",
      direccion: "",
      telephone: "",
    });
    //  window.location.reload()
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErr(validate({ ...input, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div className={s.formContainer}>
        <h3 onClick={handleClose}>X</h3>
        <div className={s.formBody}>
          <h2>¡Regístrate para cargar tus cupones!</h2>
          <form onSubmit={handleSubmit} className={s.formulario}>
            <div className={s.formItem}>
              <label>Nombre Completo*: </label>
              <input
                value={input.nombre}
                name="nombre"
                onChange={handleChange}
                type="text"
                placeholder="Ingresa tu nombre completo"
              />
              {err.nombre && <span className={s.formerror}>{err.nombre}</span>}
            </div>
            <div className={s.formItem}>
              <label>E-mail*: </label>
              <input
                value={input.email}
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="Ingresa tu e-mail"
              />
              {err.email && <span className={s.formerror}>{err.email}</span>}
            </div>
            <div className={s.formItem}>
              <label>N° de Documento*: </label>
              <input
                value={input.numDocumento}
                name="numDocumento"
                onChange={handleChange}
                type="text"
                placeholder="Ingresa tu cédula"
              />
              {err.numDocumento && (
                <span className={s.formerror}>{err.numDocumento}</span>
              )}
            </div>
            <div className={s.formItem}>
              <label>Barrio: </label>
              <input
                value={input.direccion}
                name="direccion"
                onChange={handleChange}
                type="text"
                placeholder="¿De qué barrio eres?"
              />
            </div>
            <div className={s.formItem}>
              <label>Teléfono*: </label>
              <input
                value={input.telephone}
                name="telephone"
                onChange={handleChange}
                type="text"
                placeholder="Tu número de teléfono"
              />
              {err.telephone && (
                <span className={s.formerror}>{err.telephone}</span>
              )}
            </div>
            {yaExiste ? (
              <span className={s.formerror}>
                ¡Tu cédula ya está registrada!
              </span>
            ) : null}
            <button
              className={s.button}
              onClick={handleClose}
              disabled={isButtonDisabled()}
              type="submit"
            >
              REGISTRARME
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
