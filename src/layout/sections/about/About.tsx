import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {AboutGridWrapper} from "./AboutGridWrapper.tsx";



export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutContent>
                    <AboutSectionTitle>About Me</AboutSectionTitle>
                    <AboutSectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutSectionText>
                    <AboutSectionTitle>Work Experience</AboutSectionTitle>
                    <AboutGridWrapper positionText={'Junior Web Developer'} timeText={'Full Time'} officeText={'Dr. Rajkumar’s Learning App'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <AboutGridWrapper positionText={'Web Development Intern'} timeText={'Internship'} officeText={'IonPixelz Web Solutions'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <AboutGridWrapper positionText={'SEO / SEM Specialist'} timeText={'Internship'} officeText={'HAAPS'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <AboutSectionTitle>Education</AboutSectionTitle>
                    <AboutGridWrapper positionText={'Bachelor in Electronics & Communication'} officeText={'Bangalore Instutute of Technology'} timeText={'Full Time'} locationText={'Bengaluru'} calendarText={'Aug 2015 - Dec 2020'}/>
                </AboutContent>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    //position: relative;
    //
    //&::after {
    //    content: '';
    //    width: 830px;
    //    height: 830px;
    //    top: 20%;
    //    left: 70%;
    //    transform: rotate(20deg);
    //    opacity: 0.5;
    //
    //
    //    background-image: url("../../../assets/images/pseudoAboutGradient.svg");
    //    background-size: cover;
    //    display: inline-block;
    //    position: absolute;
    //
    //    outline: 5px solid red;
    //    filter: brightness(0) invert(1) sepia(1) hue-rotate(180deg);
    //}
`

const AboutContent = styled.div`
    max-width: 710px;
`

const AboutSectionTitle = styled.h2`
    font-weight: 700;
    font-size: 42px;
    margin-bottom: 38px;
`

const AboutSectionText = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.linkNavFont};
    padding-bottom: 40px;
`



