import { Divider } from "@mui/material";
import * as React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { yellow } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import BasicCard from "./BasicCard";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTickets, getUsers } from "../../redux/actions/actionIndex";
import WinnerCard from "./WinnerCard";

export default function Orders() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const tickets = useSelector((state) => state.allTickets);
  const [usersWinners, setUsersWinners] = React.useState([]);

  function addTickets(allTickets, allUsers) {
    for (let i = 0; i < allUsers.length; i++) {
      allUsers[i]["user"] = [];
      allTickets.map((t) => {
        if (allUsers[i].userId === t.id) {
          allUsers[i]["user"].push(t);
        }
      });
    }
    console.log(allUsers)
    return allUsers;
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

  const buttonSx = {
    ...(success && {
      bgcolor: yellow[500],
      "&:hover": {
        bgcolor: yellow[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, [users]);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        usersWinners.push(tickets[Math.floor(Math.random() * tickets.length)])
        
      }, 2000);
    }
  };

  const userCards = addTickets(users, usersWinners).map((ticketWinner) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <WinnerCard
          name={ticketWinner.user[0].nombre}
          email={ticketWinner.user[0].email}
          numDocumento={ticketWinner.user[0].numDocumento}
          telephone={ticketWinner.user[0].telephone}
          barrio={ticketWinner.user[0].direccion}
          ticket={ticketWinner}
          
        />
      </Box>
    );
  });

  return (
    <React.Fragment>
      <Title>Sorteo de ganadores</Title>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tiendas}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Almacén" />}
          />
          <Box sx={{ m: 2, position: "relative" }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <PublishedWithChangesIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: yellow[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {userCards}
        </Box>
      </Box>
    </React.Fragment>
  );
}
