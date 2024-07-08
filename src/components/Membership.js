import React from 'react'
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/membership.jpg';
export default function Membership() {
    return (
        <div>
            <section id="membership">
                <Container>
                    <h3 className='text-info text-center mt-4 fs-3'>Memberships</h3>
                    <p className='mt-xl-4 mt-3 mb-1 guide fst-italic'>
                        Join the Ottawa Badminton Club and enjoy unlimited access to our facilities and services. Choose from a variety of membership options to suit your needs.
                    </p>
                    <Row className='mt-2 mb-4'>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Single Session</Card.Title>
                                    <Card.Text className='fs-6'>$30</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Perfect for those who want to drop in and play with friends anytime.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Monthly</Card.Title>
                                    <Card.Text className='fs-6'>$60</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Best value for regular players, offering unlimited access for an entire month.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>Annually</Card.Title>
                                    <Card.Text className='fs-6'>$650</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Best value for avid players, offering unlimited access for an entire year.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='bg-secondary-subtle mt-4'>
                                <Card.Body>
                                    <Card.Title className='fs-5'>MultiPass</Card.Title>
                                    <Card.Text className='fs-6'>$250 for 10 sessions</Card.Text>
                                    <Card.Text className='fs-6'>
                                        Flexible option allowing you to enjoy 10 sessions at your convenience.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div>
                        <Alert className='custom-alert'>
                            Note: The duration of 1 session is 2 hours.
                        </Alert>
                    </div>
                    <Row className='mt-5 pb-3'>
                        <Col md={4}>
                            <img src={image} style={{ width: '100%' }} alt="" />
                        </Col>
                        <Col md={4} className='mt-4 pt-2'>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h3 className='text-center'>Already a Member?</h3></Card.Title>
                                    <Card.Text className='mt-3'>
                                        Login to your account to access your membership details and book a session.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <div className='d-flex justify-content-center'>
                                        <Button as={Link} to='/login' variant="secondary" className='text-white py-1 px-1 capitalize' id='bookIdbtn'>Log In</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mt-4 pt-2'>
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
                </Container>
            </section>
        </div>
    )
}
