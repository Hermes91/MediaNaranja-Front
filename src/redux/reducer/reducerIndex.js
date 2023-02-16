import {
    GET_TICKETS,
    GET_STORES,
    GET_USERS,
    FILTER_BY_USER,
    FILTER_BY_STORE,
  } from "../actions/actionIndex.js";
export const initialState = {
        allTickets: [],
        allStores: ['bello', 'apartado', 'envigado', 'parque berrio', 'pichincha', 'carabobo', 'cundinamarca', 'ayacucho', 'pereira', 'buenos aires', 'central', 'itagui'],
        allUsers: [],
        filterTickets: [],
        orderedChange: false,
      };

export default function reducer(state = initialState, action) { 

  switch (action.type) {

    case GET_TICKETS:
      return {
        ...state,
        allTickets: action.payload,
        filterTickets: action.payload,
      };

    case GET_STORES:
      return {
        ...state.allStores
      };
      
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case FILTER_BY_USER:
      return {
        ...state,
        filterTickets: action.payload,
      };

    case FILTER_BY_STORE:
      return {
        ...state,
        filterProducts: action.payload,
      };
    
    default:
      return {
        ...state,
      };
    }
}