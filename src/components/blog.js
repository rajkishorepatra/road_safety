import React, { useState } from 'react'
import UnderLine from './common/underline'
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/blog.css'

function Blog() {
    const [showBlog, setShowBlog] = useState(false);
    const handleCloseBlog = () => setShowBlog(false);
    const handleShowBlog = () => setShowBlog(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    // vertical: true,
                    // verticalSwiping: true,
                }
            }]
    };

    return (
        <>
            <div className='blog' id='blogs'>
                <h1 className='text-center mt-5'>Blogs</h1>
                <UnderLine />


                <div>
                    <Slider {...settings} className='mb-5'>
                        <div>
                            <div className='blog_data mt-0'>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/IMG_4348_0.jpg?itok=u2olvU8_' alt='..' />
                                <div className='blog_about mx-5'>
                                    <h5><b><span id='blg1t'>Saving lives through investments in public bus systems</span></b></h5>
                                    <p id='blg1p'>India suffers from the highest burden of road crashes, contributing to nearly 10% of global road deaths. In just the last decade (2008-2017), road crashes in India have increased by 23%, with an average annual increase of about 2% every year. The problem is particularly acute in urban areasThe problem is particularly acute in urban areas, which witness nearly 42% of all crashes in the...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data mt-0'>
                                <div className='blog_about mx-5'>
                                    <h5><b><span>Design elements to rejuvenate Indian Streets: A case of Bellasis Road, Mumbai</span></b></h5>
                                    <p>Streets in the last century were primarily designed as a mode of transport for goods and services. This automobile-centric approach of street design stifled the human accessibility aspect.<br />
                                        Mumbai is a city of pedestrians, with 51% of the total daily trips being walk trips, according to the...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog}>READ MORE</button>
                                    </div>
                                </div>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/Bellasis-Road-Figure-2.jpg?itok=z8suHnCt' alt='..' />
                            </div>
                        </div>
                        <div>
                            <div className='blog_data mt-0'>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/12764444403_1d93d69204_z.jpg?itok=Qk-lh8_1' alt='..' />
                                <div className='blog_about mx-5'>
                                    <h5><b><span>India Has the Worst Road Safety Record in the World. A New Law Aims to Change That</span></b></h5>
                                    <p>India’s parliament approved the Motor Vehicles Amendment Bill on July 31, 2019, the result of a five-year effort to improve national legislation on road safety. After the president’s approval, India’s streets may finally
                                        <br />
                                        Road traffic deaths have reached alarming levels across the world, with...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data mt-0'>
                                <div className='blog_about mx-5'>
                                    <h5><b><span>How State-Level Commitments to Vision Zero Could be a Game Changer for Road Safety in India</span></b></h5>
                                    <p>Last year, WRI India launched India Vision Zero, a road safety forum to deliberate on the challenges, opportunities, and solutions towards reducing road traffic fatalities in India.<br />
                                        India currently tops the list with the highest number of road traffic deaths in the world. By contextualising...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog}>READ MORE</button>
                                    </div>
                                </div>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/featured_amit.jpeg?itok=AaF7c001' alt='..' />
                            </div>
                        </div>
                        {/* <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div> */}
                    </Slider>
                </div>

                <Modal show={showBlog} className="my-4" onHide={handleCloseBlog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hello</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>How are you?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseBlog}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                <div className="container text-center mx-auto">
                    <div className="row">
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/7TESgUA-JW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/_NeEF1fwT4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>


                <div className="container text-center my-5">
                    <div className="row">
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/lDQ3-7-wAOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/V9AFfjesOb4?start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog