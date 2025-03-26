import styled from "styled-components";
import {font} from "../styles/Common.ts";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    ${font({weight: 700, Fmax: 48, Fmin: 30})}
    margin-bottom: 50px;
    
    @media ${theme.media.mobile} {
        margin-bottom: 40px;
    }
`