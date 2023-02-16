import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Chart from "./Chart";
import Deposits from "./Deposits";
import RecentOrders from "./RecentOrders";
import Orders from "./Orders";
import Clients from "./Clients";
import Products from "./Products";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      light: "#F8C192",
      main: "#E95725",
      dark: "#FAB429",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#FAB429",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const [graphShow, setGraphShow] = useState(true);
  const [depositShow, setdepositShow] = useState(true);
  const [recentShow, setrecentShow] = useState(true);
  const [ordersShow, setordersShow] = useState(false);
  const [clientsShow, setClientsShow] = useState(false);
  const [productsShow, setproductsShow] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const graph = (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Chart />
      </Paper>
    </Grid>
  );

  const deposits = (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Deposits />
      </Paper>
    </Grid>
  );

  const recents = (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <RecentOrders />
      </Paper>
    </Grid>
  );

  const orders = (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Orders />
      </Paper>
    </Grid>
  );

  const clients = (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Clients />
      </Paper>
    </Grid>
  );

  const products = (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Products />
      </Paper>
    </Grid>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" color="primary" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              La Media Naranja - Sistema de sorteos
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton
              onClick={() => {
                setGraphShow(true);
                setdepositShow(true);
                setrecentShow(true);
                setordersShow(false);
                setClientsShow(false);
                setproductsShow(false);
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Tablero" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setGraphShow(false);
                setdepositShow(false);
                setrecentShow(false);
                setordersShow(false);
                setClientsShow(true);
                setproductsShow(false);
              }}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setGraphShow(false);
                setdepositShow(false);
                setrecentShow(false);
                setordersShow(true);
                setClientsShow(false);
                setproductsShow(false);
              }}
            >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Sorteo" />
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setGraphShow(false);
                setdepositShow(false);
                setrecentShow(false);
                setordersShow(false);
                setClientsShow(false);
                setproductsShow(false);
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItemButton>

            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              {graphShow && graph}
              {/* Recent Deposits */}
              {depositShow && deposits}
              {/* Recent Orders */}
              {recentShow && recents}
              {/* Orders */}
              {ordersShow && orders}
              {/* Clients */}
              {clientsShow && clients}
              {/* Products */}
              {productsShow && products}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
