import styled from "styled-components";
import {
  Divider as MaterialDivider,
  Typography,
  Grid,
  CardActionArea as MaterialCardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";



export const Content = styled.main`
  padding: 20px;
`;

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 20px;
`

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`;

export const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Pizza = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: "";
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`;

export const PizzaText = styled(Typography).attrs({
    variant: 'h5'
})`
 height: 80px;
 width: 80px;
 border-radius: 50%;
 background: #fff;
 display: flex;
 justify-content: center;
 align-items: center; 
 position: relative;
 z-index: 1;
`