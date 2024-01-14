import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../../Assets/css/HomePara.css'
import { Col, Row } from 'react-bootstrap';


function HomePara() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='p-5'>
      <Row>
        <Col sm="8" className="">
          <div className="text-24 HomePara-custom-sizing" data-aos="fade-left" data-aos-duration="2000">
            <p className="text-justify">We believe that the potential of web3 can be realized when we start with imagination, not limitations. No borders, no rulers, just people making cool shit, together. In the Yugaverse, fans and players are owners and creators, and in the game of web3, everyone can create and play together on one team.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HomePara
