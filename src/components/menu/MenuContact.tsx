import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import * as React from "react";
import { theme } from "../../styles/Theme.ts";

const contactItemsData = [
    {href: 'https://github.com/ElenaWebDev984', iconId: 'github-contacts', target: '_blank'},
    {href: 'https://www.linkedin.com/', iconId: 'linkedin', target: '_blank'},
    {href: 'https://t.me/alexprimero999', iconId: 'telegram', target: '_blank'},
]

export const MenuContact: React.FC = () => {
    return (
        <StyledMenuContact>
            {contactItemsData.map((contactItemsData, index) => {
                return (
                    <MenuContactList key={index}>
                        <MenuContactLink href={contactItemsData.href} target={contactItemsData.target}>
                            <Icon iconId={contactItemsData.iconId} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                        </MenuContactLink>
                    </MenuContactList>
                )
            })}
        </StyledMenuContact>
    );
};


const StyledMenuContact = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const MenuContactList = styled.li`
    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition};
    }
`

const MenuContactLink = styled.a`
    
`


