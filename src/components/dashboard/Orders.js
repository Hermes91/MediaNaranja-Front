import { Divider } from "@mui/material";
import * as React from "react";
import SelectButton from "./SelectButton";
import Title from "./Title";

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Sorteo de ganadores</Title>
      <Divider />
      <SelectButton />
    </React.Fragment>
  );
}
