import styled from "styled-components";
import {AboutLocationWrapper} from "./AboutLocationWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
               <AboutContent>
                   <AboutSectionTitle>About Me</AboutSectionTitle>
                   <AboutSectionText>The Generator App is an online tool that helps you to export ready-made templates ready to
                       work as your future website. It helps you to combine slides, panels and other components and export it
                       as a set of static files: HTML/CSS/JS.</AboutSectionText>

                   <AboutSectionTitle>Work Experience</AboutSectionTitle>
                   <AboutLocationWrapper text={'Junior Web Developer'} smallText={'Full Time'}
                                         spanTextOffice={'Dr. Rajkumar’s Learning App'} spanTextLocation={'Bengaluru'}
                                         spanTextCalendar={'Sep 2021 - Dec 2021'}/>
                   <AboutLocationWrapper text={'Web Development Intern'} smallText={'Internship'}
                                         spanTextOffice={'IonPixelz Web Solutions'} spanTextLocation={'Bengaluru'}
                                         spanTextCalendar={'Sep 2021 - Dec 2021'}/>
                   <AboutLocationWrapper text={'SEO / SEM Specialist'} smallText={'Internship'}
                                         spanTextOffice={'HAAPS'} spanTextLocation={'Bengaluru'}
                                         spanTextCalendar={'Sep 2021 - Dec 2021'}/>

                   <AboutSectionTitle>Education</AboutSectionTitle>
                   <AboutLocationWrapper text={'Bachelor in Electronics & Communication'} smallText={'Full Time'}
                                         spanTextOffice={'Bachelor in Electronics & Communication'}
                                         spanTextLocation={'Bengaluru'} spanTextCalendar={'Aug 2015 - Dec 2020'}/>
               </AboutContent>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`

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



