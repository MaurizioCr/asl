import { Col, Container, Row, Nav, Carousel, Button, Card } from "react-bootstrap";

const MyFooter = () => {
    const titleStyle = {
        minHeight: "70px", // per non avere dislivelli
            display: "flex",
            alignItems: "flex-start",
        };
        


    return (
    <>
<Container className="square border border-0 px-3 py-3">
                <Row className="mb-5">
                    
                        <Col md={3} className="border border-gray py-2 my-2 d-flex flex-column justify-content-between shadow">
                            <h5 style={titleStyle}>Contatti</h5>
                                <Card className="h-100">
                                    <Card.Body className="bg-primary">
                                        <Card.Text>
                                            <p>Via Lupoli, 27 - 80027 Frattamaggiore</p>
                                            <p>C.F 96024110635</p>
                                            <p>P.IVA 06321661214</p>
                                        </Card.Text>
                                        <Button variant="secondary">Leggi</Button>
                                    </Card.Body>
                                </Card>
                        </Col>
                </Row>
</Container>
</>
   );
};

export default MyFooter;