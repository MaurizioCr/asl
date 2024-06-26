import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const MyNavbar = () => {

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" className="fs-5">
        
        
          <Navbar.Brand href="#home" className="me-5"> <img width={85 + "em"} src="https://www.aslnapoli2nord.it/templates/shaper_educon/images/presets/preset1/logo.png"/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.regione.campania.it/"> <img style={{verticalAlign: "text-top"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Regione-Campania-Stemma.svg/1200px-Regione-Campania-Stemma.svg.png" width={20 + "em"}/> Regione Campania</Nav.Link>
            <Nav.Link href="#">Amministrazione Trasparente</Nav.Link>
            <Nav.Link href="#">Albo Pretorio</Nav.Link>
          </Nav>
          <Nav className="text-right me-3">
            <Nav.Link href="#"><img  width={30 + "em"} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>Area Dipendenti</Nav.Link> 
          </Nav>
        
      </Navbar>
        </>
    );
};

export default MyNavbar;
