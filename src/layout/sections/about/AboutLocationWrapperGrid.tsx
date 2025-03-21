import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";


export const AboutLocationWrapperGrid = () => {
    return (
        <StyledAboutLocationWrapperGrid>
            <Title />
            <Small />
            <Office />
            <LocationOffice />
            <Calendar />
        </StyledAboutLocationWrapperGrid>
    );
};

const StyledAboutLocationWrapperGrid = styled.div`

    &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.borderFooter};
        opacity: 30%;
        margin-top: 20px;
    }
`

const Title = styled.p`

`

const Small = styled.small`

`

const Office = styled.span`

`

const LocationOffice = styled.span`

`

const Calendar = styled.span`

`