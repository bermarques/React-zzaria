import { Grid } from "@material-ui/core";
import Title from '../../components/title/'
const ChoosePizzaFlavours = ({ location }) => {

  return (
    <Grid container direction="column" alignItems="center">
      <Title variant="h4">Escolha até dois sabores:</Title>
    </Grid> 
  );
};

export default ChoosePizzaFlavours;
