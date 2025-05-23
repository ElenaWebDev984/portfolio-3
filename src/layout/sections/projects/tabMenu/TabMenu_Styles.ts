import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme.ts";


const TabMenu = styled.nav`

    @media ${theme.media.mobile} {
        //display: none;
        
        ul {
            gap: 5px;
            margin-bottom: 20px;
        }
    }
`

const TabList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
`

const ListItem = styled.li`
    
`

export const Link = styled.a<{ active: boolean }>`
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: ${theme.colors.linkNavFont};
    padding: 10px;
    //height: 5px;
    cursor: pointer;

    &:hover {
        // background-color: ${theme.colors.accentFont2};
        border: 1px solid ${theme.colors.accentFont2};
         border-radius: 5px;
        transition: ${theme.animations.transition};
    }

    ${props => props.active && css<{ active: boolean }>`
        // border-bottom: 5px solid ${theme.colors.accentFont2};
        border: 1px solid ${theme.colors.accentFont2};
        border-radius: 5px;
    `}
`


export const S = {
    TabMenu,
    TabList,
    ListItem,
    Link,
}