import React from 'react'
import './Slider.css'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
const Slider = () => {
  const scroll = () => {
    window.scrollTo(0, 1000)
  }
  return (
    <div className="bd-example slider-container">
      <div id="carouselExampleCaptions" className="carousel slide slider-inner" data-ride="carousel">
        <div className="carousel-inner slider-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
            <div className="slider-caption">
              <h1><span>visit</span> Tajmahal</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button onClick={scroll}>Book now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
            <div className="slider-caption">
              <h1><span>visit</span> Ladakh</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button onClick={scroll}>Book now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
            <div className="slider-caption">
              <h1><span>visit</span> Paris</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <button onClick={scroll}>Book now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..." />
            <div className="slider-caption">
              <h1><span>visit</span> Kashmir</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <button onClick={scroll}>Book now</button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />

        </a>
      </div>
    </div>



  )
}

export default Slider