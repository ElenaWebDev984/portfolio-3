import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

const contactSocialData = [
    {href: 'mailto:test@yahoo.com', iconId: 'email', target: '_blank'},
    {href: 'https://wa.me/9999999999', iconId: 'whatsapp', target: '_blank'},
    {href: 'https://discord.com/', iconId: 'discord', target: '_blank'},
    // {href: 'mailto:your-email@example.com', iconId: 'email', target: '_blank'},
    // {href: 'tel:+1234567890', iconId: 'whatsapp', target: '_blank'},
    // {href: 'https://wa.me/1234567890', iconId: 'whatsapp', target: '_blank'}
]

export const MenuSocial = () => {
    return (
        <StyledMenuSocial>
            {contactSocialData.map((contactSocialData, index) => {
                return (
                    <MenuSocialList key={index}>
                        <MenuSocialLink href={contactSocialData.href} target={contactSocialData.target}>
                            <Icon iconId={contactSocialData.iconId} width={'40'} height={'40'} viewBox={'2 0 30 30'} />
                        </MenuSocialLink>
                    </MenuSocialList>
                )
            })}
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


