import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const MyNavbar = () => {

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" className="fs-5">
        
        
          <Navbar.Brand href="#home" className="me-5"> <img src="https://www.aslnapoli2nord.it/templates/shaper_educon/images/presets/preset1/logo.png"/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.regione.campania.it/"> <img style={{verticalAlign: "text-top"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Regione-Campania-Stemma.svg/1200px-Regione-Campania-Stemma.svg.png" width={20 + "em"}/> Regione Campania</Nav.Link>
            <Nav.Link href="#features">Amministrazione Trasparente</Nav.Link>
            <Nav.Link href="#pricing">Albo Pretorio</Nav.Link>
          </Nav>
        
      </Navbar>
        </>
    );
};

export default MyNavbar;
