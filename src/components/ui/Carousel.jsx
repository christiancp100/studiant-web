import React from 'react';
import useEmblaCarousel from 'embla-carousel-react'

const Slide = ({ children }) => {
  return <div className="embla__slide relative flex-grow">{children}</div>
}

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return <div className="embla overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex">
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
    </div>
  </div>
};

export default Carousel;
