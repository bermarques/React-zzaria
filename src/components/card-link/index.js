import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CardLink = styled(CardActionArea).attrs({
    component: Link
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  `;

export default CardLink