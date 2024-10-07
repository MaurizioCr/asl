import { Col, Container, Row, Nav } from "react-bootstrap";
import { HouseDoorFill, InfoCircleFill, PersonFillCheck } from "react-bootstrap-icons";

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
    </>
    )

};

export default Home;