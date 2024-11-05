import { Button, Col, Container, Row } from "react-bootstrap";

const News = () => {
    return (
        <>
         <Container>
            <h2>Ultime notizie</h2>
            <Row>
                <h3>Atto aziendale</h3>
                    <Col className="col-2 border border-gray ps-3 py-3 m-2 d-flex flex-column justify-content-between shadow bg-primary ">
                        <p>Atto Aziendale dell’ Azienda Sanitaria Locale Napoli 2 nord adottato con la Delibera aziendale 2131 del 21-11-2023 </p>
                        <Button variant="secondary">Leggi</Button>
                    </Col>
            
            </Row>
         </Container>
        </>
    )
}

export default News;