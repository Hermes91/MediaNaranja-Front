import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.email}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Almacén: {props.store}
        </Typography>
        <Typography variant="body2">
          Cupones: {props.coupons}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ width: "100%" }}>
          Ver cliente
        </Button>
      </CardActions>
    </Card>
  );
}
