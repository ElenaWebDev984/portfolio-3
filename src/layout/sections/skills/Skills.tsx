import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/Container.tsx";
import { GridWrapper } from "../../../components/GridWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import * as React from "react";


const skillData = [
    {
        iconId: 'html',
        width: '120px',
        height: '120px',
        viewBox: '0 -4 120 120',
    },
    {
        iconId: 'css',
        width: '120px',
        height: '120px',
        viewBox: '0 -4 120 120',
    },
    {
        iconId: 'js',
        width: '120px',
        height: '120px',
        viewBox: '-10 -10 150 150',
    },
    {
        iconId: 'ts',
        width: '120px',
        height: '120px',
        viewBox: '-10 -10 150 150',
    },
    {
        iconId: 'react',
        width: '120px',
        height: '120px',
        viewBox: '-10 -10 130 130',
    },
    {
        iconId: 'styledComponents',
        width: '120px',
        height: '120px',
        viewBox: '-12 -12 150 150',
    },
    {
        iconId: 'github',
        width: '120px',
        height: '120px',
        viewBox: '-5 -5 100 100',
    },
    {
        iconId: 'git',
        width: '120px',
        height: '120px',
        viewBox: '-8 -8 120 120',
    },
    {
        iconId: 'figma',
        width: '120px',
        height: '120px',
        viewBox: '-10 -10 150 150',
    },
    {
        iconId: 'webstorm',
        width: '120px',
        height: '120px',
        viewBox: '0 0 120 120',
    },
    {
        iconId: 'pnpm',
        width: '120px',
        height: '120px',
        viewBox: '2 2 120 120',
    },
    {
        iconId: 'vite',
        width: '120px',
        height: '120px',
        viewBox: '4 4 240 240',
    },
]

export const Skills: React.FC = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <GridWrapper gridTemplateColumns={'repeat(6, 1fr)'}  justifyItems={'center'} rowGap={'80px'} >
                    {skillData.map((skill, index) => {
                        return <Icon key={index} iconId={skill.iconId} width={skill.width} height={skill.height} viewBox={skill.viewBox}/>
                    })}
                </GridWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

    @media ${theme.media.desktop} {
        ${GridWrapper} {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            row-gap: 60px;
        }
    }
`



