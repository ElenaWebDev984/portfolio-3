import {S} from './../Projects_Styles.ts'
import {Icon} from "../../../../components/icon/Icon.tsx";


export const ProjectLinks = () => {
    return (
        <S.ProjectLinks>
            <S.ProjectLink href='#'>
                <Icon iconId={'chain-projects'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
                Live Preview
            </S.ProjectLink>
            <S.ProjectLink href='#'>
                <Icon iconId={'github-projects'} width={'20px'} height={'20px'} viewBox={'-5 -5 30 30'}/>
               View Code
            </S.ProjectLink>
        </S.ProjectLinks>
    );
};


