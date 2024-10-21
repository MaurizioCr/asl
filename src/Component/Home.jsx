import { Col, Container, Row, Nav, Carousel, Button } from "react-bootstrap"; // Importa Carousel
import { HouseDoorFill, InfoCircleFill, PersonFillCheck } from "react-bootstrap-icons";
import numeroverde from "../Assets/numero.png";
import Prevenzione from "../Assets/download.jpeg";

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
            <Carousel className="mt-3 bg-primary rounded" interval={3000} controls={true} indicators={true}>
                <Carousel.Item>
                    <Row className="text-center mt-3"> 
                           <Col className="px-0"> 
                                <img src={numeroverde} className=""  alt="Numero Verde" />
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
                                    <img src={Prevenzione} className=""  alt="Prevenzione" height={200 + "px"}/>
                                </Col>
                                <Row className="text-center mt-3 mb-2">
                                    <h2>Previeni</h2>
                                    <p>Previeni gratuitamente alle problematiche più comuni</p>
                                </Row>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>

        <Container className="text-start mt-5">
            <h2>In evidenza</h2>
            <Row>
                <Col className="col-3 border border-black ps-3 py-3 m-2">
                    <h2>Esenzioni Ticket </h2>
                    <Button>Approfondisci</Button>
                </Col>
                <Col className="col-3 border border-black ps-3 py-3 m-2 ">
                    <h2>Fascicolo Elettronico </h2>
                    <Button>Approfondisci</Button>
                </Col>
                <Col className="col-4 border border-black ps-3 py-3 m-2">
                    <h2>Scelta/revoca medico o pediatra </h2>
                    <Button>Approfondisci</Button>
                </Col>
            </Row>
        </Container>
        <Container className="text-start mt-5">
            <h2>Ultime News</h2>
        </Container>
    </>
    );
};

export default Home;