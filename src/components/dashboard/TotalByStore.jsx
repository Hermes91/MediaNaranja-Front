import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import style from "./TotalByStore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTickets, getStoresDB } from "../../redux/actions/actionIndex";
import { ResponsiveContainer } from "recharts";
import Title from "./Title";

const TotalByStore = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.allTickets);
  const stores = useSelector((state) => state.storesDB);

  useEffect(() => {
    !tickets.length && dispatch(getTickets());
    !stores.length && dispatch(getStoresDB());
  }, [stores, dispatch, tickets.length]);

  const list = stores.map((store, idx) => {
    return (
      <li key={idx}>
        <div className={style.horizontal} >
          <div className={style.storename}>{store.name}:</div>
          <div className={style.storeslider} >
            <Slider
              color="primary"
              valueLabelDisplay="on"
              defaultValue={0}
              max={tickets.length / 2}
              value={
                tickets.filter((ticket) => {
                  return ticket.storeId === store.id;
                }).length
              }
              aria-label="Disabled slider"
            />
          </div>
        </div>
      </li>
    );
  });

  return (
    <ResponsiveContainer>
      <Box>
        <Title>Total de cupones por tienda</Title>
        <br />
        <br />
        {list}
      </Box>
    </ResponsiveContainer>
  );
};

export default TotalByStore;
