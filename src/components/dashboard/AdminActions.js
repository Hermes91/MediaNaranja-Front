import React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putAdminPassword, getAdmin } from "../../redux/actions/actionIndex";
import { TextField, Button, Divider, Box } from "@mui/material";

function AdminActions() {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!admin || !Object.keys(admin).length) {
      dispatch(getAdmin());
    }
  }, [dispatch, admin]);

  function handleChange(e) {
    e.preventDefault();
    setNewPassword(e.target.value);
  }

  function handleChangeOld(e) {
    e.preventDefault();
    setOldPassword(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();
    let infoPassword = {
      password: newPassword,
      email: admin.email,
    };
    if (admin.password == oldPassword) {
      dispatch(putAdminPassword(infoPassword));
      dispatch(getAdmin());
      setNewPassword("");
      alert("Tu contraseña ha sido cambiada con exito");
    } else {
      alert("Tu contraseña actual es incorrecta");
      setNewPassword("");
    }
  }
  return (
    <React.Fragment>
      <Title>Cambiar password de administrador</Title>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="password"
          label="Password actual"
          variant="outlined"
          value={oldPassword}
          size="small"
          type="password"
          onChange={handleChangeOld}
        />
        <TextField
          id="outlined-basic"
          name="password"
          label="Password nuevo"
          variant="outlined"
          value={newPassword}
          size="small"
          type="password"
          onChange={handleChange}
        />

        <Button variant="contained" onClick={handleOnClick}>
          Cambiar Password
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default AdminActions;
