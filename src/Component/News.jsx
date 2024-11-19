import { Button, Card, Col, Container, Row } from "react-bootstrap";

const News = () => {
    return (
    <>
        <Container className="square border border-5">
            <h1 className="mb-5">Ultime notizie</h1>
            <Row className="mb-5 ">
                <Col className="col-3 d-flex flex-column justify-content-between">
                    <h3>Atto aziendale</h3>
                </Col>

                <Col className="col-3 ms-3 d-flex flex-column justify-content-between">
                    <h3>PNES - Contrastare la povertà</h3>
                </Col>
                <Col className="col-3 ms-3 d-flex flex-column justify-content-between">
                    <h3>Nomenclatore Tariffario Regionale</h3>
                </Col>
                
                <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow bg-primary ">
                    <p>Atto Aziendale dell’ Azienda Sanitaria Locale Napoli 2 nord adottato con la Delibera aziendale 2131 del 21-11-2023 </p>
                    <Button variant="secondary">Leggi</Button>
                </Col>            
                <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow bg-primary ">
                    <p>Il Programma Nazionale Equità nella Salute 2021-2027 interviene per rafforzare i servizi sanitari e renderne più equo l’accesso </p>
                    <Button variant="secondary">Leggi</Button>
                </Col>
                <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow bg-primary ">
                    <p>Contiene l'elenco delle prestazioni di assistenza specialistica ambulatoriale con le relative tariffe, erogabili dal SSR </p>
                    <Button variant="secondary">Leggi</Button>
                </Col>
                    
            </Row>

            <Row className="mt-5 pt-5">
                <Col className="col-3 ms-3">
                    <h3>Scegli come prenotare</h3>
                    <Card style={{  }}>     
                        <Card.Body className="bg-primary">
                            <Card.Text>
                                Per limitare il flusso di assistiti negli Ospedali e nei Distretti, viene garantita l’assistenza sanitaria in sicurezza presso tutte le strutture
                            </Card.Text>
                            <Button variant="secondary">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-3 ms-3 ps-3 py-3">
                    <h3>Progetti Finanziati con fondi a specifica destinazione</h3>
                    <Card style={{  }}>     
                        <Card.Body className="bg-primary">
                            <Card.Text>
                            L’Azienda è particolarmente interessata a sviluppare e implementare progetti di ricerca dal carattere fortemente innovativo.
                            </Card.Text>
                            <Button variant="secondary">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-3 ms-3 ps-3 py-3">
                    <h3>Piano regionale prevenzione 2020-2025</h3>
                    <Card style={{  }}>     
                        <Card.Body className="bg-primary">
                            <Card.Text>
                            È lo strumento di pianificazione centrale degli interventi di prevenzione e promozione della salute, da realizzare sul territorio.
                            </Card.Text>
                            <Button variant="secondary">Leggi</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
)
}

export default News;