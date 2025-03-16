import styled from "styled-components";
import {IconPlusSpanDiv} from "../../../../components/IconPlusSpanDiv.tsx";
import {Menu} from "../../../../components/menu/Menu.tsx";
import {itemsStack} from "../Projects.tsx";


type ProjectPropsType = {
    title: string
    text: string
    src:  string
    alt?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={props.alt}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StackSpan>Tech stack : </StackSpan>
            <Menu menuItems={itemsStack}/>
            <StyledProjectLinkWrapper>
                <IconPlusSpanDiv iconId={'chain-projects'} spanText={'Live Preview'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
                <IconPlusSpanDiv iconId={'github-projects'} spanText={'View Code'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
            </StyledProjectLinkWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.article`
    background-color: #363636;
    max-width: 375px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const Title = styled.h1`

`

const Text = styled.p`

`

const StackSpan = styled.span`

`

const StyledProjectLinkWrapper = styled.div`
    display: flex;
    gap: 50px;
`