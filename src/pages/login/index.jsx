import { Grid } from "@material-ui/core";
import firebase from 'firebase/app'
import 'firebase/auth'

import { ReactComponent as Logo } from "./logo.svg";
import { Container, GitHubButton } from "./style";

let firebaseConfig = {
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
  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          <GitHubButton onClick={() => {
            const provider = new firebase.auth.GithubAuthProvider()
            firebase.auth().signInWithRedirect(provider)
          }}>Entrar com GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
