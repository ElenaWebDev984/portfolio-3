
import styled from "styled-components";
import {LocationWrapper} from "./LocationWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";


type AboutGridWrapperPropsType = {
    positionText: string
    timeText: string
    officeText: string
    locationText: string
    calendarText: string
}


export const AboutGridWrapper = (props: AboutGridWrapperPropsType) => {
    return (
        <StyledAboutGridWrapper>
            <Position>{props.positionText}</Position>
            <Time>{props.timeText}</Time>
            <LocationWrapper locationText={props.officeText}  iconId={'office-building'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
            <LocationWrapper locationText={props.locationText} iconId={'location'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
            <LocationWrapper locationText={props.calendarText} iconId={'calendar'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
        </StyledAboutGridWrapper>
    );
};



const StyledAboutGridWrapper = styled.div`
    margin-bottom: 50px;
    white-space: nowrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

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
        width: 320%;
        height: 2px;
        background-color: ${theme.colors.borderFooter};
        opacity: 30%;
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
        //top: -3px;
        bottom: 0;
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
    }
`