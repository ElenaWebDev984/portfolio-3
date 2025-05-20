import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import * as React from "react";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from './Header_Styles.ts'

export type MenuItemType = {
    title: string
    href: string
}

export const items: MenuItemType[] = [
    {title: "Home", href: "home"},
    {title: "About", href: "about"},
    {title: "Tech Stack", href: "techStack"},
    {title: "Projects", href: "projects"},
    {title: "Contact", href: "contact"},
]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                    <Logo/>
                    {width < breakpoint
                        ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>
                    }
                    <MenuContact />
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};