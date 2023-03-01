import {
  GET_TICKETS,
  GET_STORES,
  GET_STORE,
  GET_USERS,
  FILTER_BY_STORE,
  SEARCH_BY_CODE,
  POST_USER,
  SEARCH_BY_EMAIL,
  GET_ADMIN,
  PUT_ADMIN_COUNTDOWN,
  PUT_ADMIN_PW,
  POST_TICKET,
  GET_STORES_DB,
  GET_USER_TICKETS,
  SEARCH_BY_DOCUMENT,
  DELETE_TICKET,
  GET_CLEAN,
} from "../actions/actionIndex.js";
export const initialState = {
  allTickets: [],
  allStores: [
    "bello",
    "apartado",
    "envigado",
    "parque berrio",
    "pichincha",
    "carabobo",
    "cundinamarca",
    "ayacucho",
    "pereira",
    "buenos aires",
    "central",
    "itagui",
  ],
  allUsers: [],
  storesDB: [],
  store: "",
  filterTickets: [],
  loggedUser: {},
  user: [],
  admin: {},
  userTickets : [],
  orderedChange: false,
  ticketDeleted: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        allTickets: action.payload,
      };

    case GET_STORES_DB:
      return {
        ...state,
        storesDB: action.payload,
      };

    // case GET_STORE:
    //   return {
    //     ...state,
    //     store: action.payload.name
    //   };

    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case FILTER_BY_STORE:
      return {
        ...state,
        filterTickets: action.payload,
      };

    case SEARCH_BY_CODE:
      return {
        ...state,
        filterTickets: action.payload,
      };

    case SEARCH_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      };

    case POST_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case POST_TICKET:
      return {
        ...state,
        allTickets: [...state.allTickets, action.payload], 
        userTickets: [...state.userTickets, action.payload]
      };

    case SEARCH_BY_DOCUMENT:
      return {
        ...state,
        loggedUser: action.payload,
      };

    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    case PUT_ADMIN_PW:
      return {
        ...state,
        admin: (state.admin.password = action.payload),
      };

    case DELETE_TICKET:
      return {
        ...state,
        ticketDeleted: !state.ticketDeleted,
        allTickets: state.allTickets.filter(t => t.code !== action.payload)
      };

    case PUT_ADMIN_COUNTDOWN:
      return {
        ...state,
        admin: (state.admin.countdown = action.payload),
      };

    case GET_USER_TICKETS:
      return {
        ...state,
        userTickets: action.payload,
      };

      case GET_CLEAN: {
        return {
          ...state,
          dogsDetail: action.payload,
        };
      }

    default:
      return {
        ...state,
      };
  }
}
