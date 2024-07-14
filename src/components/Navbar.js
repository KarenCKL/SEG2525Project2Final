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
        <Navbar expand="lg" className="navbar bg-white sticky-top bg-info sticky-top">
            <Container fluid className='custom-container'>
                <Link to='/'>
                    <img src={logo} style={{ width: '50px', marginRight: '10px' }} alt="Logo" id="logo" />
                </Link>
                <Navbar.Brand as={Link} to='/' className="capitalize" id='name'>{t('clubName')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto py-0 pe-3">
                        {/* <Nav.Link as={Link} to='/' id="HomeLink" className="capitalize">{t('home')}</Nav.Link> */}
                        <NavDropdown title={t('Resources')} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/guides">{t('guides')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/forum">{t('forum')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/FAQ">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('service')} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/membership">{t('membership')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/coaching">{t('coaching')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/booking">{t('booking')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to='/shop' className="capitalize">{t('shop')}</Nav.Link>
                    </Nav>
                    <Button
                        onClick={changeLanguage}
                        className='me-4 bg-transparent text-primary border-0 languageBtn'
                        style={{ padding: '2px 2px' }}>
                        <FontAwesomeIcon icon={faGlobe} size="lg" className='me-2' />
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                    </Button>
                    <Button as={Link} to='/signup' variant="primary" className='text-white py-1 px-1 capitalize rounded-0' id='bookIdbtn'>{t('joinNow')}</Button>
                    <Button as={Link} to='/login' variant="secondary" className='text-white py-1 px-1 capitalize rounded-0' id='loginIdbtn'>{t('login')}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;
