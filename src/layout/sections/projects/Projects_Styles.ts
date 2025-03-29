import {theme} from "../../../styles/Theme.ts";
import {GridWrapper} from "../../../components/GridWrapper.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";

const Projects = styled.section`
    position: relative;
    min-height: 100vh;

    @media ${theme.media.desktop} {
        ${GridWrapper} {
            grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
            row-gap: 30px;
        }
    }

    @media ${theme.media.mobile} {
        ${GridWrapper} {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
    }
`

//Project

const Project = styled.article`
    background: ${theme.colors.projectBgc};
    max-width: 375px;
    width: 100%;
    border-radius: 20px;
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

const Content = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h1`
    font-weight: 500;
    font-size: 28px;
`

const Text = styled.p`
    //margin: 20px 0 15px;
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
`

const TechStacks = styled.p`
    font-weight: 300;
    font-size: 16px;
    
    span {
        font-weight: 400;
        font-size: 14px;
    }
`

// ProjectLinks

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
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


 export const S = {
     Projects,
     Project,
     ImageWrapper,
     Image,
     Content,
     Title,
     Text,
     TechStacks,
     ProjectLinks,
     ProjectLink,
 }