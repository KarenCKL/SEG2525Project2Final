import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
export default function AboutUs() {
    const { t } = useTranslation();
    return (
        <div>
            <Container className="mt-5 p-4">
                <Row>
                    <div className="d-flex justify-content-center mb-4 text-info fst-italic">
                        <h3>{t('aboutUs')}</h3>
                    </div>
                    <Col className="d-flex flex-column">
                        <p className='fst-italic Font'>
                          {t('about')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
