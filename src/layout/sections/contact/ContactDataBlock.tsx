import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";


type ContactDataBlockPropsType = {
    iconId: string
    spanTitleText: string
    spanText: string
}

export const ContactDataBlock = (props: ContactDataBlockPropsType) => {
    return (
        <StyledContactDataBlock>
            <Icon iconId={props.iconId} />
            {/* TODO Icon as ::before */}
            <SpanTitle>{props.spanTitleText}</SpanTitle>
            <SpanDate>{props.spanText}</SpanDate>
        </StyledContactDataBlock>
    );
};

const StyledContactDataBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const SpanTitle = styled.span`

`

const SpanDate = styled.span`

`