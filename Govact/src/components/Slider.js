import React from 'react'
import {Carousel} from 'react-bootstrap'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
export default function Slider() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
    style={{height:"100vh"}}
      className="d-block w-100"
      src={one}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>مواطنون يطلقون حملة نظافة</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        style={{height:"100vh"}}

      className="d-block w-100"
      src={two}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>ابتاءا من اليوم عمال النظافة يعقمون الشوارع يوميا </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        style={{height:"100vh"}}

      className="d-block w-100"
      src={three}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>  عمال النظافة يعقمون الشوارع يوميا </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}