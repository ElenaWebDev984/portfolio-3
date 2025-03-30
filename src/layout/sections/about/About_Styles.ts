import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {theme} from "../../../styles/Theme.ts";

const About = styled.section`
    position: relative;
    overflow: clip;

    &::after {
        content: '';
        width: 830px;
        height: 830px;
        top: 5%;
        left: 60%;
        transform: rotate(5deg);
        opacity: 0.5;

        background-image: url("./../../../../public/drawing.svg");
        background-size: cover;
        display: inline-block;
        position: absolute;
        z-index: 2;
        
        @media ${theme.media.tablet} {
            display: none;
        }
    }
`

const AboutContent = styled.div`
    position: relative;
    max-width: 710px;
`

const AboutSectionTitle = styled.h2`
    ${font({weight: 700, Fmax: 42, Fmin: 30})}
    margin-bottom: 38px;
`

const AboutSectionText = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 12})}
    color: ${theme.colors.linkNavFont};
    padding-bottom: 40px;
`

// AboutGridWrapper

const AboutGridWrapper = styled.div`
    margin-bottom: 50px;
    white-space: nowrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    
    position: relative;

    & > :first-child {
        grid-area: 1/1/2/3;
    }

    & > :nth-child(2) {
        grid-area: 1/3/2/4;
        justify-self: end;
    }

    & > :nth-child(3) {
        grid-area: 2/1/3/2;
        justify-self: start;
    }

    & > :nth-child(4) {
        grid-area: 2/2/3/3;
        justify-self: start;
    }

    & > :last-child {
        grid-area: 2/3/3/4;
        justify-self: end;
    }


    &::after {
        content: '';
        display: inline-block;
        left: 0;
        right: 0;
        bottom: -10px;
        height: 2px;
        background-color: ${theme.colors.borderFooter};
        opacity: 30%;
        position: absolute;
    }
    
    @media ${theme.media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;

        & > :first-child {
            grid-area: 1/1/2/2;
        }

        & > :nth-child(2) {
            grid-area: 1/2/2/3;
            justify-self: end;
        }

        & > :nth-child(3) {
            grid-area: 2/1/3/2;
            justify-self: start;
        }

        & > :nth-child(4) {
            grid-area: 3/1/4/2;
            justify-self: start;
        }

        & > :last-child {
            grid-area: 4/1/5/2;
            justify-self: start;
        }

    }
`

const Position = styled.p`
    color: ${theme.colors.linkNavFont};
    ${font({weight: 400, Fmax: 20, Fmin: 16})}
`

const Time = styled.small`
    ${font({weight: 600, Fmax: 9, Fmin: 8})}
    color: ${theme.colors.accentFont2};
    display: inline-block;
    padding: 10px;
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        display: inline-block;
        min-width: 100%;
        //width: 84px;
        height: 24px;
        border-radius: 100px;
        border: 1px solid ${theme.colors.accentFont2};

        position: absolute;
        bottom: 3px;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
    }
`

// LocationWrapper

const LocationWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const IconText = styled.span`
    color: ${theme.colors.linkNavFont};
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 1px;
    white-space: nowrap;
`



export const S = {
    About,
    AboutContent,
    AboutSectionTitle,
    AboutSectionText,
    AboutGridWrapper,
    Position,
    Time,
    LocationWrapper,
    IconText,
}