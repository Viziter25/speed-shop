import React, {useEffect, useState} from 'react';

import slide1 from 'assets/image/pageMaker/slide2.svg';
import slide2 from 'assets/image/pageMaker/slide 4.svg';
import slide3 from 'assets/image/pageMaker/slide 1.svg';
import s from './Slider.module.scss';
import backgroundImg from 'assets/image/pageMaker/Slider background.svg';
import prev from 'assets/image/pageMaker/prev arrow.svg';
import next from 'assets/image/pageMaker/next arrow.svg';

const images: string[] = [slide1, slide2, slide3];

export const Slider: React.FC = () => {

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  console.log(viewportWidth)
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

  }, []);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(0);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    setAngle(angle + Math.PI / (images.length / 2));
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    setAngle(angle - Math.PI / (images.length / 2));
  };


  const radius: number = 300;
  const translateStyleImg = viewportWidth < 1020 &&  viewportWidth > 430? 'translate(-180%, 3%)': viewportWidth < 430 ? 'translate(-197%, 5%)' : 'translate(-140%, 15%)'
  console.log(translateStyleImg)
  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className={s.slider}>
      <div className={s.sliderBlock}>
        <img className={s.sliderBlockImg} src={backgroundImg} alt="backgroundImg"/>
        {images.map((image: string, index: number) => {
          return (

            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={s.sliderItemImg}
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transform: `${translateStyleImg} rotate(${angle + index * (2 * Math.PI) / images.length}rad) translate(${radius}px, 0)`,
                transition: '1s'
              }}
              onTransitionEnd={handleTransitionEnd}
            />
          );
        })}
        <div className={s.arrowImg}>
          <img src={prev} alt="prev" className={s.nextImg} onClick={prevSlide}/>
          <img src={next} alt="next" className={s.prevImg} onClick={nextSlide}/>
        </div>
      </div>

    </div>
  );
};
