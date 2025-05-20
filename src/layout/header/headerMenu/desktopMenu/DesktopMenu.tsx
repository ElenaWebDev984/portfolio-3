import {S} from './../HeaderMenu_Styles.ts'
import * as React from "react";
import {Menu, MenuProps} from "../menu/Menu.tsx";




export const DesktopMenu: React.FC<MenuProps> = ({menuItems}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems} />
        </S.DesktopMenu>
    );
};


