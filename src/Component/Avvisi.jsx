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
                                        Manifestazione di interesse all'Avviso Interno UOC Formazione, Aggiornamento e Poli Didattici per la proposta di incarico triennale di Coordinatore delle attività formative, professionalizzanti e di tirocinio nel Corso di Laurea in Infermieristica dell'Università degli Studi della Campania luigi Vanvitelli - Sede Caivano

                                        </Card.Text>
                                        <Card.Footer>18 Ottobre 2024</Card.Footer>
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
