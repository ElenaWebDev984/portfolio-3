import {S} from './Footer_Styles.ts'
import {Logo} from "../../components/logo/Logo.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {items} from "../header/Header.tsx";
import {Container} from "../../components/Container.tsx";
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu.tsx";
import * as React from "react";


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.PseudoWrapper>
                    <Logo/>
                    <MenuContact/>
                </S.PseudoWrapper>
                <FlexWrapper justifyContent="space-between">
                    <DesktopMenu menuItems={items}/>
                    <S.Copyright>© 2025 Designed and built by <span>Elena</span> with <span>Love</span> & <span>Coffee</span></S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

