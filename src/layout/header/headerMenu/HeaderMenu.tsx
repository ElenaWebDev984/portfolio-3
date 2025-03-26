import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <MenuList>
                {props.menuItems.map((item, index) => {
                    return  <MenuListItem key={index}>
                        <MenuLink href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </MenuLink>
                    </MenuListItem>
                })}
            </MenuList>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    
    @media ${theme.media.footer} {
        display: none;
    }
`

const MenuList = styled.ul`
    display: flex;
    gap: 40px;
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

    &:hover {
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

const MenuLink = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: transparent;
`

