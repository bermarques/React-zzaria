import styled from "styled-components";
import { ReactComponent as MainLogo } from "../../images/logo.svg";
import {
  Toolbar as MaterialToolbar,
  Divider as MaterialDivider,
  Paper,
  Typography,
} from "@material-ui/core";

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`;

export const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

export const Content = styled.main`
  padding: 20px;
`;

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`;

export const PaperPizza = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pizza = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  position: relative;

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