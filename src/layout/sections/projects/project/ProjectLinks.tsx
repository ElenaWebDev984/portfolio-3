import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";


export const ProjectLinks = () => {
    return (
        <StyledProjectLinks>
            <ProjectLink href='#'>
                <Icon iconId={'chain-projects'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
                Live Preview
            </ProjectLink>
            <ProjectLink href='#'>
                <Icon iconId={'github-projects'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
               View Code
            </ProjectLink>
        </StyledProjectLinks>
    );
};


const StyledProjectLinks = styled.div`
    display: flex;
    margin-bottom: 25px;
    gap: 50px;
    //flex-wrap: wrap;
`


const ProjectLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${theme.colors.projectLinkFont};
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: underline;
`