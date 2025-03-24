import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {BtnGradient} from "../../../components/BtnGradient.tsx";
// import abstract from '../../../assets/images/AbstractMain.svg'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'20px'} wrap={'wrap'}>
                    <ContentMain>
                        <Greeting>Hi there! 👋</Greeting>
                        <MainTitle>I'm <span>Elena</span><br/>a <span>web developer</span></MainTitle>
                        <MainText>I craft responsive websites where technologies meet creativity</MainText>
                        <ButtonWrapper>
                            <Button as='a' href={'#'} padding={'8px 16px'} width={'150px'} height={'40px'}
                                    btnType={'primary'}>Contact me!!!</Button>
                            <BtnGradient as='a' href={'#'} padding={'8px 16px'} width={'150px'} height={'40px'}>Download
                                CV</BtnGradient>
                        </ButtonWrapper>
                    </ContentMain>
                    <PhotoWrapper>
                        <Photo src={photo} alt="web developer portfolio"/>
                        {/*<AbstractSvg src={abstract} alt="frontend developer"/>*/}
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin-top: 70px;
    min-height: 100vh;
    display: flex;
    font-weight: 700;
    font-size: 58px;
    color: ${theme.colors.mainSectionFont};
    letter-spacing: -0.02em;
`

const ContentMain = styled.div`
    max-width: 600px;

    @media ${theme.media.footer} {
        margin: 0 auto;
    }
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

const Greeting = styled.span`

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
    position: absolute;

        // @media ${theme.media.desktop} {
    //     width: 300px;
    //     height: 300px;
    // }
`

const PhotoWrapper = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: ${theme.colors.linearGradientImg};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 15px;

    @media ${theme.media.footer} {
        margin: 0 auto;
    }
    
    &::before {
        content: "";
        width: 350px;
        height: 350px;
        border-radius: 50%;
    }
`

// const AbstractSvg = styled.img`
//     width: 630px;
//     height: 630px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     pointer-events: none;
//     z-index: -1;
//    transform: rotate(360deg) translate(-50%, -50%);
//     opacity: 0.8;
//     border-width: 1px;
//     filter: brightness(0) invert(1) sepia(1) hue-rotate(180deg);

//brightness(0) делает изображение полностью чёрным
//invert(1) превращает чёрный цвет в белый
//sepia(1) (эффект сепии), который превращает белый в коричневый
//hue-rotate(200deg) поворачивает цветовой круг на 200 градусов, что даёт сине-фиолетовый оттенок
// `