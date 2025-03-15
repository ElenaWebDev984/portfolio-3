import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {items} from "../header/Header.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
           <FlexWrapper justifyContent="space-between">
               <Logo/>
               <MenuContact/>
           </FlexWrapper>
            <FlexWrapper justifyContent="space-between">
                <Menu menuItems={items}/>
                <StyledFooterText>© 2025 Designed and built by <span>Elena</span> with <span>Love</span> & <span>Coffee</span></StyledFooterText>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
`

const StyledFooterText = styled.p`

`