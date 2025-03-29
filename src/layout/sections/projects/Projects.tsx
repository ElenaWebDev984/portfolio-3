import {S} from './Projects_Styles.ts'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Project} from "./project/Project.tsx";
import projectImg1 from '../../../assets/images/proj1.webp';
import projectImg2 from '../../../assets/images/proj2.webp';
import projectImg3 from '../../../assets/images/proj3.webp';
import projectImg4 from '../../../assets/images/proj4.webp';
import projectImg5 from '../../../assets/images/proj5.webp';
import projectImg6 from '../../../assets/images/proj6.webp';
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {GridWrapper} from "../../../components/GridWrapper.tsx";
import * as React from "react";


export const tabItems = ['All', 'HTML', 'JavaScript', 'SASS', 'React',]

const projectData = [
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg1,
        alt: 'project1',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg2,
        alt: 'project2',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg3,
        alt: 'project3',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg4,
        alt: 'project4',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg5,
        alt: 'project5',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg6,
        alt: 'project6',
    },
]

// export const stackItems = ['HTML', 'JavaScript', 'SASS', 'React',]


export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu menuItems={tabItems}/>
                <GridWrapper gridTemplateColumns={'repeat(3, 1fr)'} gap={'60px 35px'} justifyItems={'center'}>
                    {projectData.map((project)=> {
                        return  <Project title={project.title} text={project.text} src={project.src} alt={project.alt} />
                    })}
                </GridWrapper>
            </Container>
        </S.Projects>
    );
};



