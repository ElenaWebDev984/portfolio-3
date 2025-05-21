import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={'arrow-top'} width="40" height="40" viewBox={'0 0 100 100'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: transparent;
    padding: 8px;
    position: fixed;
    right: 40px;
    bottom: 40px;
`

