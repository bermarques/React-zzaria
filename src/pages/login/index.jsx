import { Grid } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import { Container, GitHubButton } from "./style";

const Login = () => {
  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item >
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          <GitHubButton>Entrar com GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
