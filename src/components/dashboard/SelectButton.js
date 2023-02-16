import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { yellow } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import BasicCard from "./BasicCard";
import ComboBox from "./ComboBox";

export default function SelectButton() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: yellow[500],
      "&:hover": {
        bgcolor: yellow[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, [users]);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setUsers(...users.push("A"));
      }, 2000);
    }
  };

  const userCards = users.map((user) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <BasicCard
          name="Pepito Pérez"
          email="pepe@lamedianaranja.com"
          store="Carabobo"
          coupons="8"
        />
      </Box>
    );
  });

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <ComboBox />
        <Box sx={{ m: 2, position: "relative" }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <PublishedWithChangesIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: yellow[500],
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {userCards}
      </Box>
    </Box>
  );
}
