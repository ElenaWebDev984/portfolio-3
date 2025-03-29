import {S} from './About_Styles.ts'
import {Container} from "../../../components/Container.tsx";
import {AboutGridWrapper} from "./AboutGridWrapper.tsx";



export const About = () => {
    return (
        <S.About>
            <Container>
                <S.AboutContent>
                    <S.AboutSectionTitle>About Me</S.AboutSectionTitle>
                    <S.AboutSectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</S.AboutSectionText>
                    <S.AboutSectionTitle>Work Experience</S.AboutSectionTitle>
                    <AboutGridWrapper positionText={'Junior Web Developer'} timeText={'Full Time'} officeText={'Dr. Rajkumar’s Learning App'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <AboutGridWrapper positionText={'Web Development Intern'} timeText={'Internship'} officeText={'IonPixelz Web Solutions'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <AboutGridWrapper positionText={'SEO / SEM Specialist'} timeText={'Internship'} officeText={'HAAPS'} locationText={'Bengaluru'} calendarText={'Sep 2021 - Dec 2021'} />
                    <S.AboutSectionTitle>Education</S.AboutSectionTitle>
                    <AboutGridWrapper positionText={'Bachelor in Electronics & Communication'} officeText={'Bangalore Instutute of Technology'} timeText={'Full Time'} locationText={'Bengaluru'} calendarText={'Aug 2015 - Dec 2020'}/>
                </S.AboutContent>
            </Container>
        </S.About>
    );
};




