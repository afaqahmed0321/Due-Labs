import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import '../../Assets/css/media.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Media(props) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <h1 className="custom-text-media text-white text-200 text-start" data-aos="fade-up" data-aos-duration="500">FOLLOW US ON</h1>
      <Row>
        <Col sm="12">
          <Button className="Download-button-media text-200" data-aos="fade-up" data-aos-duration="500">INSTAGRAM</Button>
        </Col>
        <Col sm="12">
          <Button className="Download-button-media text-200" data-aos="fade-up" data-aos-duration="500">DISCORD</Button>
        </Col>
        <Col sm="12">
          <Button className="Download-button-media text-200" data-aos="fade-up" data-aos-duration="500">TWITTER</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Media
