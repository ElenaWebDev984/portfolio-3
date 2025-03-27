import {MobileMenuContact} from "./MobileMenuContact.tsx";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {S} from './../HeaderMenu_Styles.ts'
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={true}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={true}>
                <FlexWrapper direction="column" justifyContent={'center'} alignItems={'center'} gap={'50px'}>
                    <Menu menuItems={props.menuItems}/>
                    <MobileMenuContact/>
                </FlexWrapper>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


