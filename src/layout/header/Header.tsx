import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";


export const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

// export const icons = [
//     { iconId: 'github-contacts' },
//     { iconId: 'linkedin' },
//     { iconId: 'telegram' },
// ]


export const Header = () => {
    return (
        <StyledHeader>
            <H1>Web Developer, React Developer, Frontend Developer, 2 years, Portfolio, UI/UX Designer, Web Development, Responsive Design, JavaScript, React, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Figma, Adobe XD, User Experience, User Interface, Cross-Browser Compatibility, Version Control (Git), GitHub Pages Agile Methodologies, RESTful APIs, Mobile-First Design, Performance Optimization, SEO Best Practices, Accessibility (a11y), Wireframe, Prototyping, Graphic Design, Animation, CSS Preprocessors (Sass, Less), Frontend Frameworks</H1>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    {/*<MenuContact menuIcons={icons}/>*/}
                    <MenuContact />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
`

const H1 = styled.h1`
    display: none;
`

// TODO in h1 to do for SEO (web developer, react developer, frontend developer, 2 years...)
