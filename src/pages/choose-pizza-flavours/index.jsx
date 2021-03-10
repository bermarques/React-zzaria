import { Card, Grid, Typography } from "@material-ui/core";
import { Redirect } from "react-router";
import Divider from "../../components/divider";
import PizzasGrid from "../../components/pizzas-grid/";
import Title from "../../components/title/";
import pizzaFlavours from "../../fake-data/pizzasFlavours";
import { HOME } from "../../routes";
import singularOrPlural from "../../utils/singularOrPlural";
import { Img, Label } from "./style";


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
              <Label>
                  <input type='checkbox' />
                <Img src={pizza.image} alt={pizza.name} />

                <Divider />

                <Typography>{pizza.name}</Typography>
                <Typography variant="h5">{pizza.value[id]}</Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
};

export default ChoosePizzaFlavours;
