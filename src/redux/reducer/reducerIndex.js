 import 
 {  GET_TICKETS,
    GET_STORES,
    GET_STORE,
    GET_USERS,
    FILTER_BY_USER,
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
    SEARCH_BY_DOCUMENT

  } from "../actions/actionIndex.js";
export const initialState = {
  allTickets: [],
  allStores: ['bello', 'apartado', 'envigado', 'parque berrio', 'pichincha', 'carabobo', 'cundinamarca', 'ayacucho', 'pereira', 'buenos aires', 'central', 'itagui'],
  allUsers: [],
  storesDB: [],
  store: "",
  filterTickets: [],
  loggedUser: {},
  user: [],
  admin: {},
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

    case GET_STORES_DB:
      return {
        ...state,
        storesDB: action.payload
      }

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

    case FILTER_BY_USER:
      return {
        ...state,
        filterTickets: action.payload,
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
        user: action.payload
      }

    case POST_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case POST_TICKET:
      return {
        ...state,
        allTickets: [...state.allTickets, action.payload],
        loggedUser: action.payload
      };

    case POST_TICKET:
      return {
        ...state,
        allTickets: [...state.allTickets, action.payload]
      }

    case SEARCH_BY_DOCUMENT:
      return {
        ...state,
        loggedUser: action.payload
      }

    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload
      }

    case PUT_ADMIN_PW:
      return {
        ...state,
        admin: state.admin.password = action.payload
      }

    case PUT_ADMIN_COUNTDOWN:
      return {
        ...state,
        admin: state.admin.countdown = action.payload
      }

      case GET_USER_TICKETS:
        return {
          ...state,
          filterTickets: action.payload
        }
      

    default:
      return {
        ...state,
      };
  }
}
