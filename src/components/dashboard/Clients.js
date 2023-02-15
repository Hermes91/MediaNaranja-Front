import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Title from "./Title";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";

// Generate Order Data
// Generate Order Data
function createData(id, date, name, email, coupons) {
  return { id, date, name, email, coupons };
}

const rows = [
  createData(
    0,
    "10 Feb, 2023",
    "Elvis Presley",
    "elvis@lamedianaranja.com.co",
    3
  ),
  createData(
    1,
    "8 Feb, 2023",
    "Paul McCartney",
    "paul@lamedianaranja.com.co",
    11
  ),
  createData(2, "8 Feb, 2023", "Tom Scholz", "tom@lamedianaranja.com.co", 2),
  createData(
    3,
    "6 Feb, 2023",
    "Michael Jackson",
    "michael@lamedianaranja.com.co",
    1
  ),
  createData(
    4,
    "6 Feb, 2023",
    "Bruce Springsteen",
    "bruce@lamedianaranja.com.co",
    5
  ),
];

export default function Clients() {
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
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
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo electrónico</TableCell>
            <TableCell align="center">Cupones registrados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="center">{row.coupons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
