import styled from "styled-components";
import {IconPlusSpanDiv} from "../../../components/IconPlusSpanDiv.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const Slogan = () => {
    return (
        <StyledSlogan>
           <FlexWrapper direction={'column'} alignItems={'center'} >
               <StyledSloganText>More projects I’ve worked on:</StyledSloganText>
               <IconPlusSpanDiv iconId={'github-contact'} spanText={'@john-doe on github'} />
           </FlexWrapper>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    color: white;
`

const StyledSloganText = styled.p`
    
`

