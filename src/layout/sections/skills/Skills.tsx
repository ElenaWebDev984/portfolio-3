import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/Container.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap="wrap" gap={'105px'}>
                    <Icon iconId={'html'} viewBox={'0 -4 120 120'} />
                    <Icon iconId={'css'} viewBox={'0 -4 120 120'} />
                    <Icon iconId={'js'} viewBox={'-10 -10 150 150'} />
                    <Icon iconId={'ts'} viewBox={'-10 -10 150 150'} />
                    <Icon iconId={'react'} viewBox={'-10 -10 130 130'} />
                    <Icon iconId={'styledComponents'} viewBox={'-12 -12 150 150'} />
                    <Icon iconId={'github'} viewBox={'-5 -5 100 100'} />
                    <Icon iconId={'git'} viewBox={'-8 -8 120 120'} />
                    <Icon iconId={'figma'} viewBox={'-10 -10 150 150'} />
                    <Icon iconId={'webstorm'} viewBox={'0 0 120 120'} />
                    <Icon iconId={'pnpm'} viewBox={'2 2 120 120'} />
                    <Icon iconId={'vite'} viewBox={'4 4 240 240'} />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 70vh;
`

