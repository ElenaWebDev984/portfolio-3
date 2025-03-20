import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type ButtonPropsType = {
    width?: string
    height?: string
    padding?: string
    marginBottom?: string
}


export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width || undefined};
    height: ${props => props.height || undefined};
    padding: ${props => props.padding || undefined};
    margin-bottom: ${props => props.marginBottom || undefined};
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    background-image: ${theme.colors.linearGradientFont};
    color: ${theme.colors.h2h3Font};
    border-radius: 5px;
    white-space: nowrap;
`