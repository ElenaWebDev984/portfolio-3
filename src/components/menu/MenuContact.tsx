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

const StyledMenuContact = styled.ul`
    display: flex;
    gap: 20px;
`