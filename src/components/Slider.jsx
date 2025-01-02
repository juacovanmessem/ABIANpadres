import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 350 },
    items: 1,
    slidesToSlide: 1
  }
};

const sliderImageUrl = [
  { title: 'Dra. Ana Ludemann', description: 'Buenisimo el curso en todos los aspectos!! Muy enriquecedor como profesional y como herramienta terapeutica.'},
  { title: 'Anonimo 1', description: 'Fue muy enriquecedor, aportando mucho material sobre el tema. Con explicaciones muy claras por parte de los profesionales, muy generosas con toda la información brindada para poder aplicarlo. Superó ampliamente mis expectativas.'},
  { title: 'Lic. Marianella Jumpa', description: 'Espero que sigan desarrollando más cursos para continuar actaulizandome y de esa manera ayudar a mis consultantes.'},
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (nextSlide) => {
    setCurrentIndex(nextSlide);
  };

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={20000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        beforeChange={handleBeforeChange}  // Esto actualiza el índice antes de que se mueva el carrusel
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div 
              key={index} 
              className={`border-4 border slider` }
            >
              <h3 className="display-6 text-center">{imageUrl.title}</h3>
              <p className="lead text-center">{imageUrl.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
