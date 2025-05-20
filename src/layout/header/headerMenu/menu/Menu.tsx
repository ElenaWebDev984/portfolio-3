import * as React from "react";
import {S} from './../HeaderMenu_Styles.ts'
import {MenuItemType} from "../../Header.tsx";


export type MenuProps = {
    menuItems: MenuItemType[]
}

export const Menu: React.FC<MenuProps> = ({menuItems}) => {
    return (
        <S.MenuList>
            {menuItems.map((item, index) => (
                <S.MenuListItem key={index}>
                    <S.MenuLink
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.MenuLink>
                </S.MenuListItem>
            ))}
        </S.MenuList>
    );
};