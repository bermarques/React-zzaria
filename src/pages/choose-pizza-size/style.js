import { Typography } from "@material-ui/core";
import styled from "styled-components";



export const Content = styled.main`
  padding: 20px;
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