import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionText = styled.p`
    text-align: center;
    ${font({weight: 400, Fmax: 32, Fmin: 22})}
    color: ${theme.colors.linkNavFont};
    margin-bottom: 100px;

    @media ${theme.media.mobile} {
        margin-bottom: 60px;
    }
`