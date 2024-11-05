import { Button, Col, Container, Row } from "react-bootstrap";

const InEvidenza = () => {
    return (
    <>
            <Container className="text-start mt-5 mb-5">
                <h2>In evidenza</h2>
                <Row>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Esenzioni Ticket </h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Fascicolo Elettronico </h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-4 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Scelta/revoca medico o pediatra </h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>118 - Emergenza ed Urgenza Pre-Ospedaliera</h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Prenota le tue visite ed esami</h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-4 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Rete Oncologica</h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Malattie rare</h2>
                        <Button>Approfondisci</Button>
                    </Col>
                    <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow">
                        <h2>Rilascio cartelle cliniche</h2>
                        <Button>Approfondisci</Button>
                    </Col>
                </Row>
            </Container>
    </>
        );
    };
    
    export default InEvidenza;