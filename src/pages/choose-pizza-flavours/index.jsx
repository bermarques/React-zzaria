import { Card, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router";
import Divider from "../../components/divider";
import PizzasGrid from "../../components/pizzas-grid/";
import Title from "../../components/title/";
import pizzaFlavours from "../../fake-data/pizzasFlavours";
import { HOME } from "../../routes";
import singularOrPlural from "../../utils/singularOrPlural";
import { Img, Label } from "./style";


const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))


  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const howMuchFlavours = location.state.flavours;
  const { id } = location.state;

  const checkboxesChecked = (checkboxes) => {
    return Object.values(checkboxes).filter(Boolean)
  }
  
  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (checkboxesChecked(checkboxes).length === howMuchFlavours && e.target.checked === true) {
      return
    }
    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

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
                  <input
                   type='checkbox'
                   checked={!!checkboxes[pizza.id]}
                   onChange={handleChangeCheckbox(pizza.id)}
                   />
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
