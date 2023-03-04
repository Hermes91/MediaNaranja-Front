import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putAdminCountdown, getAdmin } from "../../redux/actions/actionIndex";

import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Title from "./Title";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button, Box, Divider } from "@mui/material";

export default function SetCountDown() {
  const [value, setValue] = React.useState(dayjs());
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
 // console.log(admin?.countdown);
  const date = admin?.countdown?.split("T").join(" ").slice(0, -5);

  useEffect(() => {
    if (!admin || !Object.keys(admin).length) {
      dispatch(getAdmin());
    }
  }, [dispatch, admin]);

  function handleOnClick(e) {
    var infoCountDown = {
      countdown: value,
      email: admin.email,
    };
    dispatch(putAdminCountdown(infoCountDown));
    dispatch(getAdmin());
  }


  return (
    <React.Fragment>
      <Title>Fecha del concurso: {date}</Title>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            inputFormat="DD/MM/YYYY hh:mm:ss"
            onChange={(newValue) => {
              //  { console.log(newValue) }  H:13
              setValue(dayjs(newValue));
            }}
          />
          <Button size="large" variant="contained" onClick={handleOnClick}>
            Cambiar Fecha
          </Button>
        </LocalizationProvider>
      </Box>
    </React.Fragment>
  );
}
