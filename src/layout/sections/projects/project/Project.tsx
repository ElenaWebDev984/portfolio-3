import styled from "styled-components";
import {IconPlusSpanDiv} from "../../../../components/IconPlusSpanDiv.tsx";
import {Menu} from "../../../../components/menu/Menu.tsx";
import {itemsStack} from "../Projects.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";


type ProjectPropsType = {
    title: string
    text: string
    src:  string
    alt?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt={props.alt}/>
                <Button>View Project</Button>
            </ImageWrapper>
            <ArticleDiv>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <StackSpan>Tech stack : </StackSpan>
                <Menu menuItems={itemsStack}/>
                <StyledProjectLinkWrapper>
                    <IconPlusSpanDiv iconId={'chain-projects'} spanText={'Live Preview'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
                    <IconPlusSpanDiv iconId={'github-projects'} spanText={'View Code'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
                </StyledProjectLinkWrapper>
            </ArticleDiv>
        </StyledProject>
    );
};

const StyledProject = styled.article`
    background: ${theme.colors.projectBgc};
    max-width: 375px;
    width: 100%;
    border-radius: 20px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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

const ArticleDiv = styled.div`
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

const StackSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
`

const StyledProjectLinkWrapper = styled.div`
    display: flex;
    gap: 50px;
`