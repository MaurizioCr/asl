import { Col, Container, Row, Nav } from "react-bootstrap";
import { HouseDoorFill, InfoCircleFill, PersonFillCheck } from "react-bootstrap-icons";
import numeroverde from "../Assets/numero.png";

const Home = () => {
    return (
    <>
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

        <Row className="text-center mt-3"> 
            <Col className="px-0"> 
                <img src={numeroverde} className=""  alt="Prevenzione" />
            </Col>
        </Row>
        <Container className="text-center my-3">
            <h2>Prenota da casa</h2>
            <p>Grazie al nuovo numero verde potrai prenotare da casa le visite mediche che necessiti.</p>
        </Container>

    </>
    )
};

export default Home;

