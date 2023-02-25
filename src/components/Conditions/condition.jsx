import { Backdrop } from "@mui/material";
import { React, useState } from "react";
import s from "../Conditions/condition.module.css";
import UserForm from "../UserForm/UserForm";
import ByC from "../Conditions/bYc";
import { toast } from "react-toastify";

export default function Condition() {
  const user = localStorage.getItem("user");

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = useState(false);
  const handleToggle2 = () => {
    setOpen2(!open2);
  };

  return (
    <>
      <section className={s.content}>
        <div className={s.ByC}>
          <h2 onClick={handleToggle2}> Lee las Bases y Condiciones</h2>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open2}
          >
            <ByC handleClose2={() => setOpen2(false)} />
          </Backdrop>
        </div>
        <div className={s.textParticipar}>
          <h2>¿Cómo Participar?</h2>
          <p>
            Gracias por participar, para ser uno de los ganadores de uno de los
            12 combos de portátil + impresora.{" "}
          </p>
          <br />
          <p>
            {" "}
            Por cada compra igual o superior de $50.000, en cualquiera de
            nuestras 12 tiendas, recibirás un cupón con un código QR. Por
            ejemplo, si la compra es por valor de 150.000 recibirás tres (3)
            cupones.{" "}
          </p>
          <br />
          <p>
            {" "}
            Inscribe tus datos y los cupones. Podrás inscribir todos los cupones
            que quiera por las compras realizadas desde el inicio del concurso y
            hasta el 23 de marzo a las11:59 PM hora local.{" "}
          </p>
          <br />
          <p>
            El sorteo ha sido aprobado por La lotería de Medellín para las
            tiendas ubicadas en Antioquia y por la lotería de Risaralda para
            nuestra tienda de Pereira y se realizará el día 24 de marzo por
            medio de una aplicación que elige el ganador de forma aleatoria.
          </p>

          {user ? (
            <div id="user_form" className={s.btn_bgstroke_logged}>
              ¡Ya puedes ingresar cupones y participar!
            </div>
          ) : (
            <>
              <div
                id="user_form"
                className={s.btn_bgstroke}
                onClick={handleToggle}
              >
                Únete ahora
              </div>
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
          )}
        </div>
      </section>
    </>
  );
}
