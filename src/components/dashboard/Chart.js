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
} from "recharts";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTickets } from "../../redux/actions/actionIndex";

function createData(time, amount) {
  return { time, amount };
}

const daysAgo = [];
for (let i = 0; i < 7; i++) {
  daysAgo[i] = moment().subtract(i, "days").format("DD/MM/YYYY");
}

const data = [];

for (let i = 0; i < 7; i++) {
  data.push(createData(daysAgo[i], 10 + i * 2));
}

export default function Chart() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.allTickets);

  useEffect(() => {
    !tickets.length && dispatch(getTickets());
  }, [tickets, dispatch]);

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
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.secondary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
