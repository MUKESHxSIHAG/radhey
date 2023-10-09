import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx'
import RadheyLogo from '../Assets/Images/Png/RadheyLogo.png'
import { Instagram } from './Icons';
import { Discord } from './Icons';
import { Twitter } from './Icons';

const RadheyNav = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div className='bg-black'>
            <Container>
                <div className='d-flex justify-content-between py-2 align-items-center' >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <Link><img width={140} height={80} src={RadheyLogo} alt="Logo" />
                            <p className='fs-24 fw-800 fc-white ff-Nunito'>ENTERPRISE</p></Link>
                    </div>

                    <h3 className='position-relative z-3 d-lg-none text-white' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu /> : <RxCross1 />}  </h3>
                    <ul className={first ? 'd-flex gap-5 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-5 nav_bar pt-2 show"} id='nav' >
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>HOME</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>OUR STORY</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>ROADMAP</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>TRAITS</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>TEAM</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>GENSIS</Link></li>
                        <li className='pt-2'><Link className='fc-white fw-600 ff-Nunito fs-16 underline '>FAQS</Link></li>
                    </ul>

                </div>
                <div className='timeline'> </div>

            </Container>
        </div>
    )
}

export default RadheyNav
