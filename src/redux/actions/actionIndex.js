import { Action } from "@remix-run/router";
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
export const POST_TICKET = 'POST_TICKET';
export const SEARCH_BY_EMAIL = 'SEARCH_BY_EMAIL';
export const SEARCH_BY_DOCUMENT = 'SEARCH_BY_DOCUMENT';
export const GET_STORES_DB = 'GET_STORES_DB';
export const GET_ADMIN = 'GET_ADMIN';
export const PUT_ADMIN_PW = 'PUT_ADMIN_PW';
export const PUT_ADMIN_COUNTDOWN = 'PUT_ADMIN_COUNTDOWN';

export const getAdmin = () => {
  return async function (dispatch) {
    const adminRes = await axios.get("/admin");
    dispatch({ type: GET_ADMIN, payload: adminRes.data[0] })
  }
}

export const putAdminPassword = ({ password, email }) => {
  return async function (dispatch) {
    try {
      const adminRes = await axios.put("/admin", { password, email });
      dispatch({ type: PUT_ADMIN_PW, payload: adminRes.data.form })
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const putAdminCountdown = ({ countdown, email }) => {
  return async function (dispatch) {
    try {
      const adminRes = await axios.put("/admin", { countdown, email });
      dispatch({ type: PUT_ADMIN_COUNTDOWN, payload: adminRes.data.form })
    } catch (error) {
      console.log(error);
    }
  }
}


export const getTickets = () => {
  return async function (dispatch) {
    const ticketResponse = await axios.get(`/tickets`);
    dispatch({ type: GET_TICKETS, payload: ticketResponse.data });
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    const usersResponse = await axios.get("/user");
    dispatch({ type: GET_USERS, payload: usersResponse.data });
  };
};

export const getStoresDB = () => {
  return async function (dispatch) {
    const storeResponde = await axios.get("/store");
    dispatch({ type: GET_STORES_DB, payload: storeResponde.data });
  };
};

export const filterByUser = (numDocumento) => {
  return async function (dispatch) {
    const ticketsResponse = await axios.get(`/tickets`, numDocumento);
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
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/tickets/?code=${code}`);
      dispatch({ type: SEARCH_BY_CODE, payload: searchResponse.data });
    } catch (error) {
      console.error("Ticket not found: ", error);
      toast.warn('El código ingresado no le corresponde a ningún ticket');
    }
  };
}
export const searchByEmail = (email) => {
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/user/?email=${email}`);
      dispatch({ type: SEARCH_BY_EMAIL, payload: searchResponse.data });
    } catch (error) {
      console.log('Email error ', error);
      toast.warn('El email no se encuentra registrado en la base de datos');
    }
  }
}

export const postUser = (userInfo) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/user", userInfo);
      dispatch({ type: POST_USER, payload: response.config.data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: POST_USER, payload: { data: [] } });
    }
  };
};



export const searchByDocument = (document) => {
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/user/?numDocumento=${document}`);
      dispatch({ type: SEARCH_BY_DOCUMENT, payload: searchResponse.data });
    } catch (error) {
      console.log('Document error ', error);
      toast.warn('El documento no se encuentra registrado en la base de datos');
    }
  }
}

export const postTicket = (ticketInfo) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/tickets", ticketInfo);
      dispatch({ type: POST_TICKET, payload: ticketInfo });
      console.log(response)
    } catch (error) {
      console.log(error);
      dispatch({ type: POST_TICKET, payload: { data: [] } });
    }
  };
};

