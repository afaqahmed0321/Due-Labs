import React from 'react'
import '../../Assets/css/example.css'
import port1 from '../../Assets/images/port1.jpg'
import port2 from '../../Assets/images/port2.jpg'
import land2 from '../../Assets/images/land2.jpg'
import land3 from '../../Assets/images/land3.jpg'
import land4 from '../../Assets/images/land4.jpg'
import land5 from '../../Assets/images/land5.jpg'
import land6 from '../../Assets/images/land6.jpg'
import land7 from '../../Assets/images/land7.jpg'
import land8 from '../../Assets/images/land8.jpg'


function Example() {


  return (
    <body>
      <div className="external">
        <div className="horizontal-scroll-wrapper external1">
          <div className="img-wrapper slower">
            <a href="/" target="_blank" rel="noopener"><img src={port1} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper faster">
            <a href="/" target="_blank" rel="noopener">
              <img src={land4} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower vertical">
            <a href="/" target="_blank" rel="noopener">
              <img src={port2} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower slower-down">
            <a href="/" target="_blank" rel="noopener">
              <img src={land3} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper">
            <a href="/" target="_blank" rel="noopener">
              <img src={land4} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower">
            <a href="/" target="_blank" rel="noopener">
              <img src={land2} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper faster1">
            <a href="/" target="_blank" rel="noopener">
              <img src={land5} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower slower2">
            <a href="/" target="_blank" rel="noopener">
              <img src={land6} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper">
            <a href="/" target="_blank" rel="noopener">
              <img src={land7} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower">
            <a href="/" target="_blank" rel="noopener">
              <img src={land8} alt="alternate" />
            </a>
          </div>
          <div className="img-wrapper slower last">
            <a href="/" target="_blank" rel="noopener">
              <img src={land2} alt="alternate" />
            </a>
          </div>
        </div>
        <header>

          <p>THE YUGAVERSE THE YUGAVERSE THE </p>
        </header>
      </div>
    </body>

  )
}

export default Example
