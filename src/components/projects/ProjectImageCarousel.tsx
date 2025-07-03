import React, { useState } from 'react';
import './ProjectImageCarousel.css';

interface ProjectImageCarouselProps {
  images: string[];
  alt: string;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goTo = (idx: number) => {
    setCurrent((idx + total) % total);
  };

  return (
    <div className="carousel">
      <button
        className="carousel-arrow left"
        onClick={() => goTo(current - 1)}
        aria-label="Previous image"
      >
        &#8592;
      </button>
      <div className="carousel-image-wrapper">
        <img
          src={images[current]}
          alt={alt + ' ' + (current + 1)}
          className="carousel-image"
        />
      </div>
      <button
        className="carousel-arrow right"
        onClick={() => goTo(current + 1)}
        aria-label="Next image"
      >
        &#8594;
      </button>
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={"carousel-dot" + (idx === current ? ' active' : '')}
            onClick={() => goTo(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImageCarousel; 