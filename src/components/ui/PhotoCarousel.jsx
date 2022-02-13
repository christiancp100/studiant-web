import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const PhotoCarousel = () => {
  const img = '/img/apartment.jpeg';
  const img2 = '/img/building.jpeg';
  const img3 = '/img/house.svg';
  const img4 = '/img/apartment.jpeg';
  const img5 = '/img/building.jpeg';
  const img6 = '/img/house.svg';
  const imgs = [img, img2, img3, img4, img5, img6];

  return (
    <Carousel showStatus={false} onClickItem={() => { }}>
      {imgs &&
        imgs.map((img, i) => (
          <div key={i}>
            <img className="object-cover" src={img} />
          </div>
        ))}
    </Carousel>
  );
};

PhotoCarousel.displayName = 'PhotoCarousel';

export default PhotoCarousel;
