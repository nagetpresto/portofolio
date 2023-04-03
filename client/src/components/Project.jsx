import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

function Project() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container id="Project" className="py-5 project" data-aos="fade-up" data-aos-delay="200">   
            <h3 className='text-center'>Project</h3>  
            <div className='text-center d-flex justify-content-center'>
                <hr className='col-2 mt-0'/>
            </div>
            <p className='text-center'>These are several projects that I have completed to provide me
                to have a more practical experience with teamwork and collaborations. Most of them
                are projects during my college life.</p>   
            <Row className='mt-5'>
                <Col xs={12} md={12} xl={12} className="about-left d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column" style={{rowGap:'40px'}}>
                        <Card className='project-card'>
                            <Card.Body className='py-0 px-0 d-flex flex-row justify-content-center align-items-center'>
                                <div className='project-img d-flex justify-content-center align-items-center col-5'>
                                    <img className="" src='/vba.jpg'/>
                                </div>
                                <div className='project-body px-3 col-7'>
                                    <h5>Data Entry, VBA Macro</h5>
                                    <span>Last Company Project (2022)</span>
                                    <hr/>
                                    <p className="mb-4" style={{textAlign:'justify'}}>I was responsible for managing records of problems in production line.
                                        To have a more efficient input process for the admin and a read-able report, I tried
                                        to develope a data entry program using VBA Macro. I also tried to build a web-based
                                        data entry using HTML, CSS, and PHP.
                                    </p>
                                    <a className="px-3 py-1 project col-5 d-flex justify-content-center align-items-center" 
                                        href='https://drive.google.com/drive/folders/1PgiYKX6DPY5NnHn2UZo9RWHg90dAtWQx?usp=share_link'
                                        target="_blank"
                                        style={{cursor:'pointer', fontSize:'13px'}}
                                        >Click to see more
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='project-card'>
                            <Card.Body className='py-0 px-0 d-flex flex-row justify-content-center align-items-center'>
                                <div className='project-img d-flex justify-content-center align-items-center col-5'>
                                    <img className="" src='/gantry.jpg'/>
                                </div>
                                <div className='project-body px-3 col-7'>
                                    <h5>Engineering Component Design</h5>
                                    <span>Design and Analyze Fatigue Stress (2021)</span>
                                    <hr/>
                                    <p className="mb-4" style={{textAlign:'justify'}}>This project aims to
                                        build a system that is useful for public health officers during Covid-19 outbreak.
                                        In this project, I was responsible for doing 3d design using Solidworks.
                                        I was also responsible for supporting in analyzing 
                                        dimenssion and fatigue stress so that the system can hold a body up to 200kg.
                                    </p>
                                    <a className="px-3 py-1 project col-5 d-flex justify-content-center align-items-center" 
                                        href='https://doi.org/10.36289/jtmi.v16i2.235'
                                        target="_blank"
                                        style={{cursor:'pointer', fontSize:'13px'}}
                                        >Click to see more
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                {/* <Col xs={7} md={7} xl={7} className="about-right d-flex justify-content-center align-items-center">
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

export default Project