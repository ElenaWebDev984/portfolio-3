import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type TextPlusSmallWrapperPropsType = {
    text: string
    smallText: string
}


export const TextPlusSmallWrapper = (props: TextPlusSmallWrapperPropsType) => {
    return (
        <StyledTextPlusSmallWrapper>
            <AboutText>{props.text}</AboutText>
            <AboutSmall>{props.smallText}</AboutSmall>
        </StyledTextPlusSmallWrapper>
    );
};


const StyledTextPlusSmallWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AboutText = styled.p`
    color: ${theme.colors.linkNavFont};
    font-weight: 400;
    font-size: 20px;
`

const AboutSmall = styled.small`
    font-weight: 600;
    font-size: 9px;
    color: ${theme.colors.accentFont2};
`