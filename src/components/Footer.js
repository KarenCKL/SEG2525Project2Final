import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitterX from '../assets/twitter-x.svg';
import youtube from '../assets/youtube.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-primary mt-4 pt-4 pb-3">
            <Container>
                <Row>
                    <Col>
                        <p className='fs-5 text-white'>{t('copyright')}</p>
                    </Col>
                    <Col>
                        <div style={{ paddingLeft: "100px" }}>
                            <p className='text-white'>{t('email')} <a href="mailto:info@badmintonClub.ca" className="text-white" id='emailFooter'>info@badmintonClub.ca</a></p>
                            <p className='text-white'>{t('tel')}<a href="+123456789" className="text-white" id='phoneFooter'>+1 (234) 567-890</a>
                            </p>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column">
                        <div style={{ paddingLeft: "100px" }}>
                            <p className='fs-5 mb-0 text-white'>{t('follow')}</p>
                        </div>
                        <div className='mt-2' style={{ paddingLeft: "120px" }}>
                            <img src={facebook} alt="facebook icon" className="img-fluid ms-3" style={{ width: "25px", height: "25px", cursor: "pointer" }} href="" />
                            <img src={instagram} alt="instagram icon" className="img-fluid ms-3" style={{ width: "25px", height: "25px", cursor: "pointer" }} href="" />
                            <img src={twitterX} alt="twitterX icon" className="img-fluid ms-3" style={{ width: "25px", height: "30px", cursor: "pointer" }} href="" />
                            <img src={youtube} alt="youtube icon" className="img-fluid ms-3" style={{ width: "25px", height: "30px", cursor: "pointer" }} href="" />
                            <img src={linkedin} alt="linkedin icon" className="img-fluid ms-3" style={{ width: "25px", height: "25px", cursor: "pointer" }} href="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;
