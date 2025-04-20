import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';


type SliderPropsType = {
    text?: string
    name?: string
}

const Slide = (props: SliderPropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.name}</S.Name>
        </S.Slide>
    )
}

const items = [
   <Slide name={'@ivan ivanow'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
   <Slide name={'igor igorev'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
   <Slide name={'anton sokolov'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


// import {S} from './Slider_Styles.ts'
// import {FlexWrapper} from "../FlexWrapper.tsx";
// import * as React from "react";
//
//
// type SliderPropsType = {
//     text?: string
//     name?: string
// }
//
// export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>{props.text}</S.Text>
//                     <S.Name>{props.name}</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={'active'}></span>
//                 <span></span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
//
