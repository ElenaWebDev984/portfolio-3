import {TextPlusSmallWrapper} from "./TextPlusSmallWrapper.tsx";
import styled from "styled-components";
import {IconPlusSpanDivWrapper} from "./IconPlusSpanDivWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

type AboutLocationWrapperPropsType = {
    text: string
    smallText: string
    spanTextBuilding: string
    spanTextLocation: string
    spanTextCalendar: string
}

export const AboutLocationWrapper = (props: AboutLocationWrapperPropsType) => {
    return (
        <StyledAboutLocationWrapper>
            <TextPlusSmallWrapper text={props.text} smallText={props.smallText} />
            <IconPlusSpanDivWrapper spanTextBuilding={props.spanTextBuilding} spanTextLocation={props.spanTextLocation} spanTextCalendar={props.spanTextCalendar}/>
        </StyledAboutLocationWrapper>
    );
};

const StyledAboutLocationWrapper = styled.div`

    &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.borderFooter};
        opacity: 30%;
        margin-top: 20px;
    }
`

