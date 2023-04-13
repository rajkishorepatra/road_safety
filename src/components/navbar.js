import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar_ele() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" style={{fontSize: 20}}>
                        <Nav.Link href="#why" className='ms-4'>Why?</Nav.Link>
                        <Nav.Link href="#pledge" className='ms-4'>Take Pledge</Nav.Link>
                        <Nav.Link href="#blogs" className='ms-4'>Blogs</Nav.Link>
                        <Nav.Link href="#about" className='ms-4'>About us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar_ele