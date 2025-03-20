import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {MenuContact} from "../../../components/menu/MenuContact.tsx";
import { Container } from "../../../components/Container.tsx";


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
                        <Button type={'submit'} width={'100%'} padding={'7px 15px'} marginBottom={'50px'}>Send Message</Button>
                    </StyledForm>
                    <MenuContact/>
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

