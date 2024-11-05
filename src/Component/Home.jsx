import { Col, Container, Row, Nav, Carousel, Button } from "react-bootstrap";
import { HouseDoorFill, InfoCircleFill, PersonFillCheck } from "react-bootstrap-icons";
import numeroverde from "../Assets/numero.png";
import Prevenzione from "../Assets/download.jpeg";
import InEvidenza from "./InEvidenza";
import News from "./News";

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

        <Container>
            <Carousel
                className="mt-3 bg-primary rounded mb-5"
                interval={3000}
                controls={true}
                indicators={true}
                style={{ height: "300px", overflow: "hidden" }}
            >
                <Carousel.Item>
                    <Row className="text-center mt-3">
                        <Col className="px-0">
                            <img
                                src={numeroverde}
                                alt="Numero Verde"
                                style={{ height: "100%", objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
                    <Row className="text-center mt-3 mb-2">
                        <h2>Prenota da casa</h2>
                        <p>Grazie al nuovo numero verde potrai prenotare da casa le visite mediche che necessiti.</p>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row className="text-center mt-3">
                        <Col className="px-0">
                            <img
                                src={Prevenzione}
                                alt="Prevenzione"
                                style={{ height: "100%", objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
                    <Row className="text-center mt-3">
                        <h2>Previeni</h2>
                        <p>Previeni gratuitamente alle problematiche più comuni</p>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>

        <InEvidenza/>
        <News/>

        
    </>
    );
};

export default Home;
