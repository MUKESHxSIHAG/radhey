import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const StayInTouch = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
      <>
          <section className='bgmanufacturing py-5'>
              <Container>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                      <h2 className='fs-48 fc-white ff-Nunito fw-800'>Stay In Touch</h2>
                      <p className='fs-16 fc-white ff-Nunito fw-400 opacity-75 mt-2 max-480 text-center'>For fast service and unbeatable prices, fill out the request below and well get back to you with quotes for available options.</p>
                  </div>
                  <Container>
                      <div className='d-flex justify-content-center align-items-center mt-5'>
                          <form ref={form} onSubmit={sendEmail} className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
                              <input type="text" name="user_name" placeholder='Enter Your Name' />

                              <input type="email" name="user_email" placeholder='Enter Email Address' />
                              <input type="text" name="user_email" placeholder='Enter Your Contact No.'  />

                          </form>
                      </div>

                      <div className='d-flex justify-content-center align-items-center mt-5'>
                          <form ref={form} onSubmit={sendEmail}>
                              <input className='submitBtn' type="submit" value="Submit" />
                          </form>
                      </div>
                  </Container>
              </Container>
              <div className='line'></div>
      </section>
      </>
  )
}

export default StayInTouch