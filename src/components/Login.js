import React from 'react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container>
            <Card className='p-5 mx-auto loginCard'>
                <h4 className='text-info mb-4'>
                    Log In
                </h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Member ID or Email Address</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="text"
                                placeholder="Enter Member ID or Email Address"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Member ID or Email Address</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4 mt-4">
                        <Col md="6" className="text-center">
                            <a href="#" className="text-info">Forget password?</a>
                        </Col>
                        <Col md="6" className="text-center pt-sm-3 pt-md-0">
                            <Button type="submit" className='bg-secondary border-0' id="loginIdBtn">Log In</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center">
                            <p>
                                Don't have an account?
                            </p>
                            <p>
                                <Link to="/signup" className="text-info">SIGN UP</Link>
                            </p>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>

    );
}


