import { Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import {
  Divider,
  PaperPizza,
  Pizza,
  PizzasGrid,
  PizzaText,
  Title,
} from "./style";

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
              <PaperPizza>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />
                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours}{" "}
                  {singularOrPlural(pizza.flavours, "sabor", "sabores")}
                </Typography>
              </PaperPizza>
            </Grid>
          ))}
        </PizzasGrid>
      </Grid>
    </>
  );
};

const pizzaSizes = [
  {
    id: 0,
    name: "Pequena",
    size: 28,
    slices: 2,
    flavours: 1,
  },
  {
    id: 1,
    name: "Média",
    size: 30,
    slices: 6,
    flavours: 2,
  },
  {
    id: 2,
    name: "Grande",
    size: 32,
    slices: 8,
    flavours: 3,
  },
];

export default ChoosePizzaSize;
