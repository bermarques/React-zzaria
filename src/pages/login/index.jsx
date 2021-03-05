import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Container, GitHubButton } from "./style";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          <GitHubButton onClick={login}>Entrar com GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
