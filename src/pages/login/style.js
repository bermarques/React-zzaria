import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const GitHubButton = styled(Button).attrs({
  variant: "contained",
  fullWidth: true,
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`;
