import React from "react";
import Title from "./Title";
import { Button, Divider, TextField, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../../redux/actions/actionIndex";

function AdminLogin(props) {
  const admin = useSelector((state) => state.admin);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!admin || !Object.keys(admin).length) {
      dispatch(getAdmin());
    }
  }, [dispatch, admin]);

  function handleChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();

    if (admin.password == password) {
      props.setAdminLogged(true);
      alert("Login exitoso");
    } else {
      alert("Tu contraseña actual es incorrecta");
      setPassword("");
    }
  }

  return (
    <React.Fragment>
      <Title>Ingreso administrativo</Title>
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
          value={password}
          size="small"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={(e) => handleOnClick(e)}
          value={password}
        >
          Buscar
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default AdminLogin;
