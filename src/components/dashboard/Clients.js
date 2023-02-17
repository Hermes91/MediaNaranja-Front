import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Title from "./Title";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/actions/actionIndex";
import BasicCard from "./BasicCard";

export default function Clients() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const tableRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  useEffect(() => {
    !users.length && dispatch(getUsers());
  }, [users, dispatch]);

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
            <TableCell align="center">Cupones registrados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <>
              <TableRow key={user.id}>
                <TableCell onClick={handleOpen}>{user.numDocumento}</TableCell>

                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">{user.coupons}</TableCell>
              </TableRow>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={user.id}
                aria-describedby={user.id}
              >
                <Box sx={style}>
                  <BasicCard
                    name={user.nombre}
                    numDocumento={user.numDocumento}
                    email={user.email}
                    telephone={user.telephone}
                    coupons={12}
                  />
                </Box>
              </Modal>
            </>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
