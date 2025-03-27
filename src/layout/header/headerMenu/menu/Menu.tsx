import * as React from "react";
import {S} from './../HeaderMenu_Styles.ts'


export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MenuList>
            {props.menuItems.map((item, index) => {
                return  <S.MenuListItem key={index}>
                    <S.MenuLink href="">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.MenuLink>
                </S.MenuListItem>
            })}
        </S.MenuList>
    );
};
