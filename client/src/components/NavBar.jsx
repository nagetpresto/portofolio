import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, scroller } from 'react-scroll';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";

function NavBar() {
    useEffect(() => {
        AOS.init();
    })

    const [click, setClick] = useState(true)

    return(
        <Navbar expand="lg" className='bg-light fixed-top' data-aos="fade-down" data-aos-delay="100">
            <Container className='ms-auto d-flex flex-row px-md-0 px-5'>
                <Navbar.Brand href="/">
                    <img src="/navbar.png" className='logo' width="120" alt="Logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link href="/">Personal Web</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto nav-menu">
                        <Nav.Link 
                            onClick={() => scroller.scrollTo('Home', {
                                smooth: true,
                                offset: -100,
                                duration: 200,
                            })}
                            className="me-2">Home
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => scroller.scrollTo('About', {
                                smooth: true,
                                offset: -150,
                                duration: 200,
                            })}
                            className="me-2"> About
                        </Nav.Link>

                        <Nav.Link 
                            onClick={() => scroller.scrollTo('Portofolio', {
                                smooth: true,
                                offset: -130,
                                duration: 200,
                            })}
                            className="me-2">Portofolio
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => scroller.scrollTo('Project', {
                                smooth: true,
                                offset: -150,
                                duration: 200,
                            })}
                            className="me-2">Project
                        </Nav.Link>
                        
                        <a className="px-3 contact-me d-flex justify-content-center align-items-center" href="/">Contact Me</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar