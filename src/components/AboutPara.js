import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css';

function AboutPara() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="20000">
            <Row className='mt-5 pl-5'>
                <Col lg="6" className='mb-5 p-5'>
                    <span className='custom-line-about-para text-60 ml-5'>Founded by four friends, the company began as a text message — "Let's make a NFT".</span>
                </Col>
                <Col className='p-5'>
                    <p className='text-25 custom-para-about'>The company’s flagship collection, Bored Ape Yacht Club (BAYC), launched in April 2021, with each NFT doubling as a membership to the community. Inspired by the early crypto adopters who aped in, struck gold, yet always seemed bored – 10,000 Bored Apes were minted for roughly $200 at the time.</p>
                    <p className='text-25 custom-para-about'>The NFT collection sold out in the early morning of May 1st, 2021, and an incredible community began to form almost immediately.</p>
                    <p className='text-25 custom-para-about'>That community soon multiplied with the creation of 10,000 dog companions for the apes (Bored Ape Kennel Club) and 20,000 Mutant Apes (Mutant Ape Yacht Club), half of which were minted via a first-of-its-kind mechanic involving serums.</p>
                    <p className='text-25 custom-para-about'>2022 was a year of rapid growth for Yuga. The Yugaverse expanded beyond BAYC with the announcement of Otherside, a gamified metaverse. Popular NFT collections CryptoPunks, Meebits, and 10KTF also joined the party, bringing new IP, reach, and community to Yuga.</p>
                    <p className='text-25 custom-para-about'>Through all of this growth and innovation, the team has continued to prioritize the web3 values of decentralization and ownership. Yuga has been a pioneer at every turn, including hosting exclusive festivals, events, merch drops, and collaborations accessible to holders of NFTs.</p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutPara
