import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import background1 from '../assets/background1.jpeg';
import background2 from '../assets/background.png';
import background3 from '../assets/background4.jpg';
import team from '../assets/team.jpg';
import shopEn from '../assets/shopping.png';
import shopFr from '../assets/shoppingFR.png';
import shopMobileEn from '../assets/shoppingMobile.png';
import shopMobileFr from '../assets/shoppingMobileFR.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', margin: '0 auto', position: 'relative' }} className='mt-3'>
            <Carousel.Item>
                <img src={background1} style={{ width: '100%' }} alt="background image" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start'>{t('ct1')}</Card.Title>
                            <Card.Text className='fs-5 pb-2 text-start'>{t('ct11')}</Card.Text>
                            <Link to="/signup" className="btn btn-primary" style={{ width: '130px' }}>{t('joinNow')}</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background2} style={{ width: '100%' }} alt="background image" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start'>{t('ct2')}</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>{t('ct22')}</Card.Text>
                            <Link to="/booking" className="btn btn-primary" style={{ width: '130px' }}>{t('ct222')}</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={background3} style={{ width: '100%' }} alt="background image" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >{t('ct3')}</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>{t('ct33')}</Card.Text>
                            <Link to="/guides" className="btn btn-primary" style={{ width: '130px' }}>{t('ct333')}</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={team} style={{ width: '100%' }} alt="background image" className='background' />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >{t('ct4')}</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>{t('ct44')}</Card.Text>
                            <Link to="/forum" className="btn btn-primary" style={{ width: '130px' }}>{t('ct444')}</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div></div>
                <img
                    src={isEnglish ? shopEn : shopFr}
                    style={{ width: '100%' }}
                    alt="background of a badminton guide"
                    className='background large-screen-image'
                />
                <img
                    src={isEnglish ? shopMobileEn : shopMobileFr}
                    style={{ width: '100%' }}
                    alt="background of a badminton guide"
                    className='background small-screen-image'
                />
                <Carousel.Caption className="carousel-caption-custom">
                    <Card className="bg-overlay text-white card-fixed-width">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className='fs-3 text-start' >{t('ct5')}</Card.Title>
                            <Card.Text className='fs-5 pb-1 text-start'>{t('ct55')}</Card.Text>
                            <Link to="/shop" className="btn btn-primary" style={{ width: '130px' }}>{t('ct555')}</Link>
                        </Card.Body>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
