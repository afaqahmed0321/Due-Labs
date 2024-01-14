import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Col, Row } from 'react-bootstrap';


function PressPara() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='p-5'>
      <Row>
        <Col sm="9" className="description">
          <div className="text-100 text-light description" data-aos="fade-left" data-aos-duration="2000">
            <p className='text-justify '><span className=''> We believe that the potential of web3 can be realized when we start with imagination, not limitations.</span></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PressPara
