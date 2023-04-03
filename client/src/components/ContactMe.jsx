import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

function ContactMe() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container id="ContactMe" className="py-5 about" data-aos="fade-up" data-aos-delay="200">   
            <h1 className='text-center'>Contact Me</h1>  
            <div className='text-center d-flex justify-content-center'>
                <hr className='col-3'/>
            </div>     
            <Row className='mt-5'>
                {/* <Col xs={5} md={5} xl={5} className="about-left d-flex justify-content-center align-items-center">
                    <Row className="">
                        <Card className='about-card px-0 mx-0'>
                            <Card.Img className='about-card-img' variant="top" src="/photo.jpg" />
                            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                <Card.Title>Bilqist Imeilia Az Zahra</Card.Title>
                                <Card.Text className='text-center'>
                                Fullstack Developer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>

                <Col xs={7} md={7} xl={7} className="about-right d-flex justify-content-center align-items-center">
                    <Row className="">
                        <div className="introduction">
                            <p className='text' style={{textAlign:'justify'}}>
                                A fresh Mechanical Engineering graduate at Sampoerna University,
                                partnership with The University of Arizona, who received a fast-track
                                dual-degree program scholarship, fully funded by Putera Sampoerna Foundation.
                                <br/>
                                <br/>
                                I have a strong interest in Fullstack Development, especially working on the beckend side.
                                Currently, I am capable of doing project using Bootstrap, ReactJs, Go (Echo, GORM, Clean Architecture, Go Mail),
                                Midtrans, MapBox.
                            </p>
                        </div>
                        <div className="social-icon">
                            <span className="social">
                                <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/bilqistaz/"><i class="fab fa-linkedin-in"></i></a>
                                <a className="github" target="_blank" href="https://github.com/nagetpresto/"><i class="fab fa-github" aria-hidden="true"></i></a>
                                <a className="instagram" target="_blank" href="https://www.instagram.com/bilqistaz/"><i class="fab fa-instagram"></i></a>
                                <div className="cv-link py-1">
                                    <p className="cv">Download My CV<a href="https://drive.google.com/drive/folders/1TOOv0XzEWZklDXCvImMXM8ejUSifSTBw?usp=sharing"><i class="fa fa-download"></i></a></p>
                                </div>
                            </span>
                        </div>
                    </Row>
                </Col> */}
            </Row>
        </Container>
    )
}

export default ContactMe