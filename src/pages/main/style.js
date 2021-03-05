import styled from "styled-components";
import { ReactComponent as MainLogo } from "../../pages/login/logo.svg";


export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(MainLogo)`
    width: 200px;
    height: 50px;

    & path {
        fill: #fff
    }

    & line {
        stroke: #fff
    }
`