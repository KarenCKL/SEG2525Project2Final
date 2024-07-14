import React from 'react'
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap'
import { useState} from 'react';
import E1 from '../assets/E1.webp';
import E2 from '../assets/E2.jpg';
import E3 from '../assets/E3.jpg';
import E4 from '../assets/E4.webp';
import E5 from '../assets/E5.webp';
import { useTranslation } from 'react-i18next';


export default function Shop() {
    const {t} = useTranslation();
    // Initial state for checkboxes
    const initialCheckboxes1 = [
        { isChecked: false, message: 'Racquets' },
        { isChecked: false, message: 'Starter Sets' },
        { isChecked: false, message: 'Bags' },
        { isChecked: false, message: 'Clothes' },
        { isChecked: false, message: 'Shoes' },
        { isChecked: false, message: 'Other Accessories' },
    ];
    const initialCheckboxes2 = [
        { isChecked: false, message: '$0-$50' },
        { isChecked: false, message: '$50-$100' },
        { isChecked: false, message: '$100-$200' },
        { isChecked: false, message: 'Over $200' },
    ];
    const initialCheckboxes3 = [
        { isChecked: false, message: 'Sales Items' },
    ];
    const initialCheckboxes4 = [
        { isChecked: false, message: 'Yonex' },
        { isChecked: false, message: 'Li-Ning' },
        { isChecked: false, message: 'Victor' },
        { isChecked: false, message: 'Under Armour' },
        { isChecked: false, message: 'Wilson' },
        { isChecked: false, message: 'Head' },
    ];
    const initialCheckboxes5 = [
        { isChecked: false, message: 'Free Shipping' },
    ];
    const initialCheckboxes6 = [
        { isChecked: false, message: 'New Items' },
        { isChecked: false, message: 'Used Items' },
    ];
    //Data
    const contentMapping = {
        'Racquets': [
            {
                name: 'Yonex Racquet',
                image: E1,
                description: 'Racquet from the Yonex brand.',
                price: '$200'
            },
            {
                name: 'Double Racquet',
                image: E2,
                description: 'Racquet suitable for doubles play.',
                price: '$250'
            },
            {
                name: 'Li-Ning Racquet',
                image: E3,
                description: 'Racquet from the Li-Ning brand.',
                price: '$120'
            },
            // Add more racquet items as needed
        ],
        'Starter Sets': [
            {
                name: 'Basic Starter Set',
                image: E5,
                description: 'Starter set with racquets and shuttlecocks.',
                price: '$50'
            },
            {
                name: 'Full Starter Set',
                image: E4,
                description: 'Full Starter set with accessories.',
                price: '$100'
            },
            // Add more starter set items as needed
        ]
    };


    const [currentPage, setCurrentPage] = useState(1);
    const [checkboxes1, setCheckboxes1] = useState(initialCheckboxes1);
    const [checkboxes2, setCheckboxes2] = useState(initialCheckboxes2);
    const [checkboxes3, setCheckboxes3] = useState(initialCheckboxes3);
    const [checkboxes4, setCheckboxes4] = useState(initialCheckboxes4);
    const [checkboxes5, setCheckboxes5] = useState(initialCheckboxes5);
    const [checkboxes6, setCheckboxes6] = useState(initialCheckboxes6);
    // const [anyCheckboxChecked, setAnyCheckboxChecked] = useState(false);

    //Function to hide pagination when checkboxes are selected
    // useEffect(() => {
    //     const isAnyChecked = [
    //         ...checkboxes1,
    //         ...checkboxes2,
    //         ...checkboxes3,
    //         ...checkboxes4,
    //         ...checkboxes5
    //     ].some(checkbox => checkbox.isChecked);
    //     setAnyCheckboxChecked(isAnyChecked);
    // }, [checkboxes1, checkboxes2, checkboxes3, checkboxes4, checkboxes5, checkboxes6]);

    // Function to handle checkbox
    const handleCheckboxChange = (item, index) => (event) => {
        const setCheckboxes = {
            1: setCheckboxes1,
            2: setCheckboxes2,
            3: setCheckboxes3,
            4: setCheckboxes4,
            5: setCheckboxes5,
            6: setCheckboxes6,
        }[item];

        const checkboxes = {
            1: checkboxes1,
            2: checkboxes2,
            3: checkboxes3,
            4: checkboxes4,
            5: checkboxes5,
            6: checkboxes6,
        }[item];

        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].isChecked = event.target.checked;
        setCheckboxes(newCheckboxes);
    };

    const handleUncheckAll = () => {
        setCheckboxes1(initialCheckboxes1);
        setCheckboxes2(initialCheckboxes2);
        setCheckboxes3(initialCheckboxes3);
        setCheckboxes4(initialCheckboxes4);
        setCheckboxes5(initialCheckboxes5);
        setCheckboxes6(initialCheckboxes6);
        setCurrentPage(1);
    };

    //Function to handle Pagination Click
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Function to render products based on selected checkboxes or randomly if none selected
    const renderContentForPage = (pageNumber) => {
        const filtered1 = checkboxes1.filter(checkbox => checkbox.isChecked);
        const filtered2 = checkboxes2.filter(checkbox => checkbox.isChecked);
        const filtered3 = checkboxes3.filter(checkbox => checkbox.isChecked);
        const filtered4 = checkboxes4.filter(checkbox => checkbox.isChecked);
        const filtered5 = checkboxes5.filter(checkbox => checkbox.isChecked);
        const filtered6 = checkboxes6.filter(checkbox => checkbox.isChecked);

        // Filter products based on selected checkboxes
        let productsToShow = [];
        if (filtered1.length > 0) {
            filtered1.forEach(checkbox => {
                if (contentMapping[checkbox.message]) {
                    productsToShow = productsToShow.concat(contentMapping[checkbox.message]);
                }
            });
        } else {
            // If no checkboxes are selected, show random items
            const allItems = Object.values(contentMapping).flat();
            const shuffledItems = shuffleArray(allItems); // Implement shuffleArray function
            productsToShow = shuffledItems.slice(0, 8); // Show first 8 random items
        }

        // Paginate products
        const itemsPerPage = 4;
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = productsToShow.slice(startIndex, endIndex);

        return (
            <Container>
                <Row>
                    {paginatedProducts.map((item, index) => (
                        <Col key={index} md={6}>
                            <Card className='mt-md-4 mb-3 mb-md-4'>
                                <Card.Img variant="top" src={item.image} alt='descriptive image'/>
                                <Card.Body className='ps-4 pt-4'>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text>{item.price}</Card.Text>
                                    <div>
                                        <Button variant="secondary" id={`detailsBtn-${index}`} className='details'>Details</Button>
                                        <Button variant="primary" id={`buyBtn-${index}`} className='buy'>Buy</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    };

    // Function to shuffle array (for random item selection)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div>
            <Container>
                <h3 className='text-info text-center mt-5 fs-3'>{t('shop')}</h3>
                <Row>
                    <Col>
                        <p className='guide mt-lg-1 mt-xl-4 mt-3 ms-2 fs-5 fst-italic'>
                           {t('shopText')}
                        </p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={4}>
                        <Card className='facette mt-4 mb-5' >
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Card.Title className='text-info fs-4'>Items</Card.Title>
                                    <Button variant="primary" onClick={handleUncheckAll}>Reset</Button>
                                </div>
                                <Card.Text>
                                    <span className='items mt-1 ms-3 fs-5'>Category</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes1.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch1-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(1, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='items mt-1 ms-3 fs-5'>Price</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes2.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch2-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(2, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='items mt-1 ms-3 fs-5'>On Sale</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes3.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch3-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(3, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='items mt-1 ms-3 fs-5'>Brands</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes4.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch4-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(4, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='items mt-1 ms-3 fs-5'>Shipping</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes5.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch5-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(5, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='items mt-1 ms-3 fs-5'>Condition</span>
                                    <ul className='mt-1 ms-3 ms-md-4'>
                                        {checkboxes6.map((checkbox, index) => (
                                            <li key={index}>
                                                <Form.Check
                                                    className='mt-2 ms-4'
                                                    type="checkbox"
                                                    id={`checkbox-ch6-${index}`}
                                                    label={checkbox.message}
                                                    checked={checkbox.isChecked}
                                                    onChange={handleCheckboxChange(6, index)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div>
                            {renderContentForPage(currentPage)}
                        </div>
                    </Col>
                    <Col md={12}>
                        <Pagination className='d-flex justify-content-center mt-4'>
                            <Pagination.Prev
                                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            />
                            {[1, 2, 3, 4, 5].map((page) => (
                                <Pagination.Item
                                    key={page}
                                    active={page === currentPage}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handlePageChange(Math.min(currentPage + 1, 5))}
                            />
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
