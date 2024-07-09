import React from 'react';
import { Container, Row, Col, Form, Card, Button, Table, Alert, Popover } from 'react-bootstrap';
import court from '../assets/court1.jpg';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const popover = (
    <Popover id="popover-basic">
        <Popover.Body>
            Select a date, time, and available session.
        </Popover.Body>
    </Popover>
);

export default function Booking() {

    return (
        <div>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col xl={4} lg={6}>
                        <img src={court} style={{ width: '100%' }} alt="Badminton court at Ottawa Badminton Club" />
                    </Col>
                    <Col xl={8} lg={6}>
                        <Card style={{ width: '100%' }} className='py-3 ps-xl-5 session'>
                            <Card.Body>
                                <Card.Title className='text-info fs-4'>Book a session</Card.Title>
                                <Row>
                                    <Col>
                                        <p className='Font mt-4'>Select a Date</p>
                                        <Form.Control type="date" id='date' style={{ width: '300px' }} />
                                    </Col>
                                    <Col>
                                        <p className='Font mt-4'>Select a Time</p>
                                        <Form.Control type="time" id='time' style={{ width: '300px' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='Font mt-4'>Select an Available Session</p>
                                        <Form.Select aria-label="Select an Available Session" className="custom-select" style={{ width: '300px' }}>
                                            <option value="1">Open Play</option>
                                            <option value="2">Beginner Level</option>
                                            <option value="3">Intermediate Level</option>
                                            <option value="4">Advanced Level</option>
                                        </Form.Select>
                                    </Col>
                                    <Col className='mt-lg-2 pt-lg-3'>
                                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                            <Button as={Link} to='' type='submit' variant="secondary" className='text-white py-1 px-1 capitalize mt-5' id="submitBtn" style={{ width: '300px' }}>Submit</Button>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center mt-5 mb-3 text-info fst-italic">
                        <h3>Our Schedule</h3>
                    </div>
                    <div className='mb-4'>
                        <Table responsive="sm" bordered className='table'>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>08:00-10:00</b></td>
                                    <td rowSpan="2" className='text-center open pt-5'>Open Play</td>
                                    <td rowSpan="1" className='text-center beginner'>Beginner Coaching</td>
                                    <td rowSpan="1" className='text-center intermediate'>Intermediate Coaching</td>
                                    <td rowSpan="1" className='text-center advanced'>Advanced Coaching</td>
                                    <td rowSpan="1" className='text-center open'>Open Play</td>
                                    <td rowSpan="1" className='text-center advanced'>Advanced Coaching</td>
                                    <td rowSpan="1" className='text-center beginner'>Beginner Coaching</td>
                                </tr>
                                <tr>
                                    <td><b>10:00-12:00</b></td>
                                    <td colSpan="4" className='text-center open pt-3'>Open Play</td>
                                    <td rowSpan="3" className='text-center intermediate' style={{ paddingTop: '70px' }}>Intermediate Coaching</td>
                                    <td rowSpan="3" className='text-center advanced' style={{ paddingTop: '70px' }}>Advanced Coaching</td>
                                </tr>
                                <tr>
                                    <td><b>12:00-14:00</b></td>
                                    <td rowSpan="1" className='text-center beginner pt-4'>Beginner Coaching</td>
                                    <td rowSpan="2" className='text-center advanced pt-5'>Advanced Coaching</td>
                                    <td rowSpan="2" className='text-center intermediate pt-5'>Intermediate Coaching</td>
                                    <td colSpan="2" className='text-center open pt-4'>Open Play</td>
                                </tr>
                                <tr>
                                    <td><b>14:00-16:00</b></td>
                                    <td rowSpan="2" className='text-center advanced pt-5'>Advanced Coaching</td>
                                    <td rowSpan="3" className='text-center beginner' style={{ paddingTop: '70px' }}>Beginner Coaching</td>
                                    <td rowSpan="3" className='text-center advanced' style={{ paddingTop: '70px' }}>Advanced Coaching</td>
                                </tr>
                                <tr>
                                    <td><b>16:00-18:00</b></td>
                                    <td rowSpan="2" className='text-center beginner pt-5'>Beginner Coaching</td>
                                    <td rowSpan="2" className='text-center open pt-5'>Open Play</td>
                                    <td colSpan="2" className='text-center open pt-4'>Open Play</td>

                                </tr>
                                <tr>
                                    <td><b>18:00-20:00</b></td>
                                    <td rowSpan="2" className='text-center intermediate' style={{ paddingTop: '40px' }}>Intermediate Coaching</td>
                                    <td colSpan="2" className='text-center intermediate pt-4'>Intermediate Coaching</td>
                                </tr>
                                <tr>
                                    <td><b>20:00-22:00</b></td>
                                    <td colSpan="4" className='text-center open pt-3'>Open Play</td>
                                    <td colSpan="4" className='text-center close pt-3'>Closed</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
                <div>
                    <Alert className='custom-alert'>
                        Note: The club is closed on public holidays.
                    </Alert>
                </div>
            </Container>
        </div>
    )
}
