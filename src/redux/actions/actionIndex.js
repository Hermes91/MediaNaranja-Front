import axios from "axios";

export const GET_TICKETS = "GET_TICKETS";
export const GET_STORES = "GET_STORES";
export const GET_USERS = "GET_USERS";
export const FILTER_BY_USER = "FILTER_BY_USER";
export const FILTER_BY_STORE = "FILTER_BY_STORE";

export const getTickets = () => {
    return async function (dispatch) {
      const ticketResponse = await axios.get("/tickets");
      dispatch({ type: GET_TICKETS, payload: ticketResponse.data });
    };
  };

export const getUsers = () => {
    return async function (dispatch) {
      const usersResponse = await axios.get("/user");
      dispatch({ type: GET_USERS, payload: usersResponse.data });
    };
  };
  
export const filterByUser = (email) => {
  return async function (dispatch) {
    const ticketsResponse = await axios.get(`/tickets/`, email);
    console.log(ticketsResponse.data)
    dispatch({ type: FILTER_BY_USER, payload: ticketsResponse.data });
  };
};

export const filterByStore = (almacen) => {
  return async function (dispatch) {
    const ticketsResponse = await axios.get(`/tickets/?almacen=${almacen}`);
    dispatch({ type: FILTER_BY_STORE, payload: ticketsResponse.data });
  };
};
