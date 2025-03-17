import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";

type IconPlusSpanDivPropsType = {
    iconId: string
    spanText: string
    width?: string
    height?: string
    viewBox?: string
}


export const IconPlusSpanDiv = (props: IconPlusSpanDivPropsType) => {
    return (
        <StyledIconPlusSpanDiv>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <SpanForIconPlusSpanDiv>{props.spanText}</SpanForIconPlusSpanDiv>
        </StyledIconPlusSpanDiv>
    );
};


const StyledIconPlusSpanDiv = styled.div`
    display: flex;
    text-align: center;
`

const SpanForIconPlusSpanDiv = styled.span`
    
`