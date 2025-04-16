import {S} from './../Projects_Styles.ts'
import {Button} from "../../../../components/Button.tsx";
import * as React from "react";
import {ProjectLinks} from "./ProjectLinks.tsx";


type ProjectPropsType = {
    title: string
    text: string
    src: string
    alt?: string
}


export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={props.alt}/>
                <Button width={'150px'} height={'40px'} padding={'7px 15px'} btnType={'primary'}>View Project</Button>
            </S.ImageWrapper>
            <S.Content>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.TechStacks><span>Tech stack : </span> HTML , JavaScript, SASS, React</S.TechStacks>
                <ProjectLinks/>
            </S.Content>
        </S.Project>
    );
};


