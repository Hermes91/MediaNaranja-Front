import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
//import { deleteTicket } from "../../redux/actions/actionIndex";

export default function BasicCard(props) {
  //const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.email}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Documento: {props.numDocumento}
        </Typography>
        <Typography color="text.secondary">
          teléfono: {props.telephone}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Barrio: {props.barrio}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          Cupón ganador:
              <p key={props.ticket.id}>
                {props.ticket.code}
                <button className="button" onClick={() => props.handleDelete(props.ticket.code)}>
                  x
                </button>
              </p>

          <br />
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
