import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import { Container } from "../../../components/Container.tsx";
import {font} from "../../../styles/Common.ts";
import * as React from "react";



export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
           <Container>
               <FlexWrapper direction={'column'} alignItems={'center'} >
                   <SloganText>More projects I’ve worked on: <span>@john-doe on github</span></SloganText>
               </FlexWrapper>
           </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    ${font({family: "'DM Sans', sans-serif", weight: 700, Fmax: 58, Fmin: 32})}
    text-align: center;
`

const SloganText = styled.p`
   
    span {
        background: ${theme.colors.linearGradientFont};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
        margin-top: 10px;
        white-space: nowrap;
    }
`

