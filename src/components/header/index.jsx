import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { Logo, LogoContainer, Toolbar } from "./style";

const Header = () => {
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
  );
};

export default Header;
