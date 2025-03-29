import {S} from './About_Styles.ts'
import {LocationWrapper} from "./LocationWrapper.tsx";



type AboutGridWrapperPropsType = {
    positionText: string
    timeText: string
    officeText: string
    locationText: string
    calendarText: string
}


export const AboutGridWrapper = (props: AboutGridWrapperPropsType) => {
    return (
        <S.AboutGridWrapper>
            <S.Position>{props.positionText}</S.Position>
            <S.Time>{props.timeText}</S.Time>
            <LocationWrapper locationText={props.officeText}  iconId={'office-building'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
            <LocationWrapper locationText={props.locationText} iconId={'location'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
            <LocationWrapper locationText={props.calendarText} iconId={'calendar'} width={'20px'} height={'20px'} viewBox={'-4 -4 20 20'} />
        </S.AboutGridWrapper>
    );
};



