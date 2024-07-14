/* eslint-disable jsx-a11y/anchor-is-valid */
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Navbar expand="lg" className="navbar bg-white sticky-top bg-info sticky-top" aria-label={t('mainNavigation')}>
            <Container fluid className='custom-container'>
                <Link to='/' aria-label={t('home')}>
                    <img src={logo} style={{ width: '50px', marginRight: '10px' }} alt={t('logoAlt')} id="logo" />
                </Link>
                <Navbar.Brand as={Link} to='/' className="capitalize" id='name' aria-label={t('clubName')}>{t('clubName')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={t('toggleNavigation')} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto py-0 pe-3">
                        <Nav.Link as={Link} to='/' id="HomeLink" className="capitalize" aria-label={t('home')}>{t('home')}</Nav.Link>
                        <Nav.Link as={Link} to='/shop' className="capitalize" aria-label={t('shop')}>{t('shop')}</Nav.Link>
                        <NavDropdown title={t('resources')} id="basic-nav-dropdown" aria-haspopup="true" aria-expanded="false" aria-label={t('resources')}>
                            <NavDropdown.Item as={Link} to="/guides" aria-label={t('guides')}>{t('guides')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/forum" aria-label={t('forum')}>{t('forum')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/FAQ" aria-label="FAQ">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('service')} id="basic-nav-dropdown" aria-haspopup="true" aria-expanded="false" aria-label={t('service')}>
                            <NavDropdown.Item as={Link} to="/membership" aria-label={t('membership')}>{t('membership')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/coaching" aria-label={t('coaching')}>{t('coaching')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/booking" aria-label={t('booking')}>{t('booking')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button
                        onClick={changeLanguage}
                        className='me-4 bg-transparent text-primary border-0 languageBtn'
                        style={{ padding: '2px 2px' }}
                        aria-label={i18n.language === 'en' ? t('switchToFrench') : t('switchToEnglish')}>
                        <FontAwesomeIcon icon={faGlobe} size="lg" className='me-2' />
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                    </Button>
                    <Button as={Link} to='/signup' variant="primary" className='text-white py-1 px-1 capitalize rounded-0' id='bookIdbtn' aria-label={t('joinNow')}>{t('joinNow')}</Button>
                    <Button as={Link} to='/login' variant="secondary" className='text-white py-1 px-1 capitalize rounded-0' id='loginIdbtn' aria-label={t('login')}>{t('login')}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
