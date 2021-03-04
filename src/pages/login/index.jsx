import { Grid } from "@material-ui/core";
import { useEffect, useState, useCallback } from "react";
import firebase from '../../services/firebase'
import { ReactComponent as Logo } from "./logo.svg";
import { Container, GitHubButton } from "./style";



const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user)
      setUser(user)
    });
  });

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      setIsUserLoggedIn(false)
      setUser(null)
    })
  }, [])

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          {isUserLoggedIn && (
            <>
              <pre>{user?.displayName}</pre>
              <button onClick={logout}>sair</button>
            </>
          )}

          {!isUserLoggedIn && (
            <GitHubButton
              onClick={login}
            >
              Entrar com GitHub
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
