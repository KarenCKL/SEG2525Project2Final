import React from 'react'
import { Container, Row, Col, Form, Card, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
export default function SignUp() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            // Navigate to the next page only if the form is valid
            navigate('/signupnext');
        }

        setValidated(true);
        event.preventDefault();
    };

    return (
        <Container>
            <Card className='p-5 mx-auto signUpCard'>
                <h4 className='text-info mb-3'>
                    ULTIMATE MEMBERSHIP & COACHING
                </h4>
                <Row>
                    <Col md={6}>
                        <h5 className='mb-4 text-secondary'>150 Louis Pasteur, K1N 7P7, Ottawa </h5>
                    </Col>
                    <Col md={6}>
                        <h5 className='d-flex justify-content-end text-secondary'>STEP 1 OF 2</h5>
                    </Col>
                </Row>
                <h5 className='mb-4 text-info mt-4'>Your personal information</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter First name"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Last name"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Email Address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Email Address"
                                />
                                <Form.Control.Feedback type="invalid">Invalid email address</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Phone Number</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faPhone} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Phone Number"
                                />
                                <Form.Control.Feedback type="invalid">Invalid Phone Number</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Enter a Password"
                                />
                                <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="icon-style">
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1 mt-5">
                        <Col md="6">
                            <Button type='submit' className='bg-secondary border-0' id="loginIdBtn">Next</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}
