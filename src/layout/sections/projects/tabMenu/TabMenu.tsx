import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type TabMenuPropsType = {
    gap?: string
    marginBottom?: string
}

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <TabList>
                {props.menuItems.map((item, index) => {
                    return  <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </TabList>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav<TabMenuPropsType>`

    @media ${theme.media.mobile} {
        display: none;
    }
`

const TabList = styled.ul<TabMenuPropsType>`
    display: flex;
    justify-content: center;
    gap: ${props => props.gap || '20px'};
    margin-bottom: ${props => props.marginBottom || '40px'};
    // TODO change gap and margin-bottom with props
`

const ListItem = styled.li`
    
`

export const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: ${theme.colors.linkNavFont};
    padding: 10px;
    // border: 1px solid ${theme.colors.accentFont2};
    // border-radius: 5px;
    
    &:hover {
        background-color: ${theme.colors.accentFont2};
    }
`



