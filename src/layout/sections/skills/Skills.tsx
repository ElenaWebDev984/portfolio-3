import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/Container.tsx";
import {GridWrapper} from "../../../components/GridWrapper.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <GridWrapper gap={'80px 100px'} justifyContent={'center'} alignItems={'center'}>
                    <Icon iconId={'html'} width={'120px'} height={'120px'} viewBox={'0 -4 120 120'}/>
                    <Icon iconId={'css'} width={'120px'} height={'120px'} viewBox={'0 -4 120 120'}/>
                    <Icon iconId={'js'} width={'120px'} height={'120px'} viewBox={'-10 -10 150 150'}/>
                    <Icon iconId={'ts'} width={'120px'} height={'120px'} viewBox={'-10 -10 150 150'}/>
                    <Icon iconId={'react'} width={'120px'} height={'120px'} viewBox={'-10 -10 130 130'}/>
                    <Icon iconId={'styledComponents'} width={'120px'} height={'120px'} viewBox={'-12 -12 150 150'}/>
                    <Icon iconId={'github'} width={'120px'} height={'120px'} viewBox={'-5 -5 100 100'}/>
                    <Icon iconId={'git'} width={'120px'} height={'120px'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'figma'} width={'120px'} height={'120px'} viewBox={'-10 -10 150 150'}/>
                    <Icon iconId={'webstorm'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
                    <Icon iconId={'pnpm'} width={'120px'} height={'120px'} viewBox={'2 2 120 120'}/>
                    <Icon iconId={'vite'} width={'120px'} height={'120px'} viewBox={'4 4 240 240'}/>
                </GridWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`

