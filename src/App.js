import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import MainPage from "./pages/main";
import Login from "./pages/login";

function App() {
  return (
    <>
      <CssBaseline>
        
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              <MainPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </>
  );
}

export default App;
