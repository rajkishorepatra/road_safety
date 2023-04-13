import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BlogData from '../components/blogData';
import '../css/Blog_Desc.css'
import Footer from '../components/footer';
import UnderLine from '../components/common/underline';

function Blog_Desc() {
  const [eventDetails, setEventDetails] = useState(null);
  const blog_num = window.location.href.split("/")[3];
  useEffect(() => {
    let obj = BlogData.find((o) => o.path_code == blog_num);
    if (obj) {
      setEventDetails(obj);
    } else {
    }
  }, []);
  console.log(eventDetails);
  return (
    <>
      {
        eventDetails ? (
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
              <Container>
                <Nav className="justify-content-end" style={{ fontSize: 20 }}>
                  <Nav.Link href="/" className='ms-4'>#BeStreetSmart</Nav.Link>
                </Nav>
              </Container>
            </Navbar>

            <div className='blogPage mt-4'>
              <Container>
                <h1 className='m-auto'>{eventDetails.title}</h1>
                <UnderLine/>
                <img src={eventDetails.img} alt='blogPoster' className='blogPoster m-auto'/>
                <p className='mt-3'>{eventDetails.desc}</p>
              </Container>
            </div>
            <Footer />
          </div>
        ) : (<h1>404 Not Found</h1>)}
    </>
  )
}

export default Blog_Desc