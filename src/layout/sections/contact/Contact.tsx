import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import { Container } from "../../../components/Container.tsx";
import {MenuSocial} from "./MenuSocial.tsx";


// export const links = [
//     {iconId: 'email', href: '#', width: '40', height: '40', viewBox: '2 0 30 30'},
//     {iconId: 'whatsapp', href: '#', width: '45', height: '45', viewBox: '-3 -2 30 30'},
//     {iconId: 'discord', href: '#', width: '30', height: '30', viewBox: '0 0 30 30'},
// ]

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <FlexWrapper direction={"column"} alignItems={'center'}>
                    <StyledForm>
                        <Field placeholder={'Name'}/>
                        <Field placeholder={'Email'} type='email'/>
                        <Field placeholder={'Subject'}/>
                        <Field as={'textarea'} placeholder={'Message'}/>
                        <Button type={'submit'} width={'100%'} padding={'7px 15px'} marginBottom={'50px'} btnType={'primary'}>Send Message</Button>
                    </StyledForm>
                    <MenuSocial />
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`

const StyledForm = styled.form`
    width: 100%;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    background-color: ${theme.colors.projectBgc};
    border: 1px solid ${theme.colors.borderForm};
    color: ${theme.colors.h2h3Font};
    border-radius: 5px;
    line-height: 1.2;
    width: 100%;
    padding: 7px 15px;
    letter-spacing: 0.05em;
    font-family: Poppins, sans-serif; 
    
    &::placeholder {
        color: ${theme.colors.linkNavFont};
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.accentFont2};
    }
`

