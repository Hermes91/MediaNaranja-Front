import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTickets } from "../../redux/actions/actionIndex";
import { getUsers } from "../../redux/actions/actionIndex";

export default function Deposits() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.allTickets);
  const users = useSelector((state) => state.allUsers);

  useEffect(() => {
    !tickets.length && dispatch(getTickets());
    !users.length && dispatch(getUsers());
  }, [tickets, users, dispatch]);

  return (
    <React.Fragment>
      <Title>Total de cupones</Title>
      <Typography component="p" variant="h4">
        {tickets.length}
      </Typography>
      <p></p>

      <Title>Usuarios registrados</Title>
      <Typography component="p" variant="h4">
        {users.length}
      </Typography>
    </React.Fragment>
  );
}
