import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coach1 from '../assets/coach1.jpg';
import coach2 from '../assets/coach2.jpg';
import coach3 from '../assets/coach3.jpg';
export default function Coaching() {
    return (
        <section id="coaching">
            <Container>
                <h3 className='text-info text-center mt-4 fs-3'>Coachings</h3>
                <p className='mt-xl-4 mt-3 mb-1 guide fst-italic'> 
                    Our professional coaches offer a range of coaching sessions to suit all levels of players. Choose from a variety of coaching options to improve your game.
                </p>
                <Row className='mt-2 mb-4'>
                    <Col md={3}>
                        <Card className='bg-secondary-subtle mt-4'>
                            <Card.Body>
                                <Card.Title className='fs-5'>Beginner</Card.Title>
                                <Card.Text className='fs-6'>$30 per session</Card.Text>
                                <Card.Text className='fs-6'>
                                    Ideal for beginners who are looking to learn the basics of badminton with a coach.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='bg-secondary-subtle mt-4'>
                            <Card.Body>
                                <Card.Title className='fs-5'>Intemediate</Card.Title>
                                <Card.Text className='fs-6'>$60 per session</Card.Text>
                                <Card.Text className='fs-6'>
                                    Suitable for players who have some experience and are looking to improve their skills.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='bg-secondary-subtle mt-4'>
                            <Card.Body>
                                <Card.Title className='fs-5'>Advanced</Card.Title>
                                <Card.Text className='fs-6'>$650 per session</Card.Text>
                                <Card.Text className='fs-6'>
                                    Designed for advanced players who are looking to take their game to the next level.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='bg-secondary-subtle mt-4'>
                            <Card.Body>
                                <Card.Title className='fs-5'>Package</Card.Title>
                                <Card.Text className='fs-6'>$250 for 10 sessions</Card.Text>
                                <Card.Text className='fs-6'>
                                    Irrespective of any level, this package is suitable for all players who are looking to improve their game.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={6} className='mt-4'>
                        <Card>
                            <Card.Body>
                                <Card.Title><h3 className='text-center'>Already a Member?</h3></Card.Title>
                                <Card.Text className='mt-3'>
                                    Login with your member id or email to book a coaching session with our professional coaches.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div className='d-flex justify-content-center'>
                                    <Button as={Link} to='/login' variant="secondary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Log In</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='mt-4'>
                        <Card>
                            <Card.Body>
                                <Card.Title><h3 className='text-center'>Become a Member</h3></Card.Title>
                                <Card.Text className='mt-3'>
                                    Join the Ottawa Badminton Club and enjoy unlimited access to our facilities and services.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div className='d-flex justify-content-center'>
                                    <Button as={Link} to='/signup' variant="primary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Join Now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h5 className='text-info text-center mt-5 fs-3 fst-italic'>Meet Our Coaches</h5>
                <Row className='mt-4 mb-5'>
                    <Col md={4}>
                        <Card>
                            <img src={coach1} style={{width:'100%'}} alt="" />
                            <Card.Body>
                                <Card.Title>Darren Walken</Card.Title>
                                <Card.Text>
                                    Darren is a professional badminton player who has been coaching for over 10 years. He has trained players of all levels and ages.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <img src={coach2} style={{width:'100%'}} alt="" />
                            <Card.Body>
                                <Card.Title>Peter Tembridge</Card.Title>
                                <Card.Text>
                                    Peter is a former national badminton champion who has been coaching for over 15 years. He has trained players of all levels and ages.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <img src={coach3} style={{width:'100%'}} alt="" />
                            <Card.Body>
                                <Card.Title>Alex Miller</Card.Title>
                                <Card.Text>
                                    Alex is a professional badminton player who has been coaching for over 7 years. He has trained players of all levels and ages.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
