import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Manufacture from '../Assets/Images/Png/Manufacture.png'
import Delivery from '../Assets/Images/Png/Delivery.png'
import Bulk from '../Assets/Images/Png/Bulk.png'

const Manufacturing = () => {
    return (
        <>
            <section className='bgmanufacturing'>
                <Container>
                    <Row className='py-5 justify-content-center align-items-center'>
                        <Col lg={4} md={6}>
                            <div className='d-flex justify-content-center flex-column align-items-center'>
                                <img src={Manufacture} alt="" />
                                <h3 className='fc-white fs-24 fw-600 ff-Nunito'>Direct Manufacturers</h3>
                                <p className='fc-white ff-Nunito fw-400 fs-16 text-center'>We are not traders we are direct manufacturer.</p>
                        </div>
                        </Col>
                        <Col lg={4} md={6} className='mt-md-0 mt-4'>
                            <div className='d-flex justify-content-center flex-column align-items-center'>
                                <img src={Delivery} alt="" />
                                <h3 className='fc-white fs-24 fw-600 ff-Nunito'>Fastest Delivery</h3>
                                <p className='fc-white ff-Nunito fw-400 fs-16 text-center'>Within 7 days delivery.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mt-lg-0 mt-4'>
                            <div className='d-flex justify-content-center flex-column align-items-center'>
                                <img src={Bulk} alt="" />
                                <h3 className='fc-white fs-24 fw-600 ff-Nunito'>Bulk Orders</h3>
                                <p className='fc-white ff-Nunito fw-400 fs-16 text-center'>This website is only for enquire and bulk orders. We do not sell our product online on website.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Manufacturing