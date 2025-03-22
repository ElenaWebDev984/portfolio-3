import styled from "styled-components";

type GridWrapperPropsType = {
    justifyItems?: string
    gridTemplateColumns?: string
    rowGap?: string
    columnGap?: string
    gap?: string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns || undefined};
    justify-items: ${props => props.justifyItems || undefined};
    row-gap: ${props => props.rowGap || undefined};
    column-gap: ${props => props.columnGap || undefined};
    gap: ${props => props.gap || undefined};
    
    
    //grid-template-columns: repeat(6, 1fr);
    //justify-items: center;
    //row-gap: 80px;
`