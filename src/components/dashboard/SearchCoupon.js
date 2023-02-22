import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTickets,
  getUsers,
  searchByCode,
  getStoresDB,
} from "../../redux/actions/actionIndex.js";
import BasicCoupon from "./BasicCoupon.js";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Title from "./Title.js";
import { Button, Divider, TextField } from "@mui/material";

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

export default function SearchCoupon() {
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState("");
  const [coupon, setCoupon] = useState({});
  const [nameStore, setNameStore] = useState("");
  const ticketfound = useSelector((state) => state.filterTickets);
  const stores = useSelector((state) => state.storesDB);
  const users = useSelector((state) => state.allUsers);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (e) => {
    e.preventDefault();
    setTicket(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByCode(ticket));
    dispatch(getStoresDB());

    const filtrado = ticketfound.filter((ticket) => {
      return ticket.code.toString() === e.target.value;
    });

    if (filtrado.length) {
      !filtrado[0].length ? setCoupon(filtrado[0]) : setCoupon({});

      const store = stores.filter((store) => {
        return store.id === filtrado[0].storeId;
      });

      store.length && setNameStore(store[0].name);
      handleOpen();
    } else {
      alert("El cupón no existe en la base de datos");
      setTicket("");
    }
  };

  function addTickets(allTickets, allUsers) {
    for (let i = 0; i < allUsers.length; i++) {
      allUsers[i]["tickets"] = [];
      allTickets.map((t) => {
        if (allUsers[i].id === t.userId) {
          allUsers[i]["tickets"].push(t);
        }
      });
    }
    return allUsers;
  }

  useEffect(() => {
    !users.length && dispatch(getUsers());
    !ticketfound.length && dispatch(getTickets());
    !stores.length && dispatch(getStoresDB());
  }, [ticketfound, stores, dispatch]);

  return (
    <div className={style.backimg}>
      <Title>Validar cupón</Title>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Código del ticket"
          variant="outlined"
          value={ticket}
          size="small"
          onChange={(e) => handleInput(e)}
        />
        <Button
          variant="contained"
          onClick={(e) => handleInputSubmit(e)}
          value={ticket}
        >
          Buscar
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicCoupon
            code={coupon.code}
            dateRegistro={coupon?.dateRegistro
              ?.split("T")
              .join(" ")
              .slice(0, -5)}
            storeId={nameStore}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
