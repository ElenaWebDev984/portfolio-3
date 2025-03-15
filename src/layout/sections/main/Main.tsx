import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={'column'} >
                <SmallText>Hi there! 👋</SmallText>
                <Name>I'm <span>Elena</span></Name>
                <MainTitle>a <span>web developer</span></MainTitle>
                <MainText>I craft responsive websites where technologies meet creativity</MainText>
                <Button type={'submit'}>Contact me!!!</Button>
            </FlexWrapper>
            <PhotoWrapper>
                <Photo src={photo} alt="foto"/>
            </PhotoWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
`

const MainTitle = styled.h2`


`

const Name = styled.p`

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

const PhotoWrapper = styled.div`

`