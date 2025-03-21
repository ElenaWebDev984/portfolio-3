import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
                    <ContentMain>
                        <SmallText>Hi there! 👋</SmallText>
                        <MainTitle>I'm <span>Elena</span><br/>a <span>web developer</span></MainTitle>
                        <MainText>I craft responsive websites where technologies meet creativity</MainText>
                        <ButtonWrapper>
                            <Button as='a' href={'#'} padding={'8px 16px'} width={'150px'} height={'40px'}>Contact me!!!</Button>
                            <Button as='a'  href={'#'} padding={'8px 16px'}  width={'150px'} height={'40px'}>Download CV</Button>
                        </ButtonWrapper>
                    </ContentMain>
                    <PhotoWrapper>
                        <Photo src={photo} alt="web developer portfolio"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    font-weight: 700;
    font-size: 58px;
    color: ${theme.colors.mainSectionFont};
    letter-spacing: -0.02em;
`

const ContentMain = styled.div`

`

const MainTitle = styled.h2`
    white-space: nowrap;
    font-weight: 700;
    font-size: 58px;
    
    span {
        background: ${theme.colors.linearGradientFont};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
`

const SmallText = styled.span`
   
`

const MainText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 42px;
    margin: 30px 0 40px;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    padding: 10px;
    //object-position: top;
`

const PhotoWrapper = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: ${theme.colors.linearGradientImg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
`