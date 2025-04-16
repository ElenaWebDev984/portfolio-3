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
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {GridWrapper} from "../../../components/GridWrapper.tsx";
import * as React from "react";
import {useState} from "react";

const tabItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: 'All',
        status: 'all',
    },
    {
        title: 'HTML',
        status: 'HTML',
    },
    {
        title: 'JavaScript',
        status: 'JavaScript',
    },
    {
        title: 'SASS',
        status: 'SASS',
    },
    {
        title: 'React',
        status: 'React',
    },
]

const projectsData = [
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg1,
        alt: 'project1',
        type: 'HTML',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg2,
        alt: 'project2',
        type: 'SASS',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg3,
        alt: 'project3',
        type: 'JavaScript',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg4,
        alt: 'project4',
        type: 'JavaScript',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg5,
        alt: 'project5',
        type: 'React',
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: projectImg6,
        alt: 'project6',
        type: 'React',
    },
]


export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredProjects = projectsData

    if(currentFilterStatus === 'HTML') {
        filteredProjects = projectsData.filter(project => project.type === 'HTML')
    }
    if(currentFilterStatus === 'JavaScript') {
        filteredProjects = projectsData.filter(project => project.type === 'JavaScript')
    }
    if(currentFilterStatus === 'SASS') {
        filteredProjects = projectsData.filter(project => project.type === 'SASS')
    }
    if(currentFilterStatus === 'React') {
        filteredProjects = projectsData.filter(project => project.type === 'React')
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }


    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu tabItems={tabItems} changeFilterStatus={changeFilterStatus}
                currentFilterStatus={currentFilterStatus}/>
                <GridWrapper gridTemplateColumns={'repeat(3, 1fr)'} gap={'60px 35px'} justifyItems={'center'}>
                    {filteredProjects.map((project)=> {
                        return  <Project title={project.title} text={project.text} src={project.src} alt={project.alt} />
                    })}
                </GridWrapper>
            </Container>
        </S.Projects>
    );
};



