import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";


export const GoTopBtn = () => {
    return (
        <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'arrow-top'} width="40" height="40" viewBox={'0 0 100 100'}/>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: transparent;
    padding: 8px;
    position: fixed;
    right: 40px;
    bottom: 40px;
`

