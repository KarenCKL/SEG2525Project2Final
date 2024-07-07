import React from 'react'
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap'
import player1 from '../assets/player1.png'
import player3 from '../assets/player3.jpg'
import player4 from '../assets/player4.jpg'
import player6 from '../assets/player6.jpg'
import player7 from '../assets/player7.jpeg'
export default function forum() {
    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-5 fs-3'>Forum Discussion</h3>
                <p className='mt-xl-4 mt-1 pt-1 guide fst-italic'>
                    Here you can discuss anything related to badminton. Feel free to ask questions, share your thoughts and experiences, and connect with other badminton enthusiasts.
                </p>
                <div className='d-flex justify-content-end mb-2 mt-4'>
                    <Button className='bg-secondary border-0' style={{ width: '160px', padding: '8px' }}>Create a New Post</Button>
                </div>
                <Row>
                    <Col>
                        <Card className='mt-2'>
                            <Card.Body>
                                <h5 className='text-info pb-1 pt-1'>Looking to make friends</h5>
                                <Row>
                                    <Row className='mt-2'>
                                        <Col md={1}>
                                            <img src={player1} style={{ width: "100%", border: "1px solid black" }} alt="image showing face of a player" />
                                        </Col>
                                        <Col md={8}>
                                            <p>
                                                <strong>Megan Li:</strong> Hey everyone! I'm new to the Ottawa Badminton Club and looking for some tips on improving my backhand. Any advice or drills you recommend?
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <img src={player6} style={{ width: "100%", border: "1px solid black", marginTop: "15px" }} alt="image showing face of a player" />
                                        </Col>
                                        <Col>
                                            <p className='mt-3'>
                                                <strong>Jane Smith:</strong>  Welcome, Megan! A good drill for backhand improvement is the shadow practice. You can also try doing some wall practice focusing on your backhand technique. Remember to keep your wrist relaxed and use your whole arm for the swing.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <img src={player7} style={{ width: "100%", border: "1px solid black", marginTop: "15px" }} alt="image showing face of a player" />
                                        </Col>
                                        <Col>
                                            <p className='mt-3 pb-4'>
                                                <strong>Sophie Tondreau :</strong>  Hi Megan, I also recommend practicing your footwork and positioning. A good backhand shot requires proper footwork and positioning to execute it well. You can also try watching some tutorials online to get more tips and techniques.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <p>Last reply is 20th June 2024</p>
                                        </Col>
                                        <Col md={8}>
                                            <div className="d-flex justify-content-end mt-2">
                                                <Button className='bg-secondary border-0 me-4' id="loginIdBtn">Read More</Button>
                                                <Button className='bg-primary border-0' id="loginIdBtn">Reply</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Card className='mt-2'>
                            <Card.Body>
                                <h5 className='text-info pb-1 pt-1'>Looking for a partner</h5>
                                <Row>
                                    <Row className='mt-2'>
                                        <Col md={1}>
                                            <img src={player3} style={{ width: "100%", border: "1px solid black" }} alt="image showing face of a player" />
                                        </Col>
                                        <Col md={8}>
                                            <p>
                                                <strong>Franck Wilton</strong> I'm looking for a partner to play doubles with. I'm an intermediate player and would like to play on weekends. Please let me know if you're interested!
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={1}>
                                            <img src={player4} style={{ width: "100%", border: "1px solid black", marginTop: "15px" }} alt="image showing face of a player" />
                                        </Col>
                                        <Col>
                                            <p className='mt-3 pb-4'>
                                                <strong>Eric Fury:</strong>  Hi Franck, I'm interested in playing doubles with you. I'm also an intermediate player and available on weekends. Let's connect and set up a time to play!
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <p>Last reply is 15th June 2024</p>
                                        </Col>
                                        <Col md={8}>
                                            <div className="d-flex justify-content-end mt-2">
                                                <Button className='bg-secondary border-0 me-4' id="loginIdBtn">Read More</Button>
                                                <Button className='bg-primary border-0' id="loginIdBtn">Reply</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Pagination className='d-flex justify-content-center mt-4'>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>...</Pagination.Item>
                        <Pagination.Item>{9}</Pagination.Item>
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Row>
            </Container>
        </div >
    )
}
