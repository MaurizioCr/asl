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
                               Riapertura Termini dell'Avviso interno di manifestazione di interesse per infermiere da inserire nelle attività territoriali in qualità di infermieri di famiglia e o di comunità (IFoC) approvato con deliberazione n.1800 del 25.09.2024.
                                </Card.Text>
                                <Card.Footer>18 Ottobre 2024</Card.Footer>
                                <a href="https://aslnapoli2nord.portaleamministrazionetrasparente.it/archivio22_bandi-di-concorso_0_24047_874_1.html"><Button variant="secondary">Leggi</Button></a>
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
                                <a href="https://aslnapoli2nord.portaleamministrazionetrasparente.it/archivio22_bandi-di-concorso_0_24045_874_1.html"><Button variant="secondary">Leggi</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="d-flex flex-column">
                        <Card className="h-100">
                            <Card.Body style={cardBodyStyle} className="bg-primary">
                               <Card.Text>
                               Nomina dei vincitori - Selezione pubblica, per titoli e per colloquio, ai sensi dell'art. 15 octies del D.Lgs. n. 502 92 e ss.mm. ii., per il conferimento di n. 2 (due) incarichi libero professionali, per la durata di anni 1 (uno), nel profilo professionale di Educatore Professionale Socio-Pedagogico, finalizzato alla realizzazione del progetto "Piano di intervento GAP ASL NA 2 NORD" - D.G.R.C. 201 2020 - "Piano regionale 2019 2020 di contrasto al disturbo da gioco d'azzardo" - PR 207 - Ordine interno: 10001213 - PR 225 - Ordine interno: 1001266. Giusta Deliberazione n. 1125 del 26 06 2023. Presa d'atto e approvazione dei lavori della Commissione Esaminatrice.
                                </Card.Text>
                                <Card.Footer>17 Ottobre 2024</Card.Footer>
                                <a href="https://www.aslnapoli2nord.it/index.php/it/#:~:text=17%20ottobre%202024-,Scopri,-Avviso%20di%20selezione"><Button variant="secondary">Leggi</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="d-flex flex-column">
                        <Card className="h-100">
                            <Card.Body style={cardBodyStyle} className="bg-primary">
                               <Card.Text>
                               Avviso di selezione per il conferimento dell'incarico triennale di Coordinatore delle attività formative professionalizzanti e di tirocinio nella sede della formazione universitaria ASL NA 2 Nord sede di Frattamaggiore
                                </Card.Text>
                                <Card.Footer>16 Ottobre 2024</Card.Footer>
                                <a href="https://aslnapoli2nord.portaleamministrazionetrasparente.it/archivio22_bandi-di-concorso_0_23985_874_1.html"><Button variant="secondary">Leggi</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
    </>
        );
    };
export default Avvisi;
