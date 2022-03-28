import React, { useState, useEffect } from 'react'
import '../styles/Slider.css'
import { useAppContext } from '../app_context'

import play from '../assets/imgs/play.svg'
import add from '../assets/imgs/add.svg'

const img_url = 'https://image.tmdb.org/t/p/w1280'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const { trending_movies: sliders } = useAppContext()

  useEffect(() => {
    let slideFunc = setInterval(() => {
      setIndex(index + 1)
    }, 7000)
    if (index < 0) {
      setIndex(sliders.length - 1)
    }
    if (index > sliders.length - 1) {
      setIndex(0)
    }
    return () => clearInterval(slideFunc)
    // eslint-disable-next-line
  }, [index])

  return (
    <>
      <div className='slider-container'>
        {sliders.map((slider, idx) => {
          const { backdrop_path, title } = slider
          let position = 'nextSlide'
          if (idx === index) {
            position = 'activeSlide'
          }
          if (
            idx === index - 1 ||
            (index === 0 && idx === sliders.length - 1)
          ) {
            position = 'prevSlide'
          }
          return (
            <React.Fragment key={idx}>
              <img
                className={`banner ${position}`}
                src={img_url + backdrop_path}
                alt={title}
              />
              <div className='btn-container'>
                <div className='slider-btn now'>
                  <img src={play} alt='' />
                  <a href='/#'>Watch Now</a>
                </div>
                <div className='slider-btn later'>
                  <img src={add} alt='' />
                  <a href='/#'>Watch Later</a>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>

      <div className='ind-container'>
        {sliders.map((_, idx) => {
          let sClass = ''
          if (index === idx) {
            sClass = 'active'
          }
          return (
            <div
              key={idx}
              className={`indicator ${sClass}`}
              onClick={() => setIndex(idx)}
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default Slider
