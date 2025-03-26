import {theme} from "../styles/Theme.ts";
import styled from "styled-components";

type BtnGradientPropsType = {
    width?: string
    height?: string
    padding?: string
    marginBottom?: string
    btnType?: 'primary' | 'outlined'
}


export const BtnGradient = styled.button<BtnGradientPropsType>`
    width: ${props => props.width || undefined};
    height: ${props => props.height || undefined};
    padding: ${props => props.padding || undefined};
    margin-bottom: ${props => props.marginBottom || undefined};
        // background-image: ${theme.colors.linearGradientFont};
    color: ${theme.colors.h2h3Font};
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primaryBgc};

    &::after {
        content: '';
        position: absolute;
        height: 107%;
        width: 102%;
        border-radius: 5px;
        background-image: ${theme.colors.linearGradientFont};
        z-index: -1;
    }

    &:hover {
        z-index: 0;
        box-shadow: 40px 0 100px ${theme.colors.accentFont}, -40px 0 100px ${theme.colors.accentFont2};
        transform: translateY(-4px);
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`