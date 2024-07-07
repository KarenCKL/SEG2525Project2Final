import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faWheelchair, faParking, faRestroom} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
export default function Facilities() {
    const { t } = useTranslation();
    return (
        <div>
            <Container className="mt-1 p-4">
                <Row>
                    <div className="d-flex justify-content-center mb-5 text-info fst-italic">
                        <h3>{t('amenities')}</h3>
                    </div>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faParking} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>{t('parking')}</h5>
                        <p className='text-center Font'>{t('parking1')}</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWheelchair} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>{t('wheelchair')}</h5>
                        <p className='text-center Font'>{t('wheelchair1')}</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faWifi} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>{t('wifi')}</h5>
                        <p className='text-center Font'>{t('wifi1')}</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faRestroom} size='3x' className="mb-3 mt-2" style={{ color: '#a60341' }} />
                        </div>
                        <h5 className='text-center'>{t('changing')}</h5>
                        <p className='text-center Font'>{t('changing1')}</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
