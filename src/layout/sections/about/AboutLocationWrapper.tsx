import {TextPlusSmallWrapper} from "./TextPlusSmallWrapper.tsx";
import styled from "styled-components";
import {IconPlusSpanDivWrapper} from "./IconPlusSpanDivWrapper.tsx";

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

`

