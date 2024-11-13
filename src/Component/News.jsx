import { Button, Col, Container, Row } from "react-bootstrap";

const News = () => {
    return (
    <>
        <Container>
            <h1 className="mb-5">Ultime notizie</h1>
            <Row>
                <Col className="col-3 d-flex flex-column justify-content-between">
                    <h3>Atto aziendale</h3>
                </Col>

                <Col className="col-3 ms-3 d-flex flex-column justify-content-between">
                    <h3>PNES - Contrastare la povertà</h3>
                </Col>
                <Col className="col-3 ms-3 d-flex flex-column justify-content-between">
                    <h3>Nomenclatore Tariffario Regionale</h3>
                </Col>
            <Row>
            
            </Row>
                
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
                    <Row>
                        <h3>Scegli come prenotare</h3>    
                        <Col className="col-3 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow bg-primary ">
                            <p>Per limitare il flusso di assistiti negli Ospedali e nei Distretti, viene garantita l’assistenza sanitaria in sicurezza presso tutte le strutture</p>
                            <Button variant="secondary">Leggi</Button>
                        </Col>
                    </Row>
            </Row>
        </Container>
    </>
)
}

export default News;