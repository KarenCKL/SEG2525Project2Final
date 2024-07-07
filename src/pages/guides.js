/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import guide from '../assets/guide.jpeg';
import chapter2 from '../assets/chapter2.jpg';
import chapter4 from '../assets/chapter4.png';
import { useTranslation } from 'react-i18next';
export default function guides() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-5 fs-3'>{t('ultimate')}</h3>
                <Row className='mt-5'>
                    <Col md={4}>
                        <img src={guide} style={{ width: "100%", height: "90%" }} alt="image showing a racket" />
                    </Col>
                    <Col md={8}>
                        <p className='mt-xl-4 mt-1 pt-1 guide'>
                           {t('ultimate1')}
                        </p>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <h5 className='text-secondary fs-4'>1. {t('ch1')}</h5>
                    <Col md={12}>
                        <p className='guide pt-2'>
                            {t('ch11')}
                        </p>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('boundaries')}</Accordion.Header>
                                <Accordion.Body>
                                   {t('boundaries1')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{t('double')} </Accordion.Header>
                                <Accordion.Body>
                                    {t('double1')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{t('faults')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('faults1')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{t('scoring')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('scoring1')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>{t('serving')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('serving1')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h5 className='text-secondary fs-4 mb-4'>2. {t('ch2')}</h5>
                    <Col md={4}>
                        <img src={chapter2} style={{ width: "100%", height: "100%" }} alt="image show 2 players" />
                    </Col>
                    <Col md={8}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('court')}</Accordion.Header>
                                <Accordion.Body>
                                   {t('court1')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Lungs</Accordion.Header>
                                <Accordion.Body>
                                    Step forward with one foot and lower your body down into a lunge position. Then push off with your front foot and return to a standing position. Repeat on the other side. This drill will help you improve your balance and leg strength.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Quick stepping</Accordion.Header>
                                <Accordion.Body>
                                    Stand in one place and quickly step forwards and backwards, using your toes to push off the ground. This drill will help you improve your explosiveness and agility.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Shuffling</Accordion.Header>
                                <Accordion.Body>
                                    Stand in one place and shuffle from side to side, moving your feet as quickly as possible. This drill will help you improve your lateral movement and quickness.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h5 className='text-secondary fs-4 mb-4'>3. Learn to play at different speeds</h5>
                    <Col>
                        <p>Varying the speed and power of your shots can make you a more unpredictable opponent and keep your opponents on their toes. Here are a few ways you can change the speed of your shots:</p>
                        <div className="d-flex align-items-start">
                            <div className="circle-icon" style={{marginTop:'5px', marginRight:'15px'}}>1
                            </div>
                            <p>Use a lighter grip on your racket: By using a lighter grip on your racket, you’ll be able to hit softer shots that have less power and spin. This can be useful for hitting drop shots or for placing the shuttlecock in a specific part of the court.</p></div>
                        <div className="d-flex align-items-start">
                            <div className="circle-icon" style={{marginTop:'5px', marginRight:'15px'}}>2
                            </div>
                            <p>Add spin to the shuttlecock: By adding topspin or backspin to the shuttlecock, you’ll be able to slow it down and make it dip more after it crosses the net. This can be useful for hitting deceptive shots or for setting up a slower, more controlled rally.</p></div>
                        <div className="d-flex align-items-start">
                            <div className="circle-icon" style={{marginTop:'5px', marginRight:'15px'}}>3
                            </div>
                        <p>Hit the shuttlecock earlier or later in its descent: By hitting the shuttlecock earlier or later in its descent, you’ll be able to change the pace of the rally. Hitting the shuttlecock earlier will give it more power and speed, while hitting it later will give it less power and spin.</p></div>
                        <p>In addition to these techniques, it’s also important to vary the placement of your shots. By hitting the shuttlecock to different parts of the court, you’ll be able to keep your opponents guessing and force them to move around the court.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h5 className='text-secondary fs-4 mb-4'>4. Work on your serve</h5>
                    <Col md={8}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Flat serves</Accordion.Header>
                                <Accordion.Body>
                                    Hit the shuttlecock with a low trajectory and minimal spin. These serves are fast and difficult to return.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>High serves</Accordion.Header>
                                <Accordion.Body>
                                    Hit the shuttlecock with a high trajectory and a lot of spin. These serves are slower and can be used to set up a slower, more controlled rally.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Place your serves strategically</Accordion.Header>
                                <Accordion.Body>
                                    By placing your serves to different parts of the court, you’ll be able to put more pressure on your opponent and potentially win the point outright. Some areas you might want to target include the body, the backhand, and the corners of the court.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Use good technique: </Accordion.Header>
                                <Accordion.Body>
                                    Good technique is essential for hitting accurate and powerful serves.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <img src={chapter4} style={{ width: "100%", height: "100%" }} alt="image show 2 players" />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h5 className='text-secondary fs-4'>5. Learn to play under pressure</h5>
                    <Col md={12} className='mb-4'>
                        <p className='guide pt-2'>
                            In badminton, it’s important to be able to stay focused and composed under pressure. Here are a few tips for playing well under pressure:
                        </p>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Focus on the process</Accordion.Header>
                                <Accordion.Body>
                                    Instead of worrying about the outcome of the rally, focus on the process of playing the shot. Think about your grip, your footwork, and your technique, and let the rest take care of itself.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Stay positive</Accordion.Header>
                                <Accordion.Body>
                                    Don’t let mistakes or missed shots get you down. Stay positive and believe in your ability to play well.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Take deep breaths</Accordion.Header>
                                <Accordion.Body>
                                    Deep breaths can help you relax and calm your nerves. Take a few deep breaths before and during the rally to help you stay focused and composed.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Visualize success</Accordion.Header>
                                <Accordion.Body>
                                    Before the rally, take a few seconds to visualize yourself hitting a great shot. This can help you stay focused and confident.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
