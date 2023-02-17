import React, {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Pagination } from "./Pagination"
import { useDispatch, useSelector } from "react-redux";
import { getUsers, filterByUser, getTickets } from "../../redux/actions/actionIndex";

export default function RecentOrders() {
  const allUsers = useSelector(state => state.allUsers)
  const allTickets = useSelector(state => state.allTickets)
  const dispatch = useDispatch();

useEffect(() => {
  !allUsers.length && dispatch(getUsers())
  !allTickets.length && dispatch(getTickets())
})

function addTickets(allTickets, allUsers) {
  for (let i = 0; i < allUsers.length; i++) {
    allUsers[i]["tickets"] = []
    allTickets.map(t => {
      if (allUsers[i].id === t.userId) {
        allUsers[i]["tickets"].push(t)
      } 
    })
  }
  return allUsers
}

  const only15 = allUsers.slice(0, 15)

  return (
    <React.Fragment>
      <Title>Últimos usuarios registrados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo electrónico</TableCell>
            <TableCell align="center">Cupones registrados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addTickets(allTickets, only15).map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.nombre}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell align="center">{u.tickets.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
