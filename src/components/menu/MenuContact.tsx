import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const MenuContact = () => {
    return (
        <StyledMenuContact>
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


