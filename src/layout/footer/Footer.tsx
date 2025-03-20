import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {items} from "../header/Header.tsx";
import {Container} from "../../components/Container.tsx";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu.tsx";
import {theme} from "../../styles/Theme.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <DivPseudoWrapper>
                    <Logo/>
                    <MenuContact/>
                </DivPseudoWrapper>
                <FlexWrapper justifyContent="space-between">
                    <HeaderMenu menuItems={items}/>
                    <StyledFooterText>© 2025 Designed and built
                        by <span>Elena</span> with <span>Love</span> & <span>Coffee</span></StyledFooterText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    margin: 120px 0 60px;
`

const StyledFooterText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: ${theme.colors.linkNavFont};

    span {
        background: ${theme.colors.linearGradientFont};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
    }
`

const DivPseudoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 75px;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.borderFooter};
        opacity: 30%;
        top: 85px;
    }
`