import styled from "styled-components";
import {IconPlusSpanDiv} from "../../../components/IconPlusSpanDiv.tsx";

type IconPlusSpanDivWrapperPropsType = {
    spanTextBuilding: string
    spanTextLocation: string
    spanTextCalendar: string
}

export const IconPlusSpanDivWrapper = (props: IconPlusSpanDivWrapperPropsType) => {
    return (
        <StyledIconPlusSpanDivWrapper>
            <IconPlusSpanDiv iconId={'office-building'} spanText={props.spanTextBuilding} />
            <IconPlusSpanDiv iconId={'location'} spanText={props.spanTextLocation} />
            <IconPlusSpanDiv iconId={'calendar'} spanText={props.spanTextCalendar} />
        </StyledIconPlusSpanDivWrapper>
    );
};

const StyledIconPlusSpanDivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`