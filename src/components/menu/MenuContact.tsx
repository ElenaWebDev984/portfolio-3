import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import * as React from "react";

const contactItemsData = [
    {
        href: '#',
        iconId: 'github-contacts',
    },
    {
        href: '#',
        iconId: 'linkedin',
    },
    {
        href: '#',
        iconId: 'telegram',
    },
]

export const MenuContact: React.FC = () => {
    return (
        <StyledMenuContact>
            {contactItemsData.map((contactItemsData, index) => {
                return (
                    <MenuContactList key={index}>
                        <MenuContactLink href={contactItemsData.href}>
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
`

const MenuContactList = styled.li`
    &:hover {
        transform: translateY(-4px);
    }
`

const MenuContactLink = styled.a`

`


