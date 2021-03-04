import LinearProgress from "@material-ui/core/LinearProgress";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const MainPage = lazy(() => import("./pages/main/"));
const Login = lazy(() => import("./pages/login/"));

const App = () => {
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
