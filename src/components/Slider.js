import React, { useState, useEffect } from 'react'
import '../styles/Slider.css'
import { useFetch } from '../useFetch'
import play from '../assets/imgs/play.svg'
import add from '../assets/imgs/add.svg'

const img_url = 'https://image.tmdb.org/t/p/w1280'

const Slider = ({ url }) => {
    const [index, setIndex] = useState(0)

    const { movies } = useFetch(url)
    const sliders = movies.slice(0, 5)

    useEffect(() => {
        if (index < 0) {
            setIndex(sliders.length - 1)
        }
        if (index > sliders.length - 1) {
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        let slideFunc = setInterval(() => {
            setIndex(index + 1)
        }, 4000);
        return () => clearInterval(slideFunc)
    }, [index])

    return (
        <div className="slider-container">
            {sliders.map((slider, idx) => {
                const { backdrop_path, title } = slider
                let position = 'nextSlide'
                if (idx === index) {
                    position = 'activeSlide'
                }
                if (idx === index - 1) {
                    position = 'prevSlide'
                }
                return <>
                    <img className={position} src={img_url + backdrop_path} alt={title} />
                    <div className="btn-container">
                        <div className="now">
                            <img src={play} alt="" />
                            <a href="#">Watch Now</a>
                        </div>
                        <div className="later">
                            <img src={add} alt="" />
                            <a href="#">Watch Later</a>
                        </div>
                    </div>
                </>
            })}
        </div>
    )
}

export default Slider
