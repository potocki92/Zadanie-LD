import { useEffect, useRef, useState } from "react";
import { Image } from "../Image/Image";
import {
  CarouselWrapper,
  CaruselButton,
  StyledCarousel,
} from "./Carousel.styled";
import { images } from "./images";
import { Rerousel } from 'rerousel';
export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const customerLogo = useRef(null);
  const carouselArray = [
    {
      alt: "Cupra Ateca",
      imageSource: images.normal.cupra_ateca,
      retina: images.retina.cupra_ateca_retina,
      title: "Nowa CUPRA Born",
    },
    {
      alt: "Cupra Born",
      imageSource: images.normal.cupra_born,
      retina: images.retina.cupra_born_retina,
      title: "Nowa CUPRA Born",
    },
    {
      alt: "Cupra Formentor",
      imageSource: images.normal.cupra_formentor,
      retina: images.retina.cupra_formentor_retina,
      title: "Nowa CUPRA Born",
    },
    {
      alt: "Cupra FormentorVZ",
      imageSource: images.normal.cupra_formentorVZ,
      retina: images.retina.cupra_formentorVZ_retina,
      title: "Nowa CUPRA Born",
    },
    {
      alt: "Cupra Leon Sportstourer",
      imageSource: images.normal.cupra_leon_sportstourer,
      retina: images.retina.cupra_leon_sportstourer_retina,
      title: "Nowa CUPRA Born",
    },
    {
      alt: "Cupra Leon",
      imageSource: images.normal.cupra_leon,
      retina: images.retina.cupra_ateca_retina,
      title: "Nowa CUPRA Born",
    },
  ];

  const sliderImage = () => {
    
    return carouselArray.map((item, index) => (
      <div
        key={index}
        className="carousel"
        style={{
          left: `calc(${index * 100}% + ${index * 100}px)`,
          opacity: index === currentSlide ? 1 : 0.2,
          height: "100%",
          transform: `translateX(calc(-${currentSlide * 100}% - ${
            currentSlide * 100
          }px))`,
        }}
      >
        <h2
          style={{
            fontWeight: "400",
            fontSize: "48px",
            paddingBottom: "56px",
          }}
        >
          {item.alt}
        </h2>
        <img
          className="slide"
          srcSet={`${item.imageSource} 1x, ${item.retina} 2x`}
          alt={item.alt}
        />
      </div>
    ));
  };

  const goSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      goSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < carouselArray.length - 1) {
      goSlide(currentSlide + 1);
    }
  };

  return (
    <StyledCarousel>
      <CarouselWrapper>
        <CaruselButton left onClick={handlePrevSlide} id="nav-button--prev">
          Previous
        </CaruselButton>
        <CaruselButton onClick={handleNextSlide} id="nav-button--next">
          Next
        </CaruselButton>
        {sliderImage()}
      </CarouselWrapper>
    </StyledCarousel>
  );
};
