import React, { Suspense } from 'react'
import { Col, Row } from 'react-bootstrap'
import "../Assets/css/loader.css"

const PressHeader = React.lazy (()=> import('../components/Contact/ContactHeader'))
const PressPara = React.lazy (()=> import('../components/Contact/PressPara'))
const Text = React.lazy (()=> import('../components/Contact/Text'))
const Media = React.lazy (()=> import('../components/Contact/MediaLinks'))

function Press() {
  return (
<Suspense fallback={<div className="loader-parent"><div class="loader"></div></div>}>
    <div className='bg-black'>
      <Row>
        <Col md="6">
          <PressHeader />
        </Col>
        <Col>
          <PressPara />
        </Col>
      </Row>
      <Text />
      <Media />
    </div>
    </Suspense>
  )
}

export default Press
