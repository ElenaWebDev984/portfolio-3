import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";



type LocationWrapperPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    locationText: string
}


export const LocationWrapper = (props: LocationWrapperPropsType) => {
    return (
        <StyledLocationWrapper>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <IconText>{props.locationText}</IconText>
        </StyledLocationWrapper>
    );
};


const StyledLocationWrapper = styled.div`
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