import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCoupon(props) {
  return (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Código: {props.code}
        </Typography>
        <Typography variant="h5" component="div">
          Fecha de registro: {props.dateRegistro}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Tienda: {props.storeId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ width: "100%" }} onClick={props.onClose}>
          CERRAR
        </Button>
      </CardActions>
    </Card>
  );
}
