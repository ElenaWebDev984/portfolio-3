import {theme} from "../styles/Theme.ts";
import {BtnAnimation, BtnAnimationOut} from "../styles/animations/Animations.tsx";
import styled from "styled-components";

type ButtonPropsType = {
    width?: string
    height?: string
    padding?: string
    marginBottom?: string
    btnType?: 'primary' | 'outlined'
}


export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width || undefined};
    height: ${props => props.height || undefined};
    padding: ${props => props.padding || undefined};
    margin-bottom: ${props => props.marginBottom || undefined};
    background-image: ${theme.colors.linearGradientFont};
    color: ${theme.colors.h2h3Font};
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;

    &:hover {
        box-shadow: 40px 0 100px ${theme.colors.accentFont}, -40px 0 100px ${theme.colors.accentFont2};
        animation: ${BtnAnimation} 2s ease-in-out;
    }

    &:not(:hover) {
        animation: ${BtnAnimationOut} 2s ease-in-out;
    } 
`

// width={'150px'} height={'40px'}
// padding={'8px 16px'}