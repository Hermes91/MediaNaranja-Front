//import style from "./CategoriesFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByStore,
  getStores
  //   setCurrent,
  //   setPage,
} from "../../../src/redux/actions/actionIndex";

export default function StoreFilter(){
  const allStores = useSelector(state => state.allStores)
  const dispatch = useDispatch();

  useEffect(() => {
    !allStores.length && dispatch(getStores())
  }, [dispatch])

  const handleFilteredTicket = (e) => {
    dispatch(filterByStore(e.target.value));
  };

  const storesList = allStores.map((store, id) => {
    return (
      <option key={id} value={store.name}>
        {store.name}
      </option>
    );
  });

  return (
    <>
      <div>
        <h3>Almacenes</h3>
        <select
          onChange={(e) => handleFilteredTicket(e)}
        >
          <option hidden value={"Todos"}>Todos</option>
          {storesList}
        </select>
      </div>
    </>
  );
};

