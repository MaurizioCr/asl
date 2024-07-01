import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamburger from 'hamburger-react'

const MyNavbar = () => {

    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const handleClose = () => setOpen(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" className="fs-5 text-white">
        
        
          <Navbar.Brand href="#home" className="me-5"> <img width={65 + "em"} src="https://www.aslnapoli2nord.it/templates/shaper_educon/images/presets/preset1/logo.png"/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="https://www.regione.campania.it/"> <img style={{verticalAlign: "text-top"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Regione-Campania-Stemma.svg/1200px-Regione-Campania-Stemma.svg.png" width={20 + "em"}/> Regione Campania</Nav.Link>
            <Nav.Link className="text-white" href="#">Amministrazione Trasparente</Nav.Link>
            <Nav.Link className="text-white" href="#">Albo Pretorio</Nav.Link>
          </Nav>
          <Nav className="text-right me-3">
            <Nav.Link className="text-white" href="#"><img  width={30 + "em"} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>Area Dipendenti</Nav.Link> 
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Cerca"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="text-white" variant="outline-success">Cerca</Button>
            </Form>
            <Hamburger toggled={isOpen} toggle={setOpen} />

      <Offcanvas placement="end" show={isOpen} onClick={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        
      </Navbar>

      <Container className="rounded text-center text-white bg-primary mt-3 py-3 w-75">
            <Row>
                <Col>
                    <Nav.Link>Asl a casa tua</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link>Vaccinazioni</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link>Informazioni</Nav.Link>
                </Col>
            </Row>
      </Container>
        </>
    );
};

export default MyNavbar;
