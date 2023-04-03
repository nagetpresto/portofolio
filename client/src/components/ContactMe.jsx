import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Footer from './Footer';

function ContactMe() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container fluid id="ContactMe" className="py-5 contactme" data-aos="fade-up" data-aos-delay="200">   
            <h3 className='text-center'>Get in Touch</h3>  
            <div className='text-center d-flex justify-content-center'>
                <hr className='col-2 mt-0'/>
            </div>     
            <p className='text-center'>I'd love to have a connection. Let's talk!</p>
            <Row className='mt-5 pt-5'>
                <Col xs={4} md={4} xl={4} className="about-left d-flex justify-content-center align-items-center">
                    <Row className="">
                        <i className="fas fa-map-marker-alt text-center"></i>
                        <p className='text-center mt-3'>Jakarta, Indonesia</p>
                    </Row>
                </Col>
                <Col xs={4} md={4} xl={4} className="about-left d-flex justify-content-center align-items-center">
                    <Row className="">
                        <i class="fas fa-envelope text-center"></i>
                        <p className='text-center mt-3'>bilqist1234@gmail.com</p>
                    </Row>
                </Col>
                <Col xs={4} md={4} xl={4} className="about-left d-flex justify-content-center align-items-center">
                    <Row className="">
                        <i className="fab fa-linkedin-in text-center"></i>
                        <p className='text-center mt-3'>linkedin.com/in/bilqistaz/</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMe