import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

function createData(id, name, stock, price) {
  return { id, name, stock, price };
}

const rows = [
  createData(0, "Canavis brutallis", 34, 312.44),
  createData(1, "Aguacate Hash", 22, 866.99),
  createData(2, "Yerbabuena", 12, 100.81),
  createData(3, "Suculenta", 0, 654.39),
  createData(4, "Agapanto", 23, 212.79),
];

export default function Products() {
  return (
    <React.Fragment>
      <Title>Products</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
