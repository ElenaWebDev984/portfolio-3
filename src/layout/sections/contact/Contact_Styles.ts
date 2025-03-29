import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

const Contact = styled.section`
    position: relative;
`

const Form = styled.form`
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
    
    @media ${theme.media.tablet} {
        ${Button} {
            width: 180px;
            height: 40px;
        }
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


export const S ={
    Contact,
    Form,
    Field,
}