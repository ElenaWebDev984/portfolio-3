import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

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



