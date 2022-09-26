import { useState, useEffect } from 'react'
import styles from './Slider.module.css'
import play from '../assets/imgs/play.svg'
import add from '../assets/imgs/add.svg'

import { large_img } from '../utilities/constants'
import { useAppContext } from '../setup/app_context'

const Slider = () => {
  const [index, setIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)
  const { slider_movies: sliders } = useAppContext()

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      setIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
      )
    }

    if (diff < -5) {
      setIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex - 1
      )
    }

    setTouchPosition(null)
  }

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
      <section className={styles.sliderContainer}>
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
            <div
              key={idx}
              className={`${styles.banner} ${styles[position]}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}>
              <img
                src={large_img + backdrop_path}
                alt={title}
                className={styles.sliderImage}
              />

              <div className={styles.btnContainer}>
                <div className={styles.sliderBtn}>
                  <img src={play} alt='play' />
                  <a href='/#'>Watch Now</a>
                </div>
                <div className={`${styles.sliderBtn} ${styles.later}`}>
                  <img src={add} alt='add' />
                  <a href='/#'>Watch Later</a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      <div className={styles.indContainer}>
        {sliders.map((_, idx) => {
          let sClass = ''
          if (index === idx) {
            sClass = 'active'
          }
          return (
            <div
              key={idx}
              className={`${styles.indicator} ${styles[sClass]}`}
              onClick={() => setIndex(idx)}></div>
          )
        })}
      </div>
    </>
  )
}

export default Slider
