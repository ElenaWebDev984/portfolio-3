import {S} from './Contact_Styles.ts'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import { Container } from "../../../components/Container.tsx";
import {MenuSocial} from "./MenuSocial.tsx";
import * as React from "react";


// export const links = [
//     {iconId: 'email', href: '#', width: '40', height: '40', viewBox: '2 0 30 30'},
//     {iconId: 'whatsapp', href: '#', width: '45', height: '45', viewBox: '-3 -2 30 30'},
//     {iconId: 'discord', href: '#', width: '30', height: '30', viewBox: '0 0 30 30'},
// ]

export const Contact: React.FC = () => {
    return (
        <S.Contact id='contact'>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <FlexWrapper direction={"column"} alignItems={'center'}>
                    <S.Form>
                        <S.Field placeholder={'Name'}/>
                        <S.Field placeholder={'Email'} type='email'/>
                        <S.Field placeholder={'Subject'}/>
                        <S.Field as={'textarea'} placeholder={'Message'}/>
                        <Button type={'submit'} width={'100%'} padding={'7px 15px'} marginBottom={'50px'} btnType={'primary'}>Send Message</Button>
                    </S.Form>
                    <MenuSocial />
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};


