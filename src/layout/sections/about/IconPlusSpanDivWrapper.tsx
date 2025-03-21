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
            <IconPlusSpanDiv iconId={'office-building'} spanText={props.spanTextBuilding} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} gap={'10px'}/>
            <IconPlusSpanDiv iconId={'location'} spanText={props.spanTextLocation} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} gap={'10px'}/>
            <IconPlusSpanDiv iconId={'calendar'} spanText={props.spanTextCalendar} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} gap={'10px'}/>
        </StyledIconPlusSpanDivWrapper>
    );
};

const StyledIconPlusSpanDivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`