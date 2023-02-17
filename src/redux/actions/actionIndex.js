import axios from "axios";
import { toast } from 'react-toastify';

export const GET_TICKETS = "GET_TICKETS";
export const GET_STORES = "GET_STORES";
export const GET_STORE = "GET_STORE";
export const GET_USERS = "GET_USERS";
export const FILTER_BY_USER = "FILTER_BY_USER";
export const FILTER_BY_STORE = "FILTER_BY_STORE";
export const SEARCH_BY_CODE = 'SEARCH_BY_CODE';
export const POST_USER = 'POST_USER';

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

export const getStores = () => {
    return async function (dispatch) {
      const storeResponde = await axios.get("/store");
      dispatch({ type: GET_STORES, payload: storeResponde.data });
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

export const searchByCode = (code) => {
  return async function ( dispatch ) {
    try {
      const searchResponse = await axios.get(`/tickets/?code=${code}`);
      dispatch({ type: SEARCH_BY_CODE, payload: searchResponse.data });
    } catch (error) {
      console.error("Ticket not found: ", error);
      toast.warn('El código ingresado no le corresponde a ningún ticket');
    }
  };
}

export const postUser = (userInfo) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products", userInfo);
      dispatch({ type: POST_USER, payload: response.config.data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: POST_USER, payload: { data: [] } });
    }
  };
};