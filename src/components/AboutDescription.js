import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutDescription() {
    return (
        <div>
            <Row className='mt-5 pl-5 text-center w-100'>
                <Col sm="12" className='pb-5 mb-5'>
                    <span className='text-100 custom-line'>DEU.</span>
                </Col>
                <Col sm="12" className='p-5'>
                    <p className='text-100 custom-line-about-des pt-5 mt-5 text-start'>YUGA LABS IS
                        SHAPING THE FUTURE OF WEB3 THROUGH STORYTELLING, EXPERIENCES, AND COMMUNITY.</p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutDescription
