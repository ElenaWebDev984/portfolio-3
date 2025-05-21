import {S} from './Contact_Styles.ts'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import { Container } from "../../../components/Container.tsx";
import {MenuSocial} from "./MenuSocial.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef, FormEvent} from "react";

export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted!");
        if (!form.current) return;

        console.log("Sending email...");
        try {
            const result = await emailjs.sendForm(
                'service_p2q2ayn',
                'template_4nggg5o',
                form.current,
                'lMxnNoRnNKj7l-yCR'
            );
            console.log("Email sent!", result);
        } catch (error) {
            console.error("Email send error:", error);
        }
    };

    return (
        <S.Contact id='contact'>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <FlexWrapper direction={"column"} alignItems={'center'}>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'Name'} name={'user_name'}/>
                        <S.Field required placeholder={'Email'} type='email' name={'email'}/>
                        <S.Field required placeholder={'Subject'} name={'subject'}/>
                        <S.Field required as={'textarea'} placeholder={'Message'} name={'message'}/>
                        <Button type={'submit'} width={'100%'} padding={'7px 15px'} marginBottom={'50px'} btnType={'primary'}>Send Message</Button>
                    </S.Form>
                    <MenuSocial />
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};