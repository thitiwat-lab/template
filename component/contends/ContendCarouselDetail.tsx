import { Carousel } from "antd"
import SlideShow from "../SlideShow";

const ContendCarouselDetail = () =>{
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return(
    <>
    <SlideShow />
    </>
  )
}

export default ContendCarouselDetail