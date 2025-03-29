import {S} from './About_Styles.ts'
import {Icon} from "../../../components/icon/Icon.tsx";



type LocationWrapperPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    locationText: string
}


export const LocationWrapper = (props: LocationWrapperPropsType) => {
    return (
        <S.LocationWrapper>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <S.IconText>{props.locationText}</S.IconText>
        </S.LocationWrapper>
    );
};


