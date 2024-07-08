import React from 'react'
import { Container, Row, Col, Form, Card, Button, FloatingLabel, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUpNext() {
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedType, setSelectedType] = useState("1");
    const [categoryOptions, setCategoryOptions] = useState([
        { value: "1", label: "Single Session" },
        { value: "2", label: "Monthly" },
        { value: "3", label: "Annually" },
        { value: "4", label: "MultiPass" },
    ]);

    const handleTypeChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedType(selectedValue);

        // Update category options based on selected type
        if (selectedValue === "1") { // Membership
            setCategoryOptions([
                { value: "1", label: "Single Session" },
                { value: "2", label: "Monthly" },
                { value: "3", label: "Annually" },
                { value: "4", label: "MultiPass" },
            ]);
        } else if (selectedValue === "2") { // Coaching
            setCategoryOptions([
                { value: "1", label: "Beginner" },
                { value: "2", label: "Intermediate" },
                { value: "3", label: "Advanced" },
                { value: "4", label: "Package" },
            ]);
        }
    };
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setShowModal(true); // Show the modal only if the form is valid
        }

        setValidated(true);
    };
    const handleClose = () => setShowModal(false);
    return (
        <Container>
            <Card className='p-5 mx-auto signUpCard'>
                <Row>
                    <Col>
                        <h4 className='text-info mb-3'>
                            CHECKOUT
                        </h4></Col>
                    <Col md={6}>
                        <h5 className='d-flex justify-content-end text-secondary'>STEP 2 OF 2</h5>
                    </Col>
                </Row>
                <h5 className='mb-4 text-info mt-4'>Billing Address</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your Address"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your City"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Label>Select a Province</Form.Label>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                            >
                                <Form.Select aria-label="Floating label select example" className='py-0 ps-4 mt-2'>
                                    <option value="1">Alberta</option>
                                    <option value="2">British Columbia</option>
                                    <option value="3">Ontario</option>
                                    <option value="4">Québec</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Form.Group as={Col} md="6" controlId="validationCustom4">
                            <Form.Label>Postal code</Form.Label>
                            <Form.Control
                                className='mt-2'
                                required
                                type="text"
                                placeholder="A1A 1A1"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Postal code</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                   
                </Form>
                <h5 className='mb-4 text-info mt-4'>Subcription</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Label>Select Membership or Coaching</Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid">
                                <Form.Select
                                    aria-label="Floating label select example"
                                    className='py-0 ps-4 mt-2'
                                    value={selectedType}
                                    onChange={handleTypeChange}
                                >
                                    <option value="1">Membership</option>
                                    <option value="2">Coaching</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <Form.Label>Select a Category</Form.Label>
                            <FloatingLabel controlId="floatingSelectGrid">
                                <Form.Select aria-label="Floating label select example" className='py-0 ps-4 mt-2'>
                                    {categoryOptions.map((option) => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
                <h5 className='mb-4 text-info mt-4'>Payment Information</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Enter your Card Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your Card Number"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Card Number</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your CVV"
                            />
                            <Form.Control.Feedback type="invalid">Invalid CVV- 3 digits numbers</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Expiry</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="MM/YY"
                            />
                            <Form.Control.Feedback type="invalid">Invalid Expiry Date</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mt-4">
                        <Col md="6">
                            <Button as={Link} to='/signup' className='bg-secondary border-0' id="loginIdBtn">Previous</Button>
                        </Col>
                        <Col md="6">
                            <div className='submit'>
                                <Button type="submit" className='bg-primary border-0' id="loginIdBtn">Submit</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary'>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Thank you for your purchase!</h5>
                    <p className='mt-3'>Check out the <Link to='/booking' className='text-black'>Booking Page</Link> to schedule your next match.</p>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
