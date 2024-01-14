import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasNavbar() {
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="bottom" className="bg-black mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className="p-3 text-white">Deu Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-white mx-3"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-black"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-white'>
                  Deu Labs
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="p-3 text-white">Home</Nav.Link>
                  <Nav.Link href="/about" className="p-3 text-white">About</Nav.Link>
                  <Nav.Link href="/press" className="p-3 text-white">Press</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNavbar;