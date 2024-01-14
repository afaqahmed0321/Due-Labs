import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import '../../Assets/css/Para.css'


function Para() {
    return (
        <div>
            <Row className='mt-5 pl-5 px-5'>
                <Col sm="8" className='pb-5 mb-5'>
                    <span className='text-100 custom-line'>THE YUGAVERSE RUNS ON APECOIN.</span>
                </Col>
                <Col sm="8">
                    <p className='text-42 custom-line pt-5 mt-5 text-start'>Owned and operated by the ApeCoin DAO, APE is a token supporting what’s next in web3. Yuga Labs is a contributor to ApeCoin, a community member of the ApeCoin DAO, and will be using ApeCoin as the primary token in Yuga Labs projects.</p>
                    <Button className="btn-dark Learn-More-button rounded-pill para-custom-sizing">Learn More</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Para
