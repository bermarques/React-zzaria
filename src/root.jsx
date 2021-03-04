import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import AuthProvider from "./contexts/auth";

const Root = () => {
  return (
    <AuthProvider>
      <CssBaseline>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </CssBaseline>
    </AuthProvider>
  );
};

export default Root;
