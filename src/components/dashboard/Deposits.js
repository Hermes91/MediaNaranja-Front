import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total de cupones</Title>
      <Typography component="p" variant="h4">
        345
      </Typography>
      <p></p>

      <Title>Usuarios registrados</Title>
      <Typography component="p" variant="h4">
        57
      </Typography>
    </React.Fragment>
  );
}
