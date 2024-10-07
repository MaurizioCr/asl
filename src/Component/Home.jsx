import { Col, Container, Row, Nav } from "react-bootstrap";
import { HouseDoorFill, InfoCircleFill, PersonFillCheck } from "react-bootstrap-icons";
import prevenzione from "../Assets/download.jpeg";

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

        <Row className="w-100 mx-0"> 
            <Col className="px-0"> 
                <img src={prevenzione} className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Prevenzione" />
            </Col>
        </Row>

    </>
    )
};

export default Home;

