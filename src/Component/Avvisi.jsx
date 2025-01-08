import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Avvisi = () => {
    const titleStyle = {
        minHeight: "70px", // per non avere dislivelli
            display: "flex",
            alignItems: "flex-start",
        };
        

    const cardBodyStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    };
    return (
    <>
    <Container className="text-start mt-5 mb-5">
                <h2>Avvisi</h2>
                <Row>
                    <Col md={4} className="d-flex flex-column">
                        <Card className="h-100">
                            <Card.Body style={cardBodyStyle} className="bg-primary">
                               <Card.Text>
                                    Convocazione prova colloquio - Avviso pubblico mobilità intraregionale, per titoli e colloquio, per la copertura a tempo pieno ed indeterminato a n.1. posto di Dirigente Veterinario - Area A - Sanità animale
                                </Card.Text>
                                <Card.Footer>18 Ottobre 2024</Card.Footer>
                                <Button variant="secondary">Leggi</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex flex-column">
                        <Card className="h-100">
                            <Card.Body style={cardBodyStyle} className="bg-primary">
                               <Card.Text>
                               Convocazione prova colloquio - Avviso pubblico mobilità intraregionale, per titoli e colloquio, per la copertura a tempo pieno ed indeterminato a n.1. posto di Dirigente Veterinario - Area A - Sanità animale
                                </Card.Text>
                                <Card.Footer>17 Ottobre 2024</Card.Footer>
                                <Button variant="secondary">Leggi</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </>
        );
    };
export default Avvisi;
