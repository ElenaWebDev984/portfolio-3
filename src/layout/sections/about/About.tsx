import styled from "styled-components";
import {AboutLocationWrapper} from "./AboutLocationWrapper.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutSectionTitle>About Me</AboutSectionTitle>
            <AboutSectionText>The Generator App is an online tool that helps you to export ready-made templates ready to
                work as your future website. It helps you to combine slides, panels and other components and export it
                as a set of static files: HTML/CSS/JS.</AboutSectionText>

            <AboutSectionTitle>Work Experience</AboutSectionTitle>
            <AboutLocationWrapper text={'Junior Web Developer'} smallText={'Full Time'}
                                  spanTextBuilding={'Dr. Rajkumar’s Learning App'} spanTextLocation={'Bengaluru'}
                                  spanTextCalendar={'Sep 2021 - Dec 2021'}/>
            <AboutLocationWrapper text={'Web Development Intern'} smallText={'Internship'}
                                  spanTextBuilding={'IonPixelz Web Solutions'} spanTextLocation={'Bengaluru'}
                                  spanTextCalendar={'Sep 2021 - Dec 2021'}/>
            <AboutLocationWrapper text={'SEO / SEM Specialist'} smallText={'Internship'}
                                  spanTextBuilding={'SEO / SEM Specialist'} spanTextLocation={'Bengaluru'}
                                  spanTextCalendar={'Sep 2021 - Dec 2021'}/>

            <AboutSectionTitle>Education</AboutSectionTitle>
            <AboutLocationWrapper text={'Bachelor in Electronics & Communication'} smallText={'Full Time'}
                                  spanTextBuilding={'Bachelor in Electronics & Communication'}
                                  spanTextLocation={'Bengaluru'} spanTextCalendar={'Aug 2015 - Dec 2020'}/>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`

`

const AboutSectionTitle = styled.h2`

`

const AboutSectionText = styled.p`

`



