import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Logo, LogoContainer } from "./style";

const MainPage = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography>Olá João!</Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

          <Menu>
            <MenuItem>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainPage;
