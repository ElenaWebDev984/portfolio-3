import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import * as React from "react";


export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return  <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

    ul {
        display: flex;
        gap: 40px;
    }
    
    a {
        color: ${theme.colors.linkNavFont};
    }
`