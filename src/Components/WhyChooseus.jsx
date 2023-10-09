import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sell from '../Assets/Images/Png/Sell.png'
import Machine from '../Assets/Images/Png/Machine.png'
import Customers from '../Assets/Images/Png/Customers.png'

const WhyChooseus = () => {
    return (
        <>
            <section>
                <Container className='py-5 '>
                    <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <h2 className='fc-black fw-800 fs-48 ff-Nunito'>Why Choose Us</h2>
                        <p className='ff-Nunito fc-gray fs-16 fw-400 max-700 mt-3'>We have already set our standards high from other retailers in the industry due to the strong commitment to the service we provide,
                            we are one of the few retailers who are on top of their business, standing out from the others.</p>
                    </div>
                    <Row className='justify-content-center mt-5'>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center'>
                            <div className='box1 d-flex justify-content-center align-items-center flex-column'>
                                <img src={Machine} alt="Machine Image" />
                                <h2 className='fw-800 fs-24 mb-0 fc-black ff-Nunito text-center mt-3'>Technical Machines</h2>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} className='mt-md-0 mt-4 d-flex justify-content-center'>
                            <div className='box1 d-flex justify-content-center align-items-center flex-column'>
                                <img src={Customers} alt="Customers" />
                                <h2 className='fw-800 fs-24 mb-0 fc-black ff-Nunito text-center mt-3'>1000+ Costumers</h2>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} className='mt-lg-0 mt-4 d-flex justify-content-center'>
                            <div className='box1 d-flex justify-content-center align-items-center flex-column'>
                                <img src={Sell} alt="Doors Frame" />
                                <h2 className='fw-800 fs-24 mb-0 fc-black ff-Nunito text-center mt-3'>10000+ Doors Sold</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WhyChooseus