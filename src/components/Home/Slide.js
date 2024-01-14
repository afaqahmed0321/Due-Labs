import React from 'react'
import '../../Assets/css/Slide.css'
import port1 from '../../Assets/images/port1.jpg'
import port2 from '../../Assets/images/port2.jpg'
import port4 from '../../Assets/images/port4.jpg'

function Slide() {
  return (
    <div>
      <article>
        <figure>
          <img src={port4} alt="alternate" />
        </figure>
        <section>
          <div>
            <h1>Deu Labs</h1>
            <p className='text-justify p-5'>We believe that the potential of web3 can be realized when we start with imagination, not limitations.</p>
          </div>
        </section>
        <figure>
          <img src={port2} alt="alternate" />
        </figure>
        <section>
          <div>
            <h2>Xerobit<br />
              “Technologies”</h2>
            <p className='p-5'>Ramajero Argonauta, Enredique Amanuense de #CSS.</p>
          </div>
        </section>
        <figure>
          <img src={port1} alt="alternate" />
        </figure>
        <section>
          <div>
            <p className='text-justify p-5'>#impoCSSible inside EsCSS. A Spanish blog where the borders &amp; limits of #CSS disappear.</p>
          </div>
        </section>
      </article>
    </div>

  )
}

export default Slide
