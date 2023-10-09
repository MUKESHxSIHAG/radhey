import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <>
            <section className='bgImg d-flex flex-column justify-content-center align-items-center'>

                <h1 className='ff-Nunito fw-800 fc-white pb-4 fs-64 text-center'>Modern Design Door <span className='d-block'>Manufacturers In India</span></h1>
                <p className='ff-Nunito fw-400 fc-white text-center fs-48'>Customized And Handcrafted <span className='d-block'> Doors In All Price Ranges</span></p>

                <button className='mb-0 ff-Nunito fc-white fs-16 fw-500'>Discover Now</button>
            </section>
        </>
    )
}

export default HeroSection