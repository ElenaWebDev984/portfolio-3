import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import * as React from "react";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from './Header_Styles.ts'


export const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

// export const links = [
//     {iconId: 'github-contacts', href: '#', width: '30', height: '30', viewBox: '0 0 30 30'},
//     {iconId: 'linkedin', href: '#', width: '30', height: '30', viewBox: '0 0 30 30'},
//     {iconId: 'telegram', href: '#', width: '30', height: '30', viewBox: '0 0 30 30'},
// ]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    // const breakpoint = 768;
    const breakpoint = 200;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <S.H1>Web Developer, React Developer, Frontend Developer, 2 years, Portfolio, UI/UX Designer, Web Development, Responsive Design, JavaScript, React, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Figma, Adobe XD, User Experience, User Interface, Cross-Browser Compatibility, Version Control (Git), GitHub Pages Agile Methodologies, RESTful APIs, Mobile-First Design, Performance Optimization, SEO Best Practices, Accessibility (a11y), Wireframe, Prototyping, Graphic Design, Animation, CSS Preprocessors (Sass, Less), Frontend Frameworks</S.H1>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}

                    <MenuContact />
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};




