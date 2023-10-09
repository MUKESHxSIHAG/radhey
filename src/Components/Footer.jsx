import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RadheyLogo from '../Assets/Images/Png/RadheyLogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <section className='bg-black'>
                <Container>
                    <Row className='justify-content-center align-items-center py-5' id='footer'>
                        <Col lg={3} md={12}>
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <img className='w-100%' width={250} height={100} src={RadheyLogo} alt="Logo" />
                                <p className='ff-Nunito fw-800 fc-white fs-24'>ENTERPRISE</p>
                                <div>
                                    <p className='fc-white fs-14 fw-600 ff-Nunito text-center max-200'>ADDRESS: D.N. ITI road, Bhattu Mandi, Fatehabad, Haryana(125053)</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} xs={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <ul className='pt-4'>
                                    <li className='fc-white ff-Nunito fw-700 fs-16'>About</li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Merchants</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Partners</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">7 Days Delivery</a></li></ul>
                          </div>
                        </Col>

                        <Col lg={3} xs={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <ul className='pt-4'>
                                    <li className='fc-white ff-Nunito fw-700 fs-16'>Social Media</li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Instagram</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Facebook</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Whatsapp</a></li>
                               </ul>
                            </div>
                        </Col>

                        <Col lg={3} xs={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <ul className='pt-4'>
                                    <li className='fc-white ff-Nunito fw-700 fs-16'>Contact Us</li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Vikram Machra: +91 94662-47539</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Ajit Sai: +91 98126-86289</a></li>
                                    <li className='mt-2 '><a className='fc-white ff-Nunito fw-400 fs-14 underline' href="">Robin Saharan: +91 90532-35027</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer