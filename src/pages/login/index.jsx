import { Grid } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState, useCallback } from "react";

import { ReactComponent as Logo } from "./logo.svg";
import { Container, GitHubButton } from "./style";

const firebaseConfig = {
  apiKey: "AIzaSyDYC9VfzWkwSxR9Ge3vScQCGVw3Opr16J8",
  authDomain: "reactzzaria-e4844.firebaseapp.com",
  projectId: "reactzzaria-e4844",
  storageBucket: "reactzzaria-e4844.appspot.com",
  messagingSenderId: "180684174259",
  appId: "1:180684174259:web:0decd9f8a46a918b5311c6",
  measurementId: "G-12NR86ZRD8",
};
firebase.initializeApp(firebaseConfig);

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
