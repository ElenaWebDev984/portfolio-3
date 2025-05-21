import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";


export const MenuSocial = () => {
    return (
        <StyledMenuSocial>
            <MenuSocialList>
                <MenuSocialLink href="">
                    <Icon iconId={'email'} width={'40'} height={'40'} viewBox={'2 0 30 30'} />
                </MenuSocialLink>
            </MenuSocialList>
            <MenuSocialList>
                <MenuSocialLink href="">
                    <Icon iconId={'whatsapp'} width={'45'} height={'45'} viewBox={'-3 -2 30 30'}/>
                </MenuSocialLink>
            </MenuSocialList>
            <MenuSocialList>
                <MenuSocialLink href="">
                    <Icon iconId={'discord'} width={'40'} height={'40'} viewBox={'0 0 30 30'} />
                </MenuSocialLink>
            </MenuSocialList>
        </StyledMenuSocial>
    );
};


const StyledMenuSocial = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;

    @media ${theme.media.tablet} {
        gap: 10px;
    }
`

const MenuSocialList = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition};
    }
`

const MenuSocialLink = styled.a`
    
`


