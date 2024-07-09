import React from 'react'
import { Col, Container, Row, Accordion, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function faq() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
    return (
        <Container>
            <h3 className='text-info text-center mt-4 fs-3'>{t('FAQ')}</h3>
            <Row className='mt-5'>
                <Col md={12}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('Question1')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer1')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>{t('Question2')} </Accordion.Header>
                            <Accordion.Body>
                                {t('answer2')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>{t('Question3')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer3')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>{t('Question4')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer4')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>{t('Question5')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer5')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>{t('Question6')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer6')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>{t('Question7')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer7')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>{t('Question8')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer8')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>{t('Question9')}</Accordion.Header>
                            <Accordion.Body>
                                {t('answer9')}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row className='mt-4 mb-5'>
                {/* <Col md={4}>
                    <img src={image} style={{ width: '100%' }} alt="" />
                </Col> */}
                <Col md={12} className='mt-4 pt-2'>
                    <Card className='bg-secondary-subtle'>
                        <Card.Body>
                            <Card.Title><h3 className='text-center mt-3'>Any other question?</h3></Card.Title>
                            <Card.Text className='mt-3 fs-4'>
                                <div className='d-flex justify-content-center'>
                                    <p className='me-4'>Feel free to contact us via : </p>
                                    <p><FontAwesomeIcon icon={faEnvelope} className='me-3' /></p>
                                    <p><a href="mailto:info@badmintonClub.ca" className="text-black me-4" id='emailFooter'> info@badmintonClub.ca</a></p>
                                    <p>or</p>
                                    <p><FontAwesomeIcon icon={faPhone} className='me-3 ms-4' /></p>
                                    <p><a href="phoneto: +1 (234) 567-890" className="text-black" id='emailFooter'> + 1 (234) 567-890</a></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
