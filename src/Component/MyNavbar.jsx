import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamburger from 'hamburger-react'
import { HouseDoorFill, InfoCircleFill, PersonCheck, PersonFillCheck } from "react-bootstrap-icons";

const MyNavbar = () => {

    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleClose = () => setOpen(false);
    const handleShow = () => setShow(true);

    const renderSectionContent = () => {
        switch (activeSection) { 
            case 'home':
                return <p>Home content goes here.</p>;  
            case 'azienda':
                return <Row className="justify-content-center">
                            <p className="text-center">Sezione Azienda </p>
                            <Button variant="info" className="w-75">Direzione strategica</Button>
                            <Button variant="info" className="mt-1 w-75">Area direzione generale</Button>
                            <Button variant="info" className="mt-1 w-75">Area sanitaria</Button>
                            <Button variant="info" className="mt-1 w-75">Area amministrativa</Button>
                            <Button variant="info" className="mt-1 w-75">Attività Istituzionali</Button>
                            <Button variant="info" className="mt-1 w-75">Dipartimenti</Button>
                            <Button variant="info" className="mt-1 w-75">Curricula Dirigenti</Button>
                            <Button variant="info" className="mt-1 w-75">Carta Nazionale Dei Servizi</Button>
                        </Row>;
            case 'strutture':
                return  <Row className="justify-content-center">
                            <p className="text-center">Sezione Strutture</p>
                            <Button variant="info" className="w-75">Presidi Ospedalieri</Button>
                            <Button variant="info" className="w-75">Distretti Sanitari</Button>
                            <Button variant="info" className="w-75">Strutture accreditate</Button>
                            <Button variant="info" className="w-75">AID, RSA, e Hospice </Button>


                            
                        </Row>;

            case 'cittadino':
                return <p>Cittadino content goes here.</p>;
            case 'informati':
                return <p>Informazioni content goes here.</p>;
            case 'contatti':
                return <p>Contatti content goes here.</p>;
            case 'privacy':
                return <p>Home content goes here.</p>;
            default:
                return <p>Select a section.</p>;
        }
    };

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
                    className="me-2 bg-light text-black"
                    aria-label="Search"
                  />
                  <Button className="text-white" variant="outline-success">Cerca</Button>
            </Form>
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <Offcanvas placement="end" show={isOpen} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('home')}>Home</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('azienda')}>Azienda</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('strutture')}>Strutture</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('cittadino')}>Cittadino</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('informati')}>Informati</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('contatti')}>Contatti</Button>
                            </Col>
                        </Row>

                        <hr />
                        {renderSectionContent()}
                    </Offcanvas.Body>
                </Offcanvas>
        
      </Navbar>

      <Container className="rounded text-center text-white bg-primary mt-3 py-3 w-75">
            <Row>
                <Col>
                    <Nav.Link><span><HouseDoorFill/></span>Asl a casa tua</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link><span><PersonFillCheck/></span>Vaccinazioni</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link><span><InfoCircleFill/></span>Informazioni</Nav.Link>
                </Col>
            </Row>
      </Container>
        </>
    );
};

export default MyNavbar;
