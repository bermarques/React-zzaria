import { withStyles } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "../../components/header";
import {
  Content
} from "./style";
const ChoosePizzaSize = lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = lazy(() => import('../choose-pizza-flavours'))

const MainPage = () => (
  <>
      <Header />

      <Spacer />
      
      <Content>
        <Suspense fallback="<h2>Carregando...</h2>">
          <Switch>
            <Route path='/' exact component={ChoosePizzaSize} />
            <Route path='/sabores-da-pizza' exact component={ChoosePizzaFlavours} />
          </Switch>
        </Suspense>
      </Content>

        
    </>
  )



const style = (theme) => {
  return {
    main: theme.mixins.toolbar,
  };
};

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main}></div>
));
export default MainPage;
