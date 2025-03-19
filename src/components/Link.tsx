import {theme} from "../styles/Theme.ts";
import styled from "styled-components";

export const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: ${theme.colors.linkNavFont};
    padding: 10px;
    // border: 1px solid ${theme.colors.accentFont2};
    
    &:hover {
        background-color: ${theme.colors.accentFont2};
    }
`