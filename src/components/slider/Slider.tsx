import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import './../../styles/slider.css';
import {Icon} from "../icon/Icon.tsx";


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
            renderPrevButton={() => {
                return <Icon iconId={'arrow-left'} width='30px' height='30px' viewBox='0 0 30 30'/>
            }}
            renderNextButton={() => {
                return <Icon iconId={'arrow-right'} width='30px' height='30px' viewBox='0 0 30 30'/>
            }}
        />
    </S.Slider>
);


