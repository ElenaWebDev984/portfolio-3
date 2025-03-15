import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={'column'} >
                <SmallText>Hi there! 👋</SmallText>
                <Name>I'm <span>Elena</span></Name>
                <MainTitle>a <span>web developer</span></MainTitle>
                <MainText>I craft responsive websites where technologies meet creativity</MainText>
                <button type={'submit'}>Contact me!!!</button>
            </FlexWrapper>
            <Photo src={photo} alt="foto"/>
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