import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const MenuContact = () => {
    return (
        <StyledMenuContact>
            <li>
                <a href="">
                    <Icon iconId={'github-contacts'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'telegram'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                </a>
            </li>
        </StyledMenuContact>
    );
};


// type MenuIcon = {
//     iconId: string;
// }
//
// type MenuContactPropsType = {
//     menuIcons: MenuIcon[]
// }
//
// export const MenuContact = (props: {menuItems: Array<string>}) => {
//     return (
//         <StyledMenuContact>
//             <li>
//                 {menuIcons.map((item, id) => {
//                     return  <MenuIcons key={id}>
//                         <a href="">{item}</a>
//                     </MenuIcons>
//                 })}
//             </li>
//         </StyledMenuContact>
//     );
// };


const StyledMenuContact = styled.ul`
    display: flex;
    gap: 20px;
`