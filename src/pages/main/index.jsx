import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Logo, LogoContainer, Toolbar } from "./style";
import { AuthContext } from "../../contexts/auth";

const MainPage = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const { user, logout } = useContext(AuthContext);

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

          <Typography>Olá {user.displayName.split(' ')[0]} =)</Typography>
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
    </>
  );
};

export default MainPage;
