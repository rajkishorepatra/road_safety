import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar_ele() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant='pills' className="mx-auto" style={{fontSize: 20}}>
                        <Nav.Link href="#features" className='ms-4'>Why?</Nav.Link>
                        <Nav.Link href="#pricing" className='ms-4'>Take Pledge</Nav.Link>
                        <Nav.Link href="#deets" className='ms-4'>Blogs</Nav.Link>
                        <Nav.Link href="#memes" className='ms-4'>About us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar_ele