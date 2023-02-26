import * as React from "react";
import moment from "moment/moment";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTickets } from "../../redux/actions/actionIndex";

export default function Chart() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.allTickets);
  const [ticket1, setTicket1] = React.useState({});
  const [ticket2, setTicket2] = React.useState({});
  const [ticket3, setTicket3] = React.useState({});
  const [ticket4, setTicket4] = React.useState({});
  const [ticket5, setTicket5] = React.useState({});
  const [ticket6, setTicket6] = React.useState({});
  const [ticket7, setTicket7] = React.useState({});

  useEffect(() => {
    !tickets.length && dispatch(getTickets());
    setTicket1(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(5, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket2(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(4, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket3(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(3, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket4(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(2, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket5(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(1, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket6(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().subtract(0, "days").format("YYYY-MM-DD")
        );
      })
    );
    setTicket7(
      tickets.filter((ticket) => {
        return (
          ticket.dateRegistro.slice(0, 10) ===
          moment().add(1, "days").format("YYYY-MM-DD")
        );
      })
    );
  }, [tickets, dispatch]);

  function createData(time, cupones) {
    return { time, cupones };
  }

  const daysAgo = [];
  for (let i = 6; i > 0; i--) {
    daysAgo[i] = moment().subtract(i, "days").format("DD/MM/YYYY");
  }
  daysAgo[0] = moment().add(1, "days").format("DD/MM/YYYY");

  const data = [];

  data.push(createData(daysAgo[6], ticket1.length));
  data.push(createData(daysAgo[5], ticket2.length));
  data.push(createData(daysAgo[4], ticket3.length));
  data.push(createData(daysAgo[3], ticket4.length));
  data.push(createData(daysAgo[2], ticket5.length));
  data.push(createData(daysAgo[1], ticket6.length));
  data.push(createData(daysAgo[0], ticket7.length));

  return (
    <React.Fragment>
      <Title>Cupones ingresados en la última semana</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.success,
                ...theme.typography.body1,
              }}
            >
              Cupones
            </Label>
          </YAxis>
          <Tooltip
            wrapperStyle={{ borderColor: "#E95725", color: "#E95725" }}
          />
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="cupones"
            stroke={theme.palette.secondary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
