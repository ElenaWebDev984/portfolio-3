import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]


export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                <Logo/>
                <Menu menuItems={items}/>
                <MenuContact/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

`

