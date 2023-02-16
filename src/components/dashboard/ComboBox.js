import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tiendas}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Almacén" />}
    />
  );
}

const tiendas = [
  "BELLO",
  "APARTADÓ",
  "ENVIGADO",
  "PARQUE BERRÍO",
  "PICHINCHA",
  "CARABOBO",
  "CUNDINAMARCA",
  "AYACUCHO",
  "PEREIRA",
  "BUENOS AIRES",
  "CENTRAL",
  "ITAGÜÍ",
];
