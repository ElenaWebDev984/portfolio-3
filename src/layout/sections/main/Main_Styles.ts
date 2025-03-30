import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {theme} from "../../../styles/Theme.ts";

const Main = styled.section`
    margin-top: 70px;
    min-height: 100vh;
    display: flex;
    ${font({weight: 700, Fmax: 58, Fmin: 32})}
    color: ${theme.colors.mainSectionFont};
    letter-spacing: -0.02em;
    overflow: clip;
`

const ContentMain = styled.div`
    position: relative;
    max-width: 600px;

    @media ${theme.media.footer} {
        margin: 0 auto;
    }
`

const MainTitle = styled.h2`
    white-space: nowrap;

    ${font({weight: 700, Fmax: 58, Fmin: 32})}
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
    ${font({family: "'DM Sans', sans-serif", weight: 500, Fmax: 42, Fmin: 30})}
    margin: 30px 0 40px;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;

    @media ${theme.media.mobile} {
        gap: 20px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    padding: 10px;
    //object-position: top;
    position: absolute;

    @media ${theme.media.mobile} {
        width: 280px;
        height: 280px;
    }
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

    @media ${theme.media.mobile} {
        width: 280px;
        height: 280px;
    }

    &::after {
        content: "";
        width: 630px;
        height: 630px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-image: url("./../../../../public/abstract.svg");
        background-size: cover;
        display: inline-block;
        //pointer-events: none;
        z-index: 1;
        transform: rotate(360deg) translate(-50%, -50%);
        opacity: 1;
        border-width: 1px;
        filter: brightness(0) invert(1) sepia(1) hue-rotate(180deg);
    }
`


export const S = {
    Main,
    ContentMain,
    MainTitle,
    Greeting,
    MainText,
    ButtonWrapper,
    Photo,
    PhotoWrapper,
}


//brightness(0) делает изображение полностью чёрным
//invert(1) превращает чёрный цвет в белый
//sepia(1) (эффект сепии), который превращает белый в коричневый
//hue-rotate(200deg) поворачивает цветовой круг на 200 градусов, что даёт сине-фиолетовый оттенок