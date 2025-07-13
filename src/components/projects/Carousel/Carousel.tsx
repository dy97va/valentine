import React, { useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import "./Carousel.css"
import type { Project } from '../projectsData'

export const Carousel = ({ project }: {project:Project}) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === project.images.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? project.images.length - 1 : slide - 1)
  }

  return (
    <div className="carousel">
      <FaChevronCircleLeft onClick={prevSlide} className="arrow arrow-left" />
      {project.images.map((item, idx) => {
        return (
          <img
            src={item}
            alt={"no image found"}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        )
      })}
      <FaChevronCircleRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {project.images.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}