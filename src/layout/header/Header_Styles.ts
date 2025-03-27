import styled from "styled-components";

const Header = styled.header`
    background: rgba(25, 25, 25, 0.9);
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

const H1 = styled.h1`
    display: none;
`


export const S = {
    Header,
    H1,
}