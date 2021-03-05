import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
  withStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useContext, useState } from "react";
import {
  PaperPizza,
  Content,
  Divider,
  Logo,
  LogoContainer,
  Toolbar,
  Pizza,
  PizzaText,
} from "./style";
import { AuthContext } from "../../contexts/auth";

const MainPage = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const userName = user.displayName.split(" ")[0];
  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography>Olá {userName} =)</Typography>
          <IconButton color="inherit" onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>

          <Menu
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h3" gutterBottom>
            O que vai ser hoje, {userName}?
          </Typography>

          <Typography variant="h4" gutterBottom>
            Escolha o tamanho da pizza:
          </Typography>

          <Grid container spacing={2}>
            {pizzaSizes.map((pizza) => (
              <Grid item key={pizza.id} xs={4}>
                <PaperPizza>
                  <Pizza>
                    <PizzaText>{pizza.size}cm</PizzaText>
                  </Pizza>

                  <Divider />
                  <Typography variant="h5">{pizza.name}</Typography>
                  <Typography>
                    {pizza.slices} fatias, {pizza.flavours} sabores
                  </Typography>
                </PaperPizza>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

const pizzaSizes = [
  {
    id: 0,
    name: "Pequena",
    size: 28,
    slices: 2,
    flavours: 1,
  },
  {
    id: 1,
    name: "Média",
    size: 30,
    slices: 6,
    flavours: 2,
  },
  {
    id: 2,
    name: "Grande",
    size: 32,
    slices: 8,
    flavours: 3,
  },
];

const style = (theme) => {
  return {
    main: theme.mixins.toolbar,
  };
};

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main}></div>
));
export default MainPage;
