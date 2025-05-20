import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-scroll";


//  Menu

const MenuList = styled.ul`
    display: flex;
  
    align-items: center;
    gap: 40px;
    
    @media (max-width: 768px) {
        flex-direction: column; // for Mobile
    }
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid rebeccapurple;
    color: ${theme.colors.accentFont2};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const MenuListItem = styled.li`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accentFont2};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }

    &:hover,
    &:active {
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(-5px);
            color: ${theme.colors.accentFont};

            & +${Mask} {
                transform: skewX(12deg) translateX(5px);
            }
        }
    }
`

const MenuLink = styled(Link)`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: transparent;
`


// MobileMenu

const MobileMenu = styled.nav`
    display: none;

    @media ${theme.media.desktop} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(25, 25, 25, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.linkNavFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(128, 128, 128, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.linkNavFont};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.linkNavFont};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

// DesktopMenu

const DesktopMenu = styled.nav`
    
    @media ${theme.media.desktop} {
        display: none;
    }
`

export const S ={
    MenuList,
    Mask,
    MenuListItem,
    MenuLink,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}