import React from 'react'
import "../../Assets/css/JoinUs.css"
import { Button } from 'react-bootstrap'
// import { Email } from '../Mail/Email'

const JoinUs = () => {
  
  return (
    <div>
      <div className="join-us-container p-5 border-top">
        <h2 className="join-us-heading">JOIN US</h2>
        <div className="join-us-buttons">
          <Button className="btn-dark join-us-button  rounded-pill">Work at Deu</Button>
          <Button className="btn-dark join-us-button rounded-pill">Partner with Deu</Button>
          {/* <Email/> */}
        </div>
      </div>
    </div>
  )
}

export default JoinUs