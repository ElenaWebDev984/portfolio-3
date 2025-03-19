import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import projectImg1 from '../../../assets/images/proj1.webp';
import projectImg2 from '../../../assets/images/proj2.webp';
import projectImg3 from '../../../assets/images/proj3.webp';
import projectImg4 from '../../../assets/images/proj4.webp';
import projectImg5 from '../../../assets/images/proj5.webp';
import projectImg6 from '../../../assets/images/proj6.webp';
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";


export const items = ['All', 'HTML', 'JavaScript', 'SASS', 'React',]

export const itemsStack = ['HTML', 'SASS', 'React',]


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu menuItems={items}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} wrap={'wrap'} gap={'60px 35px'}>
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg1} alt={'project1'} />
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg2} alt={'project2'} />
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg3} alt={'project3'} />
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg4} alt={'project4'} />
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg5} alt={'project5'} />
                    <Project title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg6} alt={'project6'} />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`