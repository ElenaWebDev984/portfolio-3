import styled from "styled-components";

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

`

const AboutSmall = styled.small`

`