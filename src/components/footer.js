import React from 'react';
import { MDBFooter, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "../Assets/css/footer.css"

export default function Footer() {
  return (
    <MDBFooter bgColor='' className='pt-3 footer-custom  text-24 w-custom'>
      <hr />
      <MDBRow>

        <MDBCol sm="12" md="9" >

          <MDBRow>

            <MDBCol  sm="12"  className="custom-padding">

              <ul className='list-unstyled line mb-0'>
                <li>
                  <a href='/' className='text-dark' style={{ textDecoration: 'none' }}>
                    Home
                  </a>
                </li>
              </ul>

              <ul className='list-unstyled line mb-0'>
                <li>
                  <a href='/about' className='text-dark' style={{ textDecoration: 'none' }}>
                    About
                  </a>
                </li>
              </ul>

              <ul className='list-unstyled line mb-0'>
                <li>
                  <a href='#!' className='text-dark' style={{ textDecoration: 'none' }}>
                    Contact Us
                  </a>
                </li>
              </ul>

              <ul className='list-unstyled line mb-0 pb-4'>
                <li>
                  <a href='#!' className='text-dark' style={{ textDecoration: 'none' }}>
                    Careers
                  </a>
                </li>
              </ul>
            </MDBCol>

            {/* <MDBCol className="">
              <ul className='list-unstyled line mb-0'>
                <li>
                  <a href='#!' className='text-dark' style={{ textDecoration: 'none' }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>

              <ul className='list-unstyled line mb-0'>
                <li>
                  <a href='#!' className='text-dark' style={{ textDecoration: 'none' }}>
                    Terms of Use
                  </a>
                </li>
              </ul>
            </MDBCol> */}

          </MDBRow>

        </MDBCol>

        <MDBCol className='social-padding'>
          <ul className='list-unstyled line mb-0'>
            <li>
              <a href='https://twitter.com/Afaq_Ahmed77' className='text-dark text-18' style={{ textDecoration: 'none' }}>
                Twitter
              </a>
            </li>
          </ul>

          <ul className='list-unstyled line mb-0'>
            <li>
              <a href='https://instagram.com/h_afaq_ahmed' className='text-dark' style={{ textDecoration: 'none' }}>
                Instagram
              </a>
            </li>
          </ul>
        </MDBCol>

      </MDBRow>

      {/* <div className='text-center text-light p-2'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
      </div> */}
    </MDBFooter>
  );
}