import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import { Container } from "../../../components/Container.tsx";



export const Slogan = () => {
    return (
        <StyledSlogan>
           <Container>
               <FlexWrapper direction={'column'} alignItems={'center'} >
                   <StyledSloganText>More projects I’ve worked on:</StyledSloganText>
                   <ContactSlogan>@john-doe on github</ContactSlogan>
               </FlexWrapper>
           </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 58px;
`

const StyledSloganText = styled.p`
   
`

const ContactSlogan = styled.span`
    background: ${theme.colors.linearGradientFont};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
    margin-top: 10px;
`

