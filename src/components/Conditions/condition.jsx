import { Backdrop } from "@mui/material";
import { React, useState } from "react";
import s from '../Conditions/condition.module.css'
import UserForm from "../UserForm/UserForm";
import ByC from "../Conditions/bYc";
import { toast } from "react-toastify";

export default function Condition() {
 const user = localStorage.getItem('user')

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
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open2}>
                        <ByC
                            handleClose2={() => setOpen2(false)}
                        />
                    </Backdrop>
                </div>
                <div className={s.textParticipar}>
                    <h2>¿Como Participar?</h2>
                    <p>texto sobre como se participar Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc pellentesque vestibulum risus eu blandit.
                        Sed non magna id nunc posuere auctor. Morbi pretium fringilla lobortis.
                        Curabitur vitae porta nisi. Aliquam finibus egestas pharetra.
                        Integer pharetra purus quis tellus consequat ullamcorper.
                        Donec dictum efficitur metus sed molestie. Phasellus cursus non eros ac pulvinar.
                        Mauris id nisl lacinia, hendrerit elit nec, auctor urna. Duis lorem mauris,
                        hendrerit non nisl quis, faucibus lacinia magna. Maecenas sit amet erat faucibus,
                        imperdiet nibh eu, consectetur tellus. Donec a risus vestibulum, hendrerit libero
                        vehicula, vulputate felis.
                    </p>
                    
                    {user ? 
                   <div id="user_form" className={s.btn_bgstroke_logged} >¡Ya estás participando!</div>
                :
                <>
                <div id="user_form" className={s.btn_bgstroke} onClick={handleToggle}>Únete ahora</div>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
              
                <UserForm
                    handleClose={() => setOpen(false)}
                />
            </Backdrop>
            </>
                    }
                </div>
            </section>
        </>
    )
}