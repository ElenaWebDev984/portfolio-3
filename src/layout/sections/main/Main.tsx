import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                <div>
                    <SmallText>Hi there! 👋</SmallText>
                    <Name>I'm <span>Elena</span>,</Name>
                    <MainTitle>a <span>web developer</span></MainTitle>
                    <MainText>I craft responsive websites where technologies meet creativity</MainText>
                    <button type={'submit'}>Contact me!!!</button>
                </div>
                <Photo src={photo} alt="foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`

const MainTitle = styled.h1`
    // TODO change to P, create h1 in header con SEO (web developer, react developer, frontend developer, 2 years...)

`

const Name = styled.h2`

`

const SmallText = styled.span`

`

const MainText = styled.p`

`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`