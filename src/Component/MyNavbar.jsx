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
                            <Button variant="info" className="mt-1 w-75">Presidi Ospedalieri</Button>
                            <Button variant="info" className="mt-1 w-75">Distretti Sanitari</Button>
                            <Button variant="info" className="mt-1 w-75">Strutture accreditate</Button>
                            <Button variant="info" className="mt-1 w-75">AID, RSA, e Hospice </Button>
                            <Button variant="info" className="mt-1 w-75">AFT</Button>
                        </Row>;

            case 'cittadino':
                return <Row className="justify-content-center">
                            <p className="text-center">Sezione Cittadino</p>
                            <Button variant="info" className="mt-1 w-75">Prevenzione</Button>
                            <Button variant="info" className="mt-1 w-75">Tutela</Button>
                            <Button variant="info" className="mt-1 w-75">Cura e assistenza</Button>
                            <Button variant="info" className="mt-1 w-75">Guida ai servizi</Button>
                            <Button variant="info" className="mt-1 w-75">PNES, contrastare la povertà sanitaria</Button>
                        </Row>;;
            case 'informati':
                return <Row className="justify-content-center">
                            <p className="text-center">Sezione Informati</p>
                            <Button variant="info" className="mt-1 w-75">Come fare</Button>
                            <Button variant="info" className="mt-1 w-75">News</Button>
                            <Button variant="info" className="mt-1 w-75">Eventi</Button>
                            <Button variant="info" className="mt-1 w-75">Ufficio stampa</Button>
                            <Button variant="info" className="mt-1 w-75">Avvisi</Button>
                            <Button variant="info" className="mt-1 w-75">Amministrazione trasparente</Button>
                        </Row>
            case 'contatti':
                return <Row className="justify-content-center">
                            <p className="text-center">Sezione Contatti</p>
                            <Button variant="info" className="mt-1 w-75">URP</Button>
                            <Button variant="info" className="mt-1 w-75">CUP</Button>
                            <Button variant="info" className="mt-1 w-75">Segnala</Button>
                            <Button variant="info" className="mt-1 w-75">Chiedi</Button>
                            <Button variant="info" className="mt-1 w-75">Richieste e segnalazioni</Button>
                            <Button variant="info" className="mt-1 w-75">Partecipazione democratica elettronica</Button>
                        </Row>
            case 'privacy':
                return <Row className="justify-content-center">
                            <p className="text-center">Sezione Privacy</p>
                        </Row>

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
                        <a href="https://www.aslnapoli2nord.it/index.php/it/contatti">
                        <Row>
                            <Col>
                                <Button variant="primary" className="w-100 mb-2" onClick={() => setActiveSection('privacy')}>Privacy</Button>
                            </Col>
                        </Row> 
                        </a>

                        <hr />
                        {renderSectionContent()}
                    </Offcanvas.Body>
                </Offcanvas>
        
      </Navbar>

      
        </>
    );
};

export default MyNavbar;
