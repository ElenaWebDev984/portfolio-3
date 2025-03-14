import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText>Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap="wrap" gap={'80px 105px'}>
                <Icon iconId={'html'} viewBox={'0 0 120 120'} />
                <Icon iconId={'css'} viewBox={'0 0 120 120'} />
                <Icon iconId={'js'} viewBox={'0 0 140 140'} />
                <Icon iconId={'ts'} viewBox={'0 0 140 140'} />
                <Icon iconId={'react'} viewBox={'0 0 120 120'} />
                <Icon iconId={'styledComponents'} viewBox={'0 0 140 140'} />
                <Icon iconId={'github'} viewBox={'0 0 100 100'} />
                <Icon iconId={'git'} viewBox={'0 0 110 110'} />
                <Icon iconId={'figma'} viewBox={'0 0 130 130'} />
                <Icon iconId={'webstorm'} viewBox={'0 0 100 100'} />
                <Icon iconId={'pnpm'} viewBox={'0 0 120 120'} />
                <Icon iconId={'vite'} viewBox={'0 0 220 220'} />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 70vh;
`

