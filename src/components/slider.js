import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Slider1 from "../Assets/images/slider1.jpg";
import Slider2 from "../Assets/images/slider2.jpg";
import Slider3 from "../Assets/images/slider3.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import "../Assets/css/slider.css"
import { useEffect } from 'react';

function Slider() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Carousel>
      <Carousel.Item className='custom-height'>
       <Image src={Slider1} className=' custom-size'/>
        <Carousel.Caption>
          <h1 className='text-100' data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Deu Labs.</h1>
          <h1 data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="8500">Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Slider2} className=' custom-size'/>

        <Carousel.Caption>
          <h1 className='text-100' data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Yuga.com</h1>
          <h1 data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="8500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Slider3} className=' custom-size'/>

        <Carousel.Caption>
          <h1 className='text-100' data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">I Am XBT</h1>
          <h1 data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="8500">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;