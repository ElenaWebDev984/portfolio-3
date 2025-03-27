import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {items} from "../header/Header.tsx";
import {Container} from "../../components/Container.tsx";
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu.tsx";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <PseudoWrapper>
                    <Logo/>
                    <MenuContact/>
                </PseudoWrapper>
                <FlexWrapper justifyContent="space-between">
                    <DesktopMenu menuItems={items}/>
                    <Copyright>© 2025 Designed and built by <span>Elena</span> with <span>Love</span> & <span>Coffee</span></Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    margin: 120px 0 60px;
    
    @media ${theme.media.tablet} {
        margin: 60px 0;
    }
`

const Copyright = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 14})}
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

    @media ${theme.media.footer} {
        margin: 0 auto;
`

const PseudoWrapper = styled.div`
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