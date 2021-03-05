import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import AuthProvider from "./contexts/auth";

const theme = createMuiTheme();

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline>
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </CssBaseline>
      </AuthProvider>
    </MuiThemeProvider>
  );
};

export default Root;
