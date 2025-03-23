import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


// type MenuContactPropsType = {
//     iconIds: string[]
//     gap?: string;
// }
//
// type StyledMenuContactPropsType = {
//     gap?: string;
// }


// export const MenuContact = (props: MenuContactPropsType) => {
//     return (
//         <StyledMenuContact gap={props.gap}>
//
//             {props.iconIds.map((itemId, index) => {
//                 return  <li key={index}>
//                     <a href="">{itemId}</a>
//                 </li>
//             })}

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


