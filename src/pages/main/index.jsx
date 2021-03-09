import { withStyles } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/header";
import { Content } from "./style";
import { HOME, CHOOSE_PIZZA_FLAVOURS } from "../../routes";
const ChoosePizzaSize = lazy(() => import("../choose-pizza-size"));
const ChoosePizzaFlavours = lazy(() => import("../choose-pizza-flavours"));

const MainPage = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback="<h2>Carregando...</h2>">
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route
            path={CHOOSE_PIZZA_FLAVOURS}
            exact
            component={ChoosePizzaFlavours}
          />
        </Switch>
      </Suspense>
    </Content>
  </>
);

const style = (theme) => {
  return {
    main: theme.mixins.toolbar,
  };
};

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main}></div>
));
export default MainPage;
