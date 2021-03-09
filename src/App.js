import LinearProgress from "@material-ui/core/LinearProgress";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import firebase from "./services/firebase";

import { HOME, LOGIN} from './routes'

const MainPage = lazy(() => import("./pages/main/"));
const Login = lazy(() => import("./pages/login/"));

const App = ({ location }) => {
  const { setIsUserLoggedIn, setUser, isUserLoggedIn } = useContext(
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
  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />;
  } else if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to= {LOGIN} />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
