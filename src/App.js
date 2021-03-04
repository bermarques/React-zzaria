import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import { lazy, Suspense  } from "react";

// import MainPage from "./pages/main";
// import Login from "./pages/login";

const MainPage = lazy(() => import('./pages/main/'))
const Login = lazy(() => import('./pages/login/'))

const App = () => {
  return (
    <>
      <CssBaseline>
        
        <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route component={MainPage} />
          </Switch>
        </Suspense>
        </BrowserRouter>
      </CssBaseline>
    </>
  );
}

export default App