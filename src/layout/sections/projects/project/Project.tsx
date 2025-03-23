import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";
import {ProjectLinks} from "./ProjectLinks.tsx";


type ProjectPropsType = {
    title: string
    text: string
    src: string
    alt?: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt={props.alt}/>
                <Button width={'150px'} height={'40px'} padding={'7px 15px'} btnType={'primary'}>View Project</Button>
            </ImageWrapper>
            <Content>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStacks><span>Tech stack : </span> HTML , JavaScript, SASS, React</TechStacks>
                <ProjectLinks/>
            </Content>
        </StyledProject>
    );
};

const StyledProject = styled.article`
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

