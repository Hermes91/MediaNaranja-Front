import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Title from "./Title";
import BasicCard from "./BasicCard";
import TablePagination from "@mui/material/TablePagination";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTickets,
  getUsers,
  deleteTicket,
} from "../../redux/actions/actionIndex";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Clients() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const tickets = useSelector((state) => state.allTickets);
  const tableRef = useRef(null);
  const [user, setUser] = useState({});
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(10);
  function handleChangePage(event, newpage) {
    setpg(newpage);
  }
  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  const handleDelete = (code) => {
    const enviar = { code: code };
    dispatch(deleteTicket(enviar));
    if (tickets.length) {
      dispatch(getTickets());
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  function addTickets(tickets, users) {
    const groupedTickets = tickets.reduce((acc, ticket) => {
      const userId = ticket.userId;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(ticket);
      return acc;
    }, {});

    return users.map((user) => {
      const userTickets = groupedTickets[user.id] || [];
      return {
        ...user,
        tickets: userTickets,
      };
    });
  }

  useEffect(() => {
    !users.length && dispatch(getUsers());
    !tickets.length && dispatch(getTickets());
  }, [users, tickets, dispatch]);

  return (
    <React.Fragment>
      <Title>Usuarios registrados</Title>
      <Divider />
      <Button
        variant="contained"
        onClick={onDownload}
        startIcon={<DownloadIcon />}
        sx={{
          width: 150,
          display: "flex",
          alignSelf: "flex-end",
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        Descargar
      </Button>
      <Table size="small" ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell>Documento de identidad</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo electrónico</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell align="center">Cupones registrados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {addTickets(tickets, users)
              .slice(pg * rpg, pg * rpg + rpg)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setUser(user);
                        handleOpen();
                      }}
                    >
                      {user.numDocumento}
                    </Button>
                  </TableCell>
                  <TableCell>{user.nombre}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.telephone}</TableCell>
                  <TableCell align="center">{user.tickets.length}</TableCell>
                </TableRow>
              ))}
          </>
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100, users.length]}
        component="div"
        count={users.length}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Divider />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicCard
            name={user.nombre}
            numDocumento={user.numDocumento}
            email={user.email}
            telephone={user.telephone}
            barrio={user.direccion}
            tickets={user.tickets}
            onClose={handleClose}
            handleDelete={handleDelete}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
