import LinearProgress from "@material-ui/core/LinearProgress";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import firebase from "./services/firebase";

const MainPage = lazy(() => import("./pages/main/"));
const Login = lazy(() => import("./pages/login/"));

const App = ({ location }) => {
  const { setIsUserLoggedIn, setUser, isUserLoggedIn, logout } = useContext(
    AuthContext
  );
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
      setUser(user);
      setDidCheckUserIn(true);
    });
  });

  if (!didCheckUserIn) {
    return <LinearProgress />;
  }
  if (isUserLoggedIn && location.pathname === "/login") {
    return <Redirect to="/" />;
  } else if (!isUserLoggedIn && location.pathname !== "/login") {
    return <Redirect to="/login" />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
