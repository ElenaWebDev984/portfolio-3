import styled from "styled-components";

type FlexWrapperGridPropsType = {
    justifyContent?: string
    alignItems?: string
    gap?: string
}

export const FlexWrapperGrid = styled.div<FlexWrapperGridPropsType>`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${props => props.gap || undefined};
    justify-content: ${props => props.justifyContent || undefined};
    align-items: ${props => props.alignItems || undefined};
`