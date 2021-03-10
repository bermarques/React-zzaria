import { Card, Grid, Typography } from "@material-ui/core";
import { Redirect } from "react-router";
import Title from "../../components/title/";
import PizzasGrid from "../../components/pizzas-grid/";
import Divider from "../../components/divider";
import singularOrPlural from "../../utils/singularOrPlural";
import { HOME } from "../../routes";
import pizzaFlavours from "../../fake-data/pizzasFlavours";

import { Img } from "./style";

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const howMuchFlavours = location.state.flavours;
  const { id } = location.state;

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Title variant="h4">
          Escolha até {howMuchFlavours}{" "}
          {singularOrPlural(howMuchFlavours, "sabor", "sabores")}:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs={12} sm={4}>
            <Card>
              <Img src={pizza.image} alt={pizza.name} />

              <Divider />

              <Typography>{pizza.name}</Typography>
              <Typography variant="h5">{pizza.value[id]}</Typography>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
};

export default ChoosePizzaFlavours;
