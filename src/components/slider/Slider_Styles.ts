import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
`

const Pagination = styled.div`
    
    span {
        display: inline-block;
        background-color: ${theme.colors.linkNavFont};
        width: 7px;
        height: 7px;
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.accentFont2};
            width: 20px;
        }
    }
`


export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}