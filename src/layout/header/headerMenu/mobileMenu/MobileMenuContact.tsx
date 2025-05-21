import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";



export const MobileMenuContact = () => {
    return (
        <StyledMobileMenuContact>
            <MenuContactList>
                <MenuContactLink href="">
                    <Icon iconId={'github-contacts'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                </MenuContactLink>
            </MenuContactList>
            <MenuContactList>
                <MenuContactLink href="">
                    <Icon iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                </MenuContactLink>
            </MenuContactList>
            <MenuContactList>
                <MenuContactLink href="">
                    <Icon iconId={'telegram'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                </MenuContactLink>
            </MenuContactList>
        </StyledMobileMenuContact>
    );
};


const StyledMobileMenuContact = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

const MenuContactList = styled.li`
    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition};
    }
`

const MenuContactLink = styled.a`
    
`


