import { Card, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import pizzaSizes from '../../fake-data/pizzasSizes'
import {CHOOSE_PIZZA_FLAVOURS} from '../../routes'
import {
  Divider,
  Pizza,
  PizzasGrid,
  PizzaText,
  CardActionArea
} from "./style";
import Title from '../../components/title/'

const ChoosePizzaSize = () => {
  const { user } = useContext(AuthContext);
  const userName = user.displayName.split(" ")[0];

  const singularOrPlural = (amount, singular, plural) => {
    return amount === 1 ? singular : plural;
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Title variant="h3">O que vai ser hoje, {userName}?</Title>

        <Title variant="h4">Escolha o tamanho da pizza:</Title>

        <PizzasGrid>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs={12} sm={4}>
              <Card>
                <CardActionArea to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: pizza
                  }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />
                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours}{" "}
                  {singularOrPlural(pizza.flavours, "sabor", "sabores")}
                </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Grid>
    </>
  );
};



export default ChoosePizzaSize;
