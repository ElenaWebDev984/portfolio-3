import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {MenuContact} from "../../../components/menu/MenuContact.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Get in touch</SectionTitle>
            <FlexWrapper direction={"column"} alignItems={'center'}>
                <StyledForm>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Email'} type='email'/>
                    <Field placeholder={'Subject'}/>
                    <Field as={'textarea'} placeholder={'Message'}/>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
                <MenuContact/>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;

`

const StyledForm = styled.form`
    width: 100%;
    max-width: 430px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Field = styled.input`
    background-color: ${theme.colors.projectBgc};
    //border-radius: 5px;
`

