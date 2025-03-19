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
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid ${theme.colors.accentFont2};
    border-radius: 100px;

    // position: relative;
    // z-index: 0;
    //
    // &::before {
    //     content: '';
    //     display: inline-block;
    //     min-width: 120%;
    //     //width: 84px;
    //     height: 24px;
    //     border-radius: 100px;
    //     border: 1px solid ${theme.colors.accentFont2};
    //
    //     position: absolute;
    //     //top: -3px;
    //     bottom: 0;
    //     z-index: -1;
    //     left: 50%;
    //     transform: translateX(-50%);
    // }
`