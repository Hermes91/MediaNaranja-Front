import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, searchByCode } from "../../redux/actions/actionIndex.js";
import BasicCoupon from "./BasicCoupon.js";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

export default function RecentOrders() {
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState("");
  const [coupon, setCoupon] = useState({});
  const ticketfound = useSelector((state) => state.filterTickets);

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
    const filtrado = ticketfound.filter((ticket) => {
      return ticket.code.toString() == e.target.value;
    });
    !filtrado[0].length ? setCoupon(filtrado[0]) : setCoupon({});
    handleOpen();
    setTicket("");
  };

  useEffect(() => {
    !ticketfound.length && dispatch(getTickets());
  }, [ticketfound, dispatch]);

  return (
    <div className={style.backimg}>
      <div className={style.components}>
        <form className={style.searchBar}>
          <input
            className={style.input}
            onChange={(e) => handleInput(e)}
            placeholder="Código del ticket..."
            maxLength="50"
            value={ticket}
          />
          <button
            onClick={(e) => handleInputSubmit(e)}
            className={style.submit}
            type="submit"
            value={ticket}
          >
            Buscar
          </button>
        </form>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicCoupon
            code={coupon.code}
            dateRegistro={coupon.dateRegistro}
            storeId={coupon.storeId}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
