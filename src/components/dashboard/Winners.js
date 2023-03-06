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
import { filterByStore } from '../../redux/actions/actionIndex'

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
  const ticketsStore = useSelector((state) => state.filterTickets);
  const [usersWinners, setUsersWinners] = React.useState([]);

  function addTickets(users, usersWinners) {
    for (let i = 0; i < usersWinners.length; i++) {
      usersWinners[i]["user"] = [];
      users.map((t) => {
        if (usersWinners[i].userId === t.id) {
          usersWinners[i]["user"].push(t);
        }
      });
    }
    return usersWinners;
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

  const [value, setValue] = React.useState(tiendas[0].toLowerCase());
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
  
const validate = (value) => {
  if (value === 'ITAGÜÍ' || value === 'itagüí') {
    setValue('itagui') 
  } 
  if (value === 'APARTADÓ' || value === 'apartadó') {
    setValue('apartado')
  }
  if (value === "PARQUE BERRÍO" || value === 'parque berrío') {
    setValue('parque berrio')
  }
}

useEffect(() => {
  validate(value)
  dispatch(filterByStore(value))
},[value])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        usersWinners.push(ticketsStore[Math.floor(Math.random() * ticketsStore.length)])
        setSuccess(true);
        setLoading(false);
      }, 2500);
    }
  };

  const userCard = addTickets(users, usersWinners).map((ticketWinner) => {
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
  })
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
            defaultValue={tiendas[0]}
            onChange={(event, newValue) => {
              setValue(newValue.toLowerCase().toString());
            }}
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
          {userCard}
        </Box>
      </Box>
    </React.Fragment>
  );
}